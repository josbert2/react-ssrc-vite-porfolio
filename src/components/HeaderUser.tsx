
import { useState, useEffect } from "react";
import { motion } from "motion/react";


export default function HeaderUser() {

  const easeOutQuint = [0.23, 1, 0.32, 1];

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.3; // 30% de la altura del viewport
      setScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.div
      className="fixed top-[20px]  left-0 !transform tranform-x-2/4 z-[9999] flex w-full items-center justify-center gap-8 bg-ln-gray-900 lg:bg-transparent"
      initial={{ y: 0 }}
      animate={scrolled ? { y: -20, top: 0   } : { y: 0, top: "20px"  }} // Baja el header 40px si se cumple la condición
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1],   delay: 0.1, }} // Transición suave
    >
           
            {/*<AsteroidMotion /> */}
          
            {/*<div className="relative hidden h-px flex-1 bg-ln-gray-200 bleed-bg-l bleed-ln-gray-200 mac:block">
              <img
                src="https://alignui.com/images/landing/dot.png"
                width={9}
                height={9}
                alt=""
                className="absolute z-30 min-h-[9px] min-w-[9px] -top-1 -left-[37px]"
              />
              <img
                src="https://alignui.com/images/landing/dot.png"
                width={9}
                height={9}
                alt=""
                className="absolute z-30 min-h-[9px] min-w-[9px] -right-px -top-1"
              />
            </div> */}
            <motion.header 
              className="relative backdrop-blur-lg z-10 flex h-10 w-full items-center !py-[35px] justify-between  rounded-t-2xl bg-ln-gray-25 px-4  lg:justify-start lg:rounded-3xl bg-ln-gray-header  lg:shadow-ln-xs"
              animate={scrolled ? { width: "100%", borderRadius: '0' } : {  width: '50%', borderRadius: '16px' }} // Baja el header 40px si se cumple la condición
              transition={{ duration: 0.6, ease: easeOutQuint,   delay: 0.1, }} // Transición suave
            >
              <motion.div
                animate={!scrolled ? { top: ".3px", bottom: 'auto' } : { top: "auto", bottom: "0px" }}
               transition={{ duration: 0.2, ease: easeOutQuint,   delay: 0, }}
               className="absolute z-[9999] h-[1px] inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0 "></motion.div>
              <div className="flex items-center gap-2.5 pr-40 absolute top-2/4 transform -translate-y-2/4 ">
                <a className="focus:outline-none" href="/">
                  <div className="relative">
                    <h1 className="text-title-h6 bg-clip-text bg-gradient-to-b from-black dark:from-white text-transparent antialiased relative text-5xl sm:text-7xl font-bold py-1 font-anurati">
                      JH
                    </h1>
                  </div>
                </a>
               
              </div>
              <nav className="hidden justify-center items-center gap-2.5 lg:flex absolute top-2/4 transform -translate-y-2/4  right-0">
            
                <button className=" relative
                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                  px-4 text-label-sm outline-none transition duration-200 ease-out 
                  focus:outline-none text-ln-gray-500 shadow-regular-xs 
                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
                  01. About
                </button>
                <button className=" relative
                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                  px-4 text-label-sm outline-none transition duration-200 ease-out 
                  focus:outline-none  text-ln-gray-500 shadow-regular-xs 
                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
                  02. Experiencia
                </button>
                <button className=" relative
                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                  px-4 text-label-sm outline-none transition duration-200 ease-out 
                  focus:outline-none  text-ln-gray-500 shadow-regular-xs 
                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
                  03. Trabajos
                </button>
                <button className=" relative
                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                  px-4 text-label-sm outline-none transition duration-200 ease-out 
                  focus:outline-none  text-ln-gray-500 shadow-regular-xs 
                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
                  04. Contactos
                </button>
                
              </nav>

               
           
             
            
              
            </motion.header>
           {/* <div className="relative  h-px flex-1 bg-ln-gray-200 bleed-bg-r bleed-ln-gray-200 mac:block">
              <img
                src="https://alignui.com/images/landing/dot.png"
                width={9}
                height={9}
                alt=""
                className="absolute z-30 min-h-[9px] min-w-[9px] -top-1 -right-[37px] left-auto"
              />
              <img
                src="https://alignui.com/images/landing/dot.png"
                width={9}
                height={9}
                alt=""
                className="absolute z-30 min-h-[9px] min-w-[9px] -top-1 -left-px"
              />
            </div> */}
    </ motion.div>
  );
}
