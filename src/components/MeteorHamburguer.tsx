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
              <SVG width={dimensions.width} height={dimensions.height} />

              {/* Menu title */}
              <motion.p
                className="absolute left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-white sm:text-4xl"
                {...anim(text)}
              >
                Menu
              </motion.p>

              {/* Menu content */}
              <motion.div
                className="absolute inset-x-0 bottom-0 z-40 flex h-[60%] items-center justify-center px-4 pb-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <div className="w-full max-w-md space-y-6">
                  
                    <motion.button
                     
                      className="group flex w-full items-center gap-4 rounded-lg bg-white/10 p-4 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + 1 * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                        asd
                      </span>
                      <span className="text-xl font-medium">ads</span>
                    </motion.button>
               
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

