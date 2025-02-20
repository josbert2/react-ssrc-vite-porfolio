"use client"


import React, { useState, useEffect } from "react";

import { motion, useAnimation } from "motion/react"
import { cn } from "../lib/cn"
import { UseMobile } from "../lib/utils"
import { useIsMobile } from "../hooks/use-mobile"
import { DotPattern } from "./dot-pattern";
import Presentacion from './presentacion'
import MarqueeHtml from './marquee'
import Travels from './Travels';

import profile from '../assets/profile.jpg'
import perfil from '../assets/perfil.jpg'


const DashedLineContainer = ({ children }: { children: React.ReactNode }) => {
  const container = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  return (
    <motion.div
      className="flex flex-col size-full relative"
      variants={container}
      initial="initial"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

const LineAbsolute = () => {
  //const isMobile = useIsMobile()
  const lineLeft = {
    initial: {
      opacity: 0,
      height: "0%",
    },
    visible: {
      opacity: 1,
      height: "100%",
      transition: {
        delay: 0.5,    // Delay de 0.5s para la línea izquierda
        duration: 0.8, // Ajusta la duración como prefieras
      },
    },
  }

  const lineRight = {
    initial: {
      opacity: 0,
      height: "0%",
    },
    visible: {
      opacity: 1,
      height: "100%",
      transition: {
        delay: 1,      
        duration: 0.8, 
      },
    },
  }

  return (
    <>
      <motion.div
        className="container pointer-events-none absolute inset-0 -z-10 select-none mac:block"
        initial="initial"
        animate="visible"
      
      >
        <motion.div
          className="absolute h-full w-[1px] -left-0 bleed-ln-gray-200 bg-[#2d2d2d] h-full"
          variants={lineLeft}
        />
        
        <motion.div
          className="absolute h-full w-[1px] -right-0 bleed-ln-gray-200 bg-[#2d2d2d] h-full"
          variants={lineRight}
        />
    </motion.div>
    </>
  )
}

const VerticalDashedLine = ({
  className,
  width = "100%",
  mobileWidth = "100%",
}: {
  className?: string
  width?: string
  mobileWidth?: string
}) => {
  const isMobile = useIsMobile()
  const variants = {
    initial: { width: "0%", opacity: 0.6 },
    visible: {
      width: isMobile ? mobileWidth : width,
      opacity: 0.2,
      transition: { duration: 1 },
    },
  }

  return (
    <motion.div
      variants={variants}
      className={cn(
        "relative border-dashed border-t border-primary",
        className
      )}
    />
  )
}

const HorizontalDashedLine = ({
  className,
  side,
  height = "100%",
}: {
  className?: string
  side: "left" | "right"
  height?: string
}) => {
  const variants = {
    initial: { height: "0%", opacity: 0.6 },
    visible: { height, opacity: 0.2, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      variants={variants}
      className={cn(
        "border-dashed border-l border-primary absolute top-0",
        side === "left" ? "left-0" : "right-0",
        className
      )}
    />
  )
}

const DashedCircle = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute hidden md:block", className)}>
      <motion.div className="relative" initial="initial" animate="visible">
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="absolute inset-0 border-color svg-stroke-color"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="current"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-primary/20"
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

const Feature = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <motion.div
      className="p-6 bg-background/50 backdrop-blur-sm border-l border-t border-dashed border-primary/20 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.h3
        className="text-xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 pointer-events-none"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const BecomeSponsor = () => {
  return (
    <motion.div
      className="bg-background/50 backdrop-blur-sm border-x border-b border-dashed border-primary/20 relative overflow-hidden group py-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div className="flex flex-col items-center gap-4">
        <motion.h3
          className="text-xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Become a Sponsor
        </motion.h3>

        <motion.p
          className="text-muted-foreground text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          If you find AnnUI helpful, please consider sponsoring us to support
          our development
        </motion.p>

        <motion.a
          href="https://discord.gg/EnzWx4Ck"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sponsor on Discord
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 pointer-events-none"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const GetStarted = () => {
  const controls = useAnimation()

  const variants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%" },
  }

  const textVariants = {
    initial: { color: "hsl(var(--background))" },
    animate: { color: "hsl(var(--primary))" },
  }

  return (
    <Link href="/docs">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 relative overflow-hidden h-10"
        onHoverStart={() => {
          controls.start("animate")
        }}
        onHoverEnd={() => {
          controls.start("initial")
        }}
      >
        <motion.div className="absolute inset-0 bg-primary text-primary-foreground rounded-lg" />
        <motion.span
          className="relative z-[2] text-nowrap"
          variants={textVariants}
          animate={controls}
          initial="initial"
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.span>
        <motion.div
          initial="initial"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.3 }}
          className="bg-accent absolute inset-0 z-[1] rounded-md"
        />
      </motion.button>
    </Link>
  )
}

const Github = () => {
  return (
    <Link href="https://github.com/annui-org/annui" target="_blank">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-8 py-2 relative overflow-hidden border border-input rounded-lg h-10"
      >
        Github
      </motion.button>
    </Link>
  )
}

const HeaderUser = () => {
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


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,  
        staggerChildren: 0.2,  
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };


  return (
    <>
      <motion.div
      
        className="fixed top-[20px]  left-0 !transform tranform-x-2/4 z-[9999] flex w-full items-center justify-center gap-8 bg-ln-gray-900 lg:bg-transparent"
        initial={{ y: 0 }}
        animate={scrolled ? { y: -20, top: 0   } : { y: 0, top: "20px"  }} // Baja el header 40px si se cumple la condición
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1],   delay: 0.1, }} // Transición suave
      >
            
              <motion.header 
                
                className="relative w-[50%] backdrop-blur-lg z-10 flex h-10 w-full items-center !py-[35px] justify-between  rounded-t-2xl bg-ln-gray-25 px-4  lg:justify-start lg:rounded-3xl bg-ln-gray-header  lg:shadow-ln-xs"
                animate={scrolled ? { width: "100%", borderRadius: '0' } : {  width: '50%', borderRadius: '16px' }} // Baja el header 40px si se cumple la condición
                transition={{ duration: 0.6, ease: easeOutQuint,   delay: 0.1, }} // Transición suave
              >
                <motion.div
                  animate={!scrolled ? { top: ".3px", bottom: 'auto' } : { top: "auto", bottom: "0px" }}
                transition={{ duration: 0.2, ease: easeOutQuint,   delay: 0, }}
                className="absolute z-[9999] h-[1px] inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0 "></motion.div>
                <div className="flex items-center gap-2.5 pr-40 absolute top-2/4 transform -translate-y-2/4 ">
                  <Link className="focus:outline-none" href="/">
                    <div className="relative">
                      <h1 className="text-title-h6 bg-clip-text bg-gradient-to-b from-black dark:from-white text-transparent antialiased relative text-5xl sm:text-7xl font-bold py-1 font-anurati">
                        JH
                      </h1>
                     
                    </div>
                  </Link>
                
                </div>
                <motion.nav 
                  initial="hidden" 
                  animate={!scrolled ? {  left: '0' } : { left: '50%' }}
                  variants={containerVariants}
                  className="hidden justify-center items-center gap-2.5 lg:flex absolute top-2/4 transform -translate-y-2/4 ">
              
                  <motion.button className=" relative
                  inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                    px-4 text-label-sm outline-none transition duration-200 ease-out 
                    focus:outline-none text-ln-gray-500 shadow-regular-xs 
                    ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                  focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full"
                  variants={itemVariants}>
                    01. About
                  </motion.button>
                  <motion.button    variants={itemVariants} className=" relative
                  inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                    px-4 text-label-sm outline-none transition duration-200 ease-out 
                    focus:outline-none  text-ln-gray-500 shadow-regular-xs 
                    ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                  focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
                    02. Experiencia
                  </motion.button>
                  <motion.button    variants={itemVariants} className=" relative
                  inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                    px-4 text-label-sm outline-none transition duration-200 ease-out 
                    focus:outline-none  text-ln-gray-500 shadow-regular-xs 
                    ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                  focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
                    03. Trabajos
                  </motion.button>
                  <motion.button    variants={itemVariants} className=" relative
                  inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10
                    px-4 text-label-sm outline-none transition duration-200 ease-out 
                    focus:outline-none  text-ln-gray-500 shadow-regular-xs 
                    ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent
                  focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full">
                    04. Contactos
                  </motion.button>
                  
                </motion.nav>

                  <motion.div 
                    animate={!scrolled ? { display: 'none', y: -20, opacity: 0 } : {  display: "block", y: 0, opacity: 1, }}
                    transition={{ duration: !scrolled ? 0.1 : 0.6, ease: easeOutQuint,   delay: !scrolled ? 0 : 0.3, }}
                    className="ml-auto hidden">
                        
                        
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
      </ motion.div>
    </>
  )
}

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center px-10 xl:px-72 py-32 z-[100]">
        <DashedLineContainer>
          {!useIsMobile() ? (
              <>
                <VerticalDashedLine
                  className="md:-left-10"
                  width="calc(100% + 80px)"
                  mobileWidth="100%"
                />
                <div className="z-[-10] ">
                  <DotPattern
                    className={cn(
                      "[mask-image:radial-gradient(235px_circle_at_center,white,transparent)] top-[-104px]",
                    )}
                  />
                </div>
              </>

          ) : (<></>)}
          
          
          
          <motion.div
            className="flex justify-center py-4 rounded-lg mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="frame rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                className="rounded-[24px]"
                src={perfil}
                alt="perfil"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </motion.div>


          <Presentacion />
          <div className="">
            <div className="mx-auto h-8 w-full max-w-[596px] items-center gap-6 px-4 my-4 hidden md:flex xl:my-8">
        
              

                <div className="relative h-px w-full flex-1 bg-ln-gray-200">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                    </svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px]  right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                      <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                    </svg>
                </div>
                
                <svg fill="none"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke="#434343" stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path stroke="#434343"  stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                </svg>

                

                <div className="relative h-px w-full flex-1 bg-ln-gray-200">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                </svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11" height="11" className="svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px]  right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                  <path d="M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z " fill="current" transform="translate(5.1875,-0.265625)"/>
                </svg>
                </div>
            </div>
            <div className="pb-4">
              <MarqueeHtml />
            </div>
          </div>

            {/*<Rrss /> */}
            
            {/*<OpenWork /> */}

      
          
      

          
            {!useIsMobile() ? (
              <>
                <VerticalDashedLine />
                <HorizontalDashedLine
                  className="-top-14"
                  height="calc(100% + 112px)"
                  side="left"
                />
                <HorizontalDashedLine
                  className="-top-14"
                  height="calc(100% + 112px)"
                  side="right"
                />
                <DashedCircle className="-top-12 -left-12" />
              </>
          ) : (<></>)}
          
          <div className="h-full w-full absolute top-0 right-0 overflow-hidden z-[-10]">
            <div className="w-full h-full flex justify-end">
              {/*<PlanetLine/> */}
            </div>
          </div>
        {/* <Stay /> */}
        </DashedLineContainer>
      </div>
    </>
  )
}

