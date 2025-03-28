'use client'
import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { WheelEvent } from 'react';
import item from '@/app/lib/items.json'

export default function Navigation() {

    const cirlceCount = 8; // Just change this value to add more circle and adjust size in page.module.css file
    const angle = 360 / cirlceCount;
    let num = 0;
    const deg = 15;

    const elTranform = {
        rot: 0,   // the rotation 'counter' for the element 'el'
        sca: 1,   // the scale 'counter' for the element 'el'
        rev: 0
    };

    function handleOnWheel(e: WheelEvent<HTMLDivElement>) {
        const circles = document.querySelectorAll('#ring div div');
        num += e.deltaY * -0.01;
        elTranform.rot = num * deg;
        elTranform.rev = -num * deg;

        e.currentTarget.style.transform = `rotate(${elTranform.rot}deg)`;
        for (let i = 0; i < circles.length; i++) {
            const value = (elTranform.rev - (angle * i));

            (circles[i] as HTMLElement).style.transform = `rotate(${value}deg)`
        }
    }
    return (
        <div id="ring" className='w-[500px] h-[500px] border-4 border-gray-200 relative rounded-full invisible md:visible' onWheel={handleOnWheel}>
            {
                Array.from({ length: cirlceCount }).map((__, i) => {
                    return <div key={i} style={{ transform: `rotate(${i * angle}deg)` }} className={styles.container}>
                        <div title='menu' style={{ transform: `rotate(-${i * angle}deg)` }} className={styles.item}>
                            <Link id={item[i].id} className='w-full h-full z-50 rounded-full flex items-center justify-center border-4 border-transparent hover:border-cyan-300 overflow-hidden' href={item[i].href}>
                                <Image className='w-full h-full object-fit' src={`${item[i].imgSrc}`} width={125} height={125} alt="project" />
                            </Link>
                        </div>
                    </div>
                })
            }
        </div>
    )
}