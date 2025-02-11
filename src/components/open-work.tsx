'use client'
import React from 'react'
import { motion } from "motion/react"
interface OpenWorkProps {
    onClick: () => void;
}

export default function OpenWork({ onClick }: OpenWorkProps) {
  return (
    <>
        <div
            className="framer-ibpz4q-container"
            data-framer-appear-id="ibpz4q"
            style={{
                opacity: "1",
                transform: "perspective(1200px)",
            }}>
            <a
                className="framer-6816R framer-1iqbyp5 framer-v-1iqbyp5 framer-4r3h2s"
                data-border="true"
                data-framer-name="Main"
                onClick={onClick}
                style={{
                "--border-bottom-width": "1px",
                "--border-color": "rgba(255, 255, 255, 0.01)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgb(15, 15, 15)",
                borderRadius: "12px",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 10px 0px",
                height: "100%",
                opacity: "1",
                width: "100%",
                }}
               >
                <div
                className="framer-jbcjxm"
                data-framer-name="Content"
                style={{
                    backgroundColor: "#272727",
                    borderRadius: "11px",
                    boxShadow: "rgba(71, 176, 214, 0) 0px 0px 10px 2px inset",
                    opacity: "1",
                }}>
                <div
                    className="framer-4ew8cv"
                    data-framer-name="Dot"
                    style={{
                    backgroundColor: "rgba(55, 212, 133, 0.8)",
                    borderRadius: "5px",
                    opacity: "1",
                    }}
                />
                <div
                    className="framer-gwfg9e"
                    data-framer-component-type="RichTextContainer"
                    style={{
                    "--extracted-r6o4lv": "rgb(155, 199, 177)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: "0",
                    justifyContent: "flex-start",
                    opacity: "1",
                    outline: "none",
                    textShadow: "rgba(46, 133, 176, 0.42) 0px 0px 7px",
                    transform: "none",
                    }}>
                    <p
                    className="framer-text"
                    style={{
                        "--font-selector": "RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==",
                        "--framer-font-family":
                        "'General Sans', 'General Sans Placeholder', sans-serif",
                        "--framer-font-weight": "500",
                        "--framer-letter-spacing": "0.2px",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(155, 199, 177))",
                    }}>
                    Open to Work
                    </p>
                </div>
                </div>
                <div
                className="framer-1pj0lro"
                data-framer-name="BorderGlow"
                style={{
                    borderRadius: "12px",
                    opacity: "1",
                }}>
                <motion.div
                    className="framer-1bq67wi"
               
                    style={{
                    background:
                        "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgba(217, 217, 217, 0) 176.757deg, rgb(49, 177, 112) 223.784deg, rgba(194, 194, 194, 0) 274.054deg, rgba(171, 171, 171, 0) 360deg)",
                    borderRadius: "100px",
                    filter: "blur(10px)",
                    opacity: "0.95",
                    transform:
                        "translateX(0px) translateY(0px) scale(1) rotate(46.2423deg) rotateX(0deg) rotateY(0deg) translateZ(0px)",
                    }}
                    animate={{
                        rotate: 360, // Rota 360 grados
                        translateX: 0,
                        translateY: 0,
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0,
                        translateZ: 0,
                    }}
                    transition={{
                        duration: 5, // Duración de 2 segundos
                        repeat: Infinity, // Repetir infinitamente
                        ease: 'linear', // Movimiento suave
                    }}>
                         </motion.div>
                </div>
            </a>
            </div>

    </>
  )
}
