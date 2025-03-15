'use client';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const boxShadowIntensity = Math.random() * 225 + 5;

const isMobile = () => {
    return window.innerWidth <= 768;
}

const asteroidVariants = {
    initial: (startPosition: { x: number; y: number }) => ({
        x: startPosition.x,
        y: startPosition.y,
        opacity: 1,
        scale: 0.5,
        rotate: isMobile() ? 60 : 30, // old 30 
        top: Math.random() * 30 + 'vh',
        left: -100,
    }),
    animate: (custom: { duration: number }) => ({
        x: '50vw',
        y: '50vh',
        opacity: 0,
        scale: 0.2,
        transition: {
            duration: custom.duration,
            ease: 'linear',
        },
    }),
    exit: {
        opacity: 0,
    },
};

const generateRandomStartPosition = () => {
    if (typeof window === 'undefined') return { x: -500, y: 0 };
    return {
        x: -500, // Start from the left of the screen
        y: Math.random() * window.innerHeight / 2 - window.innerHeight / 2, // Random vertical position
    };
};


const AsteroidMotion = () => {
    const [asteroids, setAsteroids] = React.useState<{ id: number; startPosition: { x: number; y: number }; duration: number }[]>([]);
    const asteroidLimit = 4; // Limit the number of asteroids
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setAsteroids((prev) => {
                const newAsteroid = {
                    id: Math.random(),
                    startPosition: generateRandomStartPosition(),
                    duration: Math.random() * 4 + 4, // Random duration between 3 and 6 seconds
                };
                return prev.length < asteroidLimit ? [...prev, newAsteroid] : prev;
            });
        }, 500); // Generate asteroids every 500ms

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {asteroids.map((asteroid) => (
                <motion.div
                    key={asteroid.id}
                    className="framer-hdff1m-container absolute"
                    custom={{
                        duration: asteroid.duration,
                    }}
                
                    variants={asteroidVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onAnimationComplete={() =>
                        setAsteroids((prev) =>
                            prev.filter((item) => item.id !== asteroid.id)
                        )
                    }
                >
                    <div
                        className="framer-PMKWr framer-v-8wex7e"
                        style={{
                            display: 'contents',
                        }}
                    >
                        <div
                            className="framer-8wex7e"
                            data-framer-name="Variant 1"
                            style={{
                                background:
                                    'linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)',
                                borderRadius: '2px',
                                height: '100%',
                                opacity: '1',
                                width: '100%',
                            }}
                        >
                             <motion.div
                                className="framer-16kciz9"
                                style={{
                                    borderRadius: "1px", // Mantiene la forma ajustada
                                    boxShadow: `0 0 ${boxShadowIntensity}px 1px rgba(255, 255, 255, 0.6)`, // Brillo dinámico

                                    
                                }}
                                animate={{
                                    backgroundColor: [
                                        "rgba(255, 255, 255, 0.2)", // Blanco tenue
                                        "rgba(255, 165, 0, 0.4)", // Naranja opaco
                                        "rgba(135, 206, 250, 0.4)", // Azul cielo opaco
                                        "rgba(255, 255, 255, 0.2)", // Regreso a blanco tenue
                                      ],
                                      boxShadow: [
                                        "0px 0px 6px 1px rgba(255, 255, 255, 0.6)", // Blanco tenue
                                        "0px 0px 15px 3px rgba(255, 165, 0, 0.8)", // Resplandor naranja
                                        "0px 0px 15px 3px rgba(135, 206, 250, 0.8)", // Resplandor azul
                                        "-3px 2px 14px 6px rgb(255 255 255)", // Regreso a blanco
                                      ],
                                }}
                                transition={{
                                    duration: 5, // Duración más lenta para fluidez
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                                />
                        </div>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default AsteroidMotion;

// CSS in AsteroidMotion.css
/*
body {
    margin: 0;
    overflow: hidden;
    background: black;
}

.asteroid {
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 50%;
    box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.6);
}
*/