const UserTravels = () => {
  return (
    <>
      <div className="">
          <div className="mt-6 sm:mt-20 relative">
            <div className="absolute top-[35px] w-full h-[57px] bg-[#1a1a1d]">
            
            </div>
            <Travels />
          </div>
      </div>
    </>
  )
}


const AboutMe = () => {
  return (
    <>
      <div id="about" className="container  -z-10  mac:block">
        <section className="framer-bvzlds" >
          <div className="framer-h6odpz grid-col-2" >
              <div className="framer-1n4bwt" >
                  <div className="framer-9ydxhr">
                      <div className="ssr-variant hidden-upi8ji">
                          <div
                              className="framer-uzhzb6"
                            
                              style={{
                                outline: "none",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                flexShrink: 0,
                                transform: "none",
                              }}
                              
                          >
                              <h2
                                  style={{
                                    "--font-selector": "SW50ZXItTWVkaXVt",
                                    "--framer-font-family": "'Inter', 'Inter Placeholder', sans-serif",
                                    "--framer-font-size": "44px",
                                    "--framer-font-weight": "500",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "var(--token-a2d601b2-39bf-470a-bb5f-61bc109d99fd, rgba(255, 255, 255, 0.9))",
                                  } as React.CSSProperties}
                                  className="framer-text open-sans"
                              >
                                  <span  style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}>More</span> <span style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}>about</span>
                                  <span style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-weight": "600", "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
                                      <span style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}></span>
                                       <span style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}></span>
                                  </span>
                                  <span
                                      style={{
                                        "--font-selector": "R0Y7SW5zdHJ1bWVudCBTZXJpZi1pdGFsaWM=",
                                        "--framer-font-family": "'Instrument Serif', 'Instrument Serif Placeholder', serif",
                                        "--framer-font-style": "italic",
                                        "--framer-font-weight": "400",
                                        "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))",
                                      }}
                                      className="framer-text ml-3"
                                  >
                                      <span style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}>myself</span>
                                  </span>
                                  
                              </h2>
                               
                          </div>
                      </div>
                      <div
                          className="framer-11blnjb"
                          data-framer-name="Become part of something useful, In chart goat university we help each other and learn from each other everyday"
                          style={{
                            outline: "none",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            flexShrink: 0,
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                      >
                          <p className="framer-text framer-styles-preset-1kvyxmc open-sans" data-styles-preset="n7RLEGRKm">
                              <span style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}>Hi, i am josbert i am web developer frontend and creative enginer desing</span> 
                             
                          </p>



                      </div>
                      <span className="text-sm open-sans"  style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}>
                          <h3 className="text-base">🎨 Frontend & UI/UX</h3>
                          <ul 
                          className="mt-2 l !list-disc ml-5 pl-5 framer-text open-sans !text-sm"
                          style={{
                            listStyleType: "disc",
                            "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))"
                          }as React.CSSProperties }>
                              <li>Expertise in React.js, Next.js, Vue.js, TailwindCSS</li>
                              <li>UI/UX Design with Figma, Adobe XD, Design Systems</li>
                              <li>Framer Motion & GSAP for animations and microinteractions</li>
                              <li>Accessibility (a11y) & performance optimization</li>
                          </ul>
                      </span>
                      <span className="text-sm open-sans"  style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}>
                          <h3 className="text-base">💻 Fullstack Development</h3>
                          <ul 
                          className="mt-2 l !list-disc ml-5 pl-5 framer-text open-sans !text-sm"
                          style={{
                            listStyleType: "disc",
                            "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))"
                          }as React.CSSProperties }>
                              
                              
                              
                              <li> Proficient in JavaScript, TypeScript, Node.js, Express.js, NestJS</li>
                              <li> API Development with REST & GraphQL, authentication, and security best practices</li>
                              <li>Database expertise: MongoDB, PostgreSQL, Firebase </li>
                              <li>Serverless & Cloud: AWS, Vercel, Supabase</li>
                          </ul>
                      </span>
                      <span className="text-sm open-sans"  style={{ display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }}>
                          <h3 className="text-base">⚙️ Backend & DevOps</h3>
                          <ul 
                          className="mt-2 l !list-disc ml-5 pl-5 framer-text open-sans !text-sm"
                          style={{
                            listStyleType: "disc",
                            "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))"
                          }as React.CSSProperties }>
                              <li>Scalable API architecture & microservices</li>
                              <li>CI/CD pipelines, Docker, and Kubernetes</li>
                              <li>Caching, performance tuning & database optimization</li>
                          </ul>
                      </span>
                  </div>
                  <div className="framer-6iz3g2-container mt-8">
                      <div className="ssr-variant hidden-upi8ji">
                  
                          <a
                              className="bg-ln-gray-header shadow-ln-xs px-12 py-3 overflow-hidden  rounded-full uppercase open-sans font-bold text-[14px] relative "
                              data-border="true"
                              target="_blank"
                              rel="noopener"
                              data-framer-name="Variant 1"
                          >
                              Contact me
                              <motion.div
                                className="absolute z-[9999] h-[1.5px] w-[50%] left-2/4 transform -translate-x-2/4 inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0"
                                style={{ top: "auto", bottom: "0px" }}
                                initial={{ opacity: 0, width: "0%" }}
                                animate={{ opacity: 1, width: "50%" }}
                                exit={{ opacity: 0, width: "0%" }}
                                transition={{ duration: 3.2, ease: "easeInOut" }}
                              />
                          </a>
                          
                      </div>
                  </div>
              </div>
              <div className="framer-1nqcbjd w-full" data-framer-name="section" >
                  <div className="ssr-variant hidden-7lwtj4 hidden-upi8ji  w-full">
                      <div className="framer-1l6nomv-container" data-framer-name="card 1" id="1l6nomv">
                          <div
                            
                              className="framer-NoRSJ framer-1ln1adt framer-v-1ln1adt"
                              data-highlight="true"
                              style={{
                                backgroundColor: "var(--token-f213e283-24d0-40a3-a2dc-bca1da07b971, rgb(20, 20, 20))",
                                width: "100%",
                                opacity: 1,
                                borderRadius: "24px",
                              }}
                          
                              data-framer-name="Variant 1"
                          >
                              <div className="framer-1acgu6t" data-framer-name="content" style={{ opacity: 1, borderRadius: "16px" }}>
                                  <div className="framer-69mjuu" data-framer-name="thumbnail" style={{ filter: "brightness(1)", borderRadius: "16px", transform: "none", transformOrigin: "50% 50% 0px", willChange: "transform" }}>
                                      <div style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
                                          <img
                                            src={profile}
                                            style={{
                                              display: "block",
                                              width: "100%",
                                              height: "100%",
                                              borderRadius: "inherit",
                                              objectPosition: "center",
                                              objectFit: "cover",
                                            }}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            />
                                      
                                      </div>
                                  </div>
                                  <div className="framer-fnoddg-container" style={{ opacity: 1 }}>
                                      <div style={{ display: "inline-block", transform: "none" }}>
                                          <div className="framer-TETrW framer-1i145ng framer-v-1i145ng" data-framer-name="Variant 1" style={{ height: "100%", width: "100%", opacity: 1 }}>
                                              <div
                                                  data-framer-component-type="SVG"
                                                  data-framer-name="play btn"
                                                  style={{
                                                    imageRendering: "pixelated",
                                                    flexShrink: 0,
                                                    fill: "rgb(0, 0, 0)",
                                                    color: "rgb(0, 0, 0)",
                                                    transform: "rotate(3deg)",
                                                    opacity: 1,
                                                  }}
                                                  className="framer-37jcy4"
                                                  aria-hidden="true"
                                              >
                                                  <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                                      <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 82 82" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg-797516101_2247"></use></svg>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="framer-125ssij" data-framer-name="bacgk blur" ></div>
              </div>
          </div>
          <div className="framer-1kpnfyz" data-framer-name="overlay" ></div>
          <div className="framer-18ifhg6" data-framer-name="grid bg" >
              <div
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundRepeat: "repeat",
                    backgroundPosition: "left top",
                    backgroundSize: "46.62px auto",
                    backgroundImage: "url(https://framerusercontent.com/images/VfkEna8iRjS9ZbXeCG1MRu3r0w.svg)",
                    border: 0,
                  }}
                  data-framer-background-image-wrapper="true"
              ></div>
          </div>
          
        </section>
      </div>
    </>
  )
}


export {
  VerticalDashedLine,
  HorizontalDashedLine,
  Feature,
  BecomeSponsor,
  DashedLineContainer,
  DashedCircle,
  GetStarted,
  Github,
  HeaderUser,
  LineAbsolute,
  HeroSection,
  UserTravels,
  AboutMe
}
