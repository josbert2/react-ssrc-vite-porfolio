
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

                <motion.div 
                  animate={!scrolled ? { display: 'none', y: -20, opacity: 0 } : {  display: "block", y: 0, opacity: 1, }}
                  transition={{ duration: !scrolled ? 0.1 : 0.6, ease: easeOutQuint,   delay: !scrolled ? 0 : 0.3, }}
                  className="ml-auto ">
                      
                      
                      <div
                        className="relativeisolate grid  auto-cols-fr grid-flow-col gap-1 rounded-10 bg-bg-weak-50 p-1"
                        style={{ outline: "none" }}
                      >
                        <button className=" bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github text-[#9b9b9b] w-4 h-4"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </button>
                        <button className="  bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-instagram text-[#9b9b9b] w-4 h-4"
                          >
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </button>
                        <button className="   bg-ln-gray-0 relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin text-[#9b9b9b] w-4 h-4"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width={4} height={12} x={2} y={9} />
                            <circle cx={4} cy={4} r={2} />
                          </svg>
                        </button>
                        <button className="   bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-codepen text-[#9b9b9b] w-4 h-4"
                          >
                            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                            <line x1={12} x2={12} y1={22} y2="15.5" />
                            <polyline points="22 8.5 12 15.5 2 8.5" />
                            <polyline points="2 15.5 12 8.5 22 15.5" />
                            <line x1={12} x2={12} y1={2} y2="8.5" />
                          </svg>
                        </button>
                        <button className="   bg-ln-gray-0 relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-twitter text-[#9b9b9b] w-4 h-4"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </button>
                      </div>
  


                </motion.div>
           
             
            
              
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
