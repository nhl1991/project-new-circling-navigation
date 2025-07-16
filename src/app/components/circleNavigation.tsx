'use client'
import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import item from '@/app/lib/items.json'
import { Item, useStore } from '../lib/stores';

export default function Navigation() {
    const { rotation, setItem, setRotation } = useStore();
    const ringRef = useRef<HTMLDivElement>(null);
    const smallRingRef = useRef<HTMLDivElement[]>([]);
    const rotationRef = useRef(0)
    const cirlceCount = item.length; // Just change this value to add more circle and adjust size in page.module.css file
    const angle = 360 / cirlceCount;
    const deg = 15;

    const elTranform = {
        rot: rotation,   // the rotation 'counter' for the element 'el'
        sca: 1,   // the scale 'counter' for the element 'el'
        rev: 0
    };

    const handleOnWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
        if (!ringRef || !ringRef.current) return;
        if(!smallRingRef || !smallRingRef.current) return;


        // const circles = document.querySelectorAll('#ring div div');
        rotationRef.current += e.deltaY * -0.01;
        elTranform.rot = rotationRef.current * deg; // big circle rotation degree.
        elTranform.rev = -rotationRef.current * deg;

        ringRef.current.style.transform = `rotate(${elTranform.rot}deg)`;
        for (let i = 0; i < smallRingRef.current.length; i++) {
            const value = (elTranform.rev - (angle * i));
            smallRingRef.current[i].style.transform = `rotate(${value}deg)`;
            // (circles[i] as HTMLElement).style.transform = `rotate(${value}deg)`
        }
    }
// React.MouseEventHandler<HTMLAnchorElement>
    const onClick = (e:React.MouseEvent<HTMLAnchorElement>, item:Item) => {
        e.preventDefault();

        setRotation(elTranform.rot) //To prevent re-render, store the current value when user clicks the item.
        setItem(item);
        window.scrollTo({
            left: window.innerWidth,
            behavior: 'smooth'
        })
    };


    return (

        <div className={`w-[100vw] h-[100vh] flex justify-center items-center bg-black relative`}>
            <div className='w-max h-max relative'>
                <div id="ring" className='w-[500px] h-[500px] border-4 border-white/10 rounded-full invisible md:visible relative' onWheel={handleOnWheel} ref={ringRef}>

                    {
                        Array.from({ length: cirlceCount }).map((__, i) => {
                            return <div key={i} style={{ transform: `rotate(${i * angle}deg)` }} className={styles.container}>
                                <div title='menu' style={{ transform: `rotate(-${i * angle}deg)` }} className={styles.item} ref={(el)=> {if(el) smallRingRef.current[i] = el;}}>
                                    <Link id={item[i].id} className='w-full h-full z-50 rounded-full flex items-center justify-center border-4 border-transparent hover:border-gray-200/50 hover:bg-gray-200/50 overflow-hidden relative' href={item[i].href} onClick={(e)=> {onClick(e,item[i])}} >
                                        <Image className='w-full h-full object-cover bg-white/60' fill sizes='(min-width: 125px, min-height: 125px) 100vw, (min-width: 60px, min-height: 60px) 50vw' src={`${item[i].imgSrc}`} alt="project" />
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}