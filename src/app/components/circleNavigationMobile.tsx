'use client'

import Image from 'next/image';
import Link from 'next/link';
import item from '@/app/lib/items.json'

export default function NavigationMobile() {

    const cirlceCount = 8; // Just change this value to add more circle and adjust size in page.module.css file

    return (
        <div id="ring" className='w-full h-max p-4 grid grid-cols-3 place-items-center bg-slate-400/50 rounded-2xl' >

            {   
                Array.from({ length: cirlceCount }).map((__, i) => {
                    return <div key={i} className='w-max h-max '>
                        <div title='menu' className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
                            <Link id={item[i].id} className='w-full h-full rounded-full flex items-center justify-center border-4 border-transparent hover:border-cyan-300 overflow-hidden' href={item[i].href}>
                                <Image className='w-full h-full object-fit' src={`${item[i].imgSrc}`} width={125} height={125} alt="project" />
                            </Link>
                        </div>
                        <p className='w-full text-center p-2 text-white font-bold'>{item[i].id}</p>
                    </div>

                })
            }
        </div>
    )
}