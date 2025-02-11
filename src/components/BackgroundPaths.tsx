"use client";

import { motion } from "motion/react";
import OpenWork from "./open-work";
import { ShinyButton } from "./shiny-button";


function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#9b9b9b26" // Color variante solicitado
            strokeWidth={path.width}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              // Se utilizan más puntos en la opacidad para suavizar la transición
              opacity: [0.3, 0.45, 0.6, 0.45, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  //const words = title.split(" ");

  return (
    <div className="relative min-h-screen  w-full flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
            
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter"
            style={{
              fontSize: "14px",
            }}
          >
            <ShinyButton >
              {/*   {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-transparent bg-clip-text 
                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                        dark:from-white dark:to-white/80"
                    >
                      
                        {letter}
                    
                    
                    </motion.span>
                  ))}
                </span>
              ))} */}
              <div className="flex justify-center items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z" stroke="#3b3b3b" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" strokeLinejoin="round"></path>
                <path d="M15.996 11h.01M11.995 11h.01M7.995 11h.008" stroke="#3b3b3b" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path></svg>
                <a href="mailto:joheandroid@gmail.com" className="text-[#9b9b9b] font-bold">
                  Get in touch
                </a>
                <svg className="rotate transform -rotate-90" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path stroke="#3b3b3b" stroke-linecap="round" strokeLinejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"></path></svg>
              </div>
            </ShinyButton>
          </h3>
          <div
                className="framer-azddm3"
                data-framer-name="Text"
                style={{ opacity: 1 }}
            >
                <div className="framer-t2pmrq-container" style={{ opacity: 1 }}>
                <span
                    className="framer-JUd2S framer-bn8buf framer-v-bn8buf framer-1ydy58o"
                    data-framer-name="Variant 1"
                    data-highlight="true"

                    style={{
                    "--rsevh9": "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "var(--rsevh9)",
                    opacity: 1,
                    }}
                >
                    <div
                    className="framer-mbdh49"
                    data-framer-name="App Icon"
                    style={{ borderRadius: "20px", opacity: 1 }}
                    >
                    <div
                        data-framer-background-image-wrapper="true"
                        style={{ position: "absolute", borderRadius: "inherit", inset: "0px" }}
                    >
                        
                    </div>
                    </div>
                    <div
                    className="framer-1kkk9lx"
                    data-framer-name="Inner Shadow"
                    style={{
                        "--7ppjz2": "inset 0px 2px 4px 0px rgba(255, 255, 255, 0.4)",
                        borderRadius: "20px",
                        boxShadow: "var(--7ppjz2)",
                        opacity: 1,
                    }}
                    />
                </span>
                </div>

                <div
                className="framer-1xbvzw3"
                data-framer-component-type="RichTextContainer"
                style={{
                    outline: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    flexShrink: 0,
                    "--extracted-gdpscs": "rgb(255, 255, 255)",
                    "--framer-paragraph-spacing": "0px",
                    transform: "none",
                    opacity: 1,
                }}
                >
                <h1
                    className="framer-text framer-styles-preset-1px6bkr"
                    data-styles-preset="Il2Yri1Ja"
                    style={{
                    "--framer-text-alignment": "center",
                    "--framer-text-color": "var(--extracted-gdpscs, rgb(255, 255, 255))",
                    }}
                >
                    <span
                    data-text-fill="true"
                    className="framer-text"
                    style={{
                        backgroundImage:
                        "radial-gradient(60% 200% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                    >
                      ¿Quieres un sitio web perzonalizado y único para tu negocio?
                    </span>
                </h1>
                </div>

                <div
                className="framer-83hpwa"
                data-framer-component-type="RichTextContainer"
                style={{
                    outline: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    flexShrink: 0,
                    "--extracted-1eung3n":
                    "var(--token-8e61a935-bee1-4d42-ba1c-0c51ee3870e4, rgba(255, 255, 255, 0.7))",
                    "--framer-paragraph-spacing": "0px",
                    transform: "none",
                    opacity: 1,
                }}
                >
                <h4
                    className="framer-text framer-styles-preset-10ea4s6"
                    data-styles-preset="eM7OTWacr"
                    style={{
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                        "var(--extracted-1eung3n, var(--token-8e61a935-bee1-4d42-ba1c-0c51ee3870e4, rgba(255, 255, 255, 0.7)))",
                    }}
                >
                    
                </h4>
                </div>
            </div>

            <div className="flex justify-center mt-5 pt-10">
                <OpenWork onClick={() => console.log(0)} />
            </div>


          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
              dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
              overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Aquí puedes agregar más contenido si lo requieres */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
