"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuContent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleMenu = (event: Event) => {
      setIsOpen((event as CustomEvent).detail);
    };

    window.addEventListener("menuToggle", toggleMenu);
    return () => window.removeEventListener("menuToggle", toggleMenu);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black text-white flex items-center justify-center z-40"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-2xl">¡Menú Abierto!</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
