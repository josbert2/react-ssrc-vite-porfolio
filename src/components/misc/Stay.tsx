'use client'
import { motion } from "motion/react";

export default function Stay() {

  return (
    <div>
       
      <div className="pagination mx-auto flex pt-20 w-full max-w-sm items-center justify-center px-4 py-8 ">
        <motion.div
          initial={{ width: 0, left: "0%" }}
          animate={{ width: "100%", left: "50%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative flex h-0.5 transform -translate-x-2/4 max-w-sm flex-1 flex-nowrap items-center justify-center bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/20 to-[#EDD4BA]/0">
        
            <motion.span
              className="pagination-current absolute left-0 top-0 h-full transition-all duration-700 "
              initial={{ width: 0, left: "50%" }} // Inicia en el centro con 0 de ancho
              animate={{ width: "calc(33.3333%)", left: "33.3333%" }} // Expande y posiciona
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }} // Ajusta duración y suavizado
            />
            {/*[*/}
            <button className="h-6 w-full" aria-label="Testimonial Slide 1" />
            <button className="h-6 w-full" aria-label="Testimonial Slide 2" />
            <button className="h-6 w-full" aria-label="Testimonial Slide 3" />
            {/*]*/}
        </motion.div>
      </div>
    </div>
  )
}
