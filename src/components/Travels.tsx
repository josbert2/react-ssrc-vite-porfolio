import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useIsMobile } from "../hooks/use-mobile"


type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export default function NalaImage() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "../public/image-4.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "../public/nala.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "./public/image-5 (1).webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://www.jopcmelo.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.6bda92e9.webp&w=384&q=75",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "../public/iamge-5.png",
    },
  ];
  const [active, setActive] = useState(0);
  const autoplay = false
 
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };
 
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
 
  const isActive = (index: number) => {
    return index === active;
  };
 
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
 
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <>
      {!useIsMobile() ? (
        <>
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              
                <img
                  alt="Photo 0 of João's travels"
                  width={1536}
                  height={2048}
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://www.jopcmelo.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.6bda92e9.webp&w=384&q=75"
                  style={{ color: "transparent" }}

                />

              </div>
            </div>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                
                    <img
                    alt="Photo 0 of João's travels"
                    width={1536}
                    height={2048}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="../public/nala.jpg"
                    style={{ color: "transparent" }}
                  />
              </div>
            </div>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                
                    <img
                    alt="Photo 0 of João's travels"
                    width={1536}
                    height={2048}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="../public/image-5 (1).webp"
                    style={{ color: "transparent" }}
                  />
              </div>
            </div>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
            

                  <img
                    alt="Photo 0 of João's travels"
                    width={3024}
                  height={4032}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="../public/image-4.jpg"
                    style={{ color: "transparent" }}
                  />
              </div>
            </div>
            <div className="" style={{ opacity: 1, transform: "none" }}>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
            

      <img
                    alt="Photo 0 of João's travels"
                    width={3024}
                  height={4032}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="../public/iamge-5.png"
                    style={{ color: "transparent" }}
                  />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" mx-auto antialiased font-sans px-16 md:px-8 lg:px-12 md:py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
              <div>
                <div className="relative h-80 w-full">
                  
                  <AnimatePresence>
                    
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={testimonial.src}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          z: -100,
                          rotate: randomRotateY(),
                        }}
                        animate={{
                          opacity: isActive(index) ? 1 : 0.7,
                          scale: isActive(index) ? 1 : 0.95,
                          z: isActive(index) ? 0 : -100,
                          rotate: isActive(index) ? 0 : randomRotateY(),
                          zIndex: isActive(index)
                            ? 999
                            : testimonials.length + 2 - index,
                          y: isActive(index) ? [0, -80, 0] : 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          z: 100,
                          rotate: randomRotateY(),
                        }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 origin-bottom"
                      >
                        <img
                          src={testimonial.src}
                          alt={testimonial.name}
                          width={500}
                          height={500}
                          draggable={false}
                          className="h-full w-full rounded-3xl object-cover object-center"
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex justify-between flex-col py-4">
                <motion.div
                  key={active}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -20,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  
                </motion.div>
                <div className="flex justify-center gap-4 pt-12 md:pt-0">
                    <button
                      onClick={handlePrev}
                      className="cursor-pointer h-11 w-11 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#d1d5e6de" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"></path></svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="cursor-pointer h-11 w-11 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path stroke="#d1d5e6de" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg>
                    </button>
                  </div>
                
              </div>
            </div>
          </div>
        </>
      )}
    </>
    
  );
}