'use client'
import { useEffect, useState } from 'react';
import Navigation from './components/circleNavigation';
import NavigationMobile from './components/circleNavigationMobile';
import Description from './components/Description';

export default function Home() {

  const [isMobile, setIsMobile] = useState<boolean>();
  function handleWindowSizeChange() {

    if (window.innerWidth < 768)
      setIsMobile(true);
    else
      setIsMobile(false);
  }

  useEffect(() => {
    if (window.innerWidth < 768)
      setIsMobile(true);
    else
      setIsMobile(false);
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  if (isMobile)
    return (

      <div className={`w-full h-full flex p-1 justify-center items-center bg-[url(/background/background-m.jpg)] bg-cover bg-no-repeat rounded`}>
        {/* <p className='w-full py-2 px-4 bg-slate-400/75 rounded-2xl text-white  text-xl text-center'>This Site is only available on Desktop.</p> */}
        <NavigationMobile />
      </div>
    )
  else
    return (
      <div className='w-max h-[100vh] flex bg-black/90'>
        <Navigation />
        <Description />
      </div>
    );
}
