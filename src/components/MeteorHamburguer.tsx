"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const text = {
    initial: {
        opacity: 0,
        bottom: "30%",
    },
    enter: {
        opacity: 1,
        bottom: "50%",
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        opacity: 0,
        bottom: "30%",
        transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
}

const curve = (initialPath: string, targetPath: string) => {
    return {
      initial: {
        d: initialPath,
      },
      enter: {
        d: targetPath,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
        d: initialPath,
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
    }
  }

  const anim = (variants) => {
    return {
      variants,
      initial: "initial",
      animate: "enter",
      exit: "exit",
    }
  }

export default function MeteorHamburger() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [linesVisible, setLinesVisible] = useState([false, false, false])
  const [menuExpanded, setMenuExpanded] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  })

  // Block scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    // Entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    function resize() {
        setDimensions({
          width: window.innerWidth ,
          height: window.innerHeight,
        })
    }
    resize()
    window.addEventListener("resize", resize)
    if (isVisible) {
      // Stagger the appearance of each line
      const timers = [
        setTimeout(() => setLinesVisible((prev) => [true, prev[1], prev[2]]), 300),
        setTimeout(() => setLinesVisible((prev) => [prev[0], true, prev[2]]), 500),
        setTimeout(() => setLinesVisible((prev) => [prev[0], prev[1], true]), 700),
      ]

      return () => timers.forEach((timer) => clearTimeout(timer))
    }


   


  }, [isVisible])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setMenuExpanded(true)
      }, 600)
      return () => clearTimeout(timer)
    } else {
      setMenuExpanded(false)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    
  }

  // Variants for the meteor trails
  const trailVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: [0, 0.8, 0], width: [0, 30, 0] },
  }

  return (
    <>
    <div className="relative z-50">
      {/* Hamburger button with meteor effect */}
     
      <motion.button
        className="fixed top-4 right-4 z-50 flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full  p-3 text-white "
        onClick={toggleMenu}
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={
          isVisible
            ? {
                scale: 1,
                opacity: 1,
                rotate: 0,
                
              }
            : { scale: 0, opacity: 0, rotate: -180 }
        }
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
         
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative h-6 w-8">
          {/* Top line */}
          <div className="absolute left-0 top-0 flex items-center">
            {/* Meteor trail */}
            <motion.div
              className="absolute right-full h-0.5 origin-right bg-gradient-to-l from-white to-transparent"
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={trailVariants}
              transition={{ duration: 0.3 }}
            />

            {/* The line itself */}
            <motion.div
              className="h-0.5 w-8 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 10 : 0,
                width: isOpen ? 32 : 32,
                x: linesVisible[0] ? (isOpen ? 0 : [-4, 0]) : -20,
                opacity: linesVisible[0] ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                x: {
                  repeat: isOpen ? 0 : Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
            />
          </div>

          {/* Middle line */}
          <div className="absolute left-0 top-2.5 flex items-center">
            {/* Meteor trail */}
            <motion.div
              className="absolute right-full h-0.5 origin-right bg-gradient-to-l from-white to-transparent"
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={trailVariants}
              transition={{ duration: 0.3, delay: 0.1 }}
            />

            {/* The line itself */}
            <motion.div
              className="h-0.5 w-8 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: linesVisible[1] ? (isOpen ? 0 : 1) : 0,
                x: linesVisible[1] ? (isOpen ? 20 : [-2, 0]) : -20,
              }}
              transition={{
                duration: 0.3,
                x: {
                  repeat: isOpen ? 0 : Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
            />
          </div>

          {/* Bottom line */}
          <div className="absolute left-0 top-5 flex items-center">
            {/* Meteor trail */}
            <motion.div
              className="absolute right-full h-0.5 origin-right bg-gradient-to-l from-white to-transparent"
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={trailVariants}
              transition={{ duration: 0.3, delay: 0.2 }}
            />

            {/* The line itself */}
            <motion.div
              className="h-0.5 w-8 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -10 : 0,
                width: isOpen ? 32 : 32,
                x: linesVisible[2] ? (isOpen ? 0 : [-6, 0]) : -20,
                opacity: linesVisible[2] ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                x: {
                  repeat: isOpen ? 0 : Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 1.8,
                  ease: "easeInOut",
                },
              }}
            />
          </div>
        </div>
      </motion.button>

      {/* Stars background - just for visual effect */}
     

      {/* Menu content would go here */}
    </div>
     {/* Top-down expanding menu with circular top */}
     <AnimatePresence>
        {isOpen && dimensions.width && (
          <>
         
            {/* Blurred background overlay */}
            <motion.div
              className="fixed inset-0 z-40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            

            {/* SVG curve animation */}
            <motion.div
              className="fixed inset-0 z-40 overflow-hidden"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
                <div className="absolute top-5 left-4">
            <a href="https://github.com/josbert2" target='_blank' className=" relative z-10 h-10 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={34}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github text-[#9b9b9b] w-5 h-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/josbert_ui/#" target='_blank' className=" relative z-10 h-10 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={34}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram text-[#9b9b9b] w-5 h-5"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/josbert-hernandez-317b77113/" target='_blank' className="   relative z-10 h-10 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={34}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin text-[#9b9b9b] w-5 h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
            <a href="https://codepen.io/josbert" target='_blank' className="    relative z-10 h-10 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={34}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-codepen text-[#9b9b9b] w-5 h-5"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1={12} x2={12} y1={22} y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
                <polyline points="2 15.5 12 8.5 22 15.5" />
                <line x1={12} x2={12} y1={2} y2="8.5" />
              </svg>
            </a>
            <a href="https://x.com/JosbertHern" target='_blank' className="   relative z-10 h-10 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square">
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
                className="lucide lucide-twitter text-[#9b9b9b] w-5 h-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
              <SVG width={dimensions.width} height={dimensions.height} />

              {/* Menu title */}
             <div className=" flex flex-col gap-5">
              <motion.p
                  className="absolute left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-white sm:text-4xl"
                  {...anim(text)}
                  style={{
                    translateY: -60
                  }}
                >
                  01. Home
                </motion.p>

                <motion.p
                  className="absolute left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-white sm:text-4xl"
                  {...anim(text)}
                  style={{
                    translateY: -10
                  }}
                >
                  02. About
                </motion.p>

                <motion.p
                  className="absolute left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-white sm:text-4xl"
                  {...anim(text)}
                  style={{
                    translateY: 40
                  }}
                >
                  03. Contact
                </motion.p>
             </div>

              {/* Menu content */}
              <motion.div
                className="absolute inset-x-0 bottom-0 z-40 flex h-[60%] items-center justify-center px-4 pb-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <div className="w-full max-w-md space-y-6">
                  
                  
               
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

// SVG component for the curve animation
const SVG = ({ width, height }: { width: number; height: number }) => {
    // Bottom to top curve paths
    const initialPath = `
      M0 ${height}
      Q${width / 2} ${height}  ${width} ${height}
      L${width} 0
      L0 0
      Z
    `
  
    const targetPath = `
      M0 ${height}
      Q${width / 2} ${height - 120} ${width} ${height}
      L${width} 0
      L0 0
      Z
    `
  
    return (
      <motion.div className="absolute inset-0">
        <svg className="h-full w-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          <motion.path fill="#5454543d" {...anim(curve(initialPath, targetPath))} />
        </svg>
      </motion.div>
    )
  }

