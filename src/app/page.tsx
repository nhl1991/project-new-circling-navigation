'use client'
import { useEffect, useState } from 'react';
import Navigation from './components/circleNavigation';

export default function Home() {

  const [isMobile, setIsMobile] = useState<boolean>();

  function handleWindowSizeChange() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768)
      setIsMobile(true);
    else
      setIsMobile(false);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [isMobile]);

  if (isMobile)
    return (

      <div className={`w-full h-full flex py-2 px-4 justify-center items-center bg-[url(/background/background-m.jpg)] bg-cover bg-no-repeat rounded`}>
        <p className='w-full py-2 px-4 bg-slate-400/75 rounded-2xl text-white  text-xl text-center'>This Site is only available on Desktop.</p>
      </div>
    )
  else
    return (
      <div className={`w-full h-full flex justify-center items-center bg-[url(/background/background.png)] bg-cover bg-no-repeat rounded`}>
        <Navigation />
      </div>
    );
}
