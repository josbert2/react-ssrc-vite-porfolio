'use client'
import { motion } from 'motion/react'
import { useInView } from "react-intersection-observer";



export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
    });
    return (
        <>
            <section ref={ref} className="container mt-20  sm:mt-20">
                <div className="px-20">
                    <motion.div
                        className="btn-title"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                    >
                        <button className="bg-bg-weak-50 px-1 py-1 rounded-full btn-title">
                            <div className="bg-white px-4 shadow-regular-xs py-2 rounded-full">
                            <span className="text-[18px] bg-clip-text bg-gradient-to-b from-black text-transparent antialiased relative text-5xl sm:text-7xl font-bold">
                                01. About me
                            </span>
                            </div>
                        </button>
                    </motion.div>
                        <div className="">
                        asdasdas lorem ipsum
                        asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum asdasdas lorem ipsum
                        </div>
                </div>
            </section>
        </>
    )

}