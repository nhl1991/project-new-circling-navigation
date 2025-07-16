import Link from "next/link";
import { useStore } from "../lib/stores";
import Image from "next/image";

export default function Description() {

    const { item } = useStore();
    const onClose = () => {
        window.scrollTo({
            left: -window.innerWidth,
            behavior: 'smooth'
        })
    }

    return (
        <div className='w-[25vw] h-full pl-2 '>
            <div className="w-full h-full bg-slate-800 rounded-l-2xl">
                <div className='w-full h-max  flex items-center justify-end p-2'>
                    {/* <p className='text-xl px-4 py-1'>{item.id.toUpperCase()}</p> */}
                    <button onClick={onClose}>
                        <svg className="w-12" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {item != undefined ? <div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
                    <div className="w-48 h-48 relative rounded-full overflow-hidden ">
                        <Image className="object-contain" src={item.imgSrc} alt={item.id} fill />
                    </div>
                    <Link href={item.href } className="hover:opacity-80 px-4 py-2 rounded-2xl bg-sky-800">{item.id.toUpperCase()}</Link>
                </div> : null}
            </div>
        </div>
    )

}