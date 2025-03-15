"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Rocket, SpaceIcon as Planet, Star, Satellite, Home } from "lucide-react"

export default function SpaceMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { icon: <Home className="mr-2" />, label: "Home", href: "#" },
    { icon: <Rocket className="mr-2" />, label: "Missions", href: "#" },
    { icon: <Planet className="mr-2" />, label: "Planets", href: "#" },
    { icon: <Star className="mr-2" />, label: "Stars", href: "#" },
    { icon: <Satellite className="mr-2" />, label: "Satellites", href: "#" },
  ]

  return (
    <div className="relative z-50">
      {/* Entrance animation for the hamburger button */}
      <motion.button
        className="fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-900 text-white shadow-lg shadow-indigo-500/20"
        onClick={toggleMenu}
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      {/* Stars background */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <ul className="space-y-6 text-center">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      className="group flex items-center justify-center text-xl font-medium text-white transition-all duration-300 hover:text-indigo-400"
                    >
                      <motion.div className="flex items-center" whileHover={{ scale: 1.1, x: 5 }}>
                        {item.icon}
                        {item.label}
                      </motion.div>
                      <motion.div
                        className="ml-2 h-px w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-12"
                        initial={{ width: 0 }}
                        whileHover={{ width: 48 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative planet */}
              <motion.div
                className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-700 to-purple-900 opacity-60"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <motion.div
                  className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 opacity-80"
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

