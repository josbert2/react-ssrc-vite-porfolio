'use client'

import { motion } from 'motion/react'

import { useState } from 'react'
import { useInView } from "react-intersection-observer";
import ButtonSection from '../button-section';




import bookforce from '../../assets/bookforce.webp'
import crypto from '../../assets/crypto.webp'
import mill from '../../assets/mill.webp'
import llantas from '../../assets/llantas.webp'
import adagio from '../../assets/adagio.webp'
import productApp from '../../assets/productApp.webp'
import Motoo from '../../assets/motoo.webp'
import piazza from '../../assets/piazza.webp'
import babarrun from '../../assets/babarrun.webp'
import mascarillas from '../../assets/mascarillas.webp'
import virus from '../../assets/virus.webp'
import pixie from '../../assets/pixie.webp'
import uoh from '../../assets/uoh.webp'
import rest911 from '../../assets/rest911.webp'
import davivivienda from '../../assets/davivivienda.webp'
import savefood from '../../assets/savefood.webp'
import blackcoffee from '../../assets/blackcoffe.webp'

// ICONS

import iconEntrekids from '../../assets/icons/entrekids.ico'
import iconBookforce from '../../assets/icons/bookforce.png'
import iconCrytovision from '../../assets/icons/crypto.ico'
import iconMill from '../../assets/icons/mill.png'
import iconApp from '../../assets/icons/app.png'
import iconMotoo from '../../assets/icons/hotel.svg'
import iconLlantas from '../../assets/icons/llanta.png'
import iconPiazza from '../../assets/icons/piazza.png'
import iconBabarrun from '../../assets/icons/babarrun.png'
import iconMascarillas from '../../assets/icons/mascarillas.png'
import iconPixie from '../../assets/icons/pixie.png'
import iconUoh from '../../assets/icons/uoh.png'
import IconRest from '../../assets/icons/rest.png'
import iconDavivivienda from '../../assets/icons/david.png'
import iconSavefood from '../../assets/icons/savefood.png'
import iconBlackcoffee from '../../assets/icons/black.png'
import test from '../../assets/test.webp'



export default function Work() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [ref, inView] = useInView({
        threshold: 0.2, 
        triggerOnce: true, 
    });

    const [itemsToShow, setItemsToShow] = useState<number>(4);

   
    const handleLoadMore = () => {
      setItemsToShow((prev) => prev + 6);
    };

    
    const dataProject = [
        {
            title: "Entrekids",
            description: "Marketplate para actividades infantiles",
            image: test,
            type: "Web APP",
            icon: iconEntrekids,
            url: "#",
            repository: "#"
        },
        {
            title: "Bookforce",
            description: "Software para tu negocio de entretenimiento",
            image: bookforce,
            type: "Web APP",
            icon: iconBookforce,
            url: "https://www.bookforce.io/",
            repository: "#"
        },
        {
            title: "Criptovision",
            description: "End-to-end Blockchain Services",
            image: crypto,
            type: "Web 3 App",
            icon: iconCrytovision,
            url: "https://criptovision.com/",
            repository: "#"
        },
       

        // MILL

        {
            title: "MILL",
            description: "Con el propósito de dar respuesta a las necesidades y demandas de la Industria Metalúrgica y Metalmecánica.",
            image: mill,
            icon: iconMill,
            type: "Landing Pages",
            url: "https://josbert2.github.io/Mill/",
            repository: "https://github.com/josbert2/Mill"
        },

        // Product APP

        {
            title: "Template App",
            description: "Landing pages para app de productos",
            image: productApp,
            type: "Web APP",
            icon: iconApp,
            url: "https://josbert2.github.io/product/",
            repository: "https://github.com/josbert2/product"
        },

        // Solo Llantas

        {
            title: "Solo Llantas",
            description: "Landing pages para sitio de ventas de llantas",
            image: llantas,
            type: "Web APP",
            icon: iconLlantas,
            url: "https://josbert2.github.io/llanta/shop.html#",
            repository: "https://github.com/josbert2/llanta"
        },

        // Motoo Apartaments

        {
            title: "Motoo Apartaments",
            description: "Landing pages para Apartamentos, hotels y casas",
            image: Motoo,
            type: "Web APP",
            icon: iconMotoo,
            url: "https://josbert2.github.io/edificio/",
            repository: "https://github.com/josbert2/edificio"
        },

       

        // Piazza 

        {
            title: "Piazza",
            description: "We would like to welcome you to Little Piazza Bar & Grill",
            image: piazza,
            type: "Web APP",
            icon: iconPiazza,
            url: "https://josbert2.github.io/piazza/#reservation",
            repository: "https://github.com/josbert2/piazza"
        },

        // Babarrun

        {
            title: "Babarrun",
            description: "Landing pages de panoramas",
            image: babarrun,
            type: "Web APP",
            icon: iconBabarrun,
            url: "https://josbert2.github.io/babarrun/",
            repository: "https://github.com/josbert2/babarrun"
        },

        // PAAGSA

        {
            title: "PAAGSA",
            description: "A PAAGSA, una empresa 100% mexicana con más de 100 años en la industria de las Artes Gráficas",
            image: mascarillas,
            type: "Web APP",
            icon: iconMascarillas,
            url: "https://josbert2.github.io/mascarillas/",
            repository: "https://github.com/josbert2/mascarillas"
        },

        // VIRUS
        
        {
            title: "VIRUS",
            description: "Virus que ya se han ido y virus que llegarán.",
            image: virus,
            type: "Web APP",
            icon: iconMascarillas,
            url: "https://josbert2.github.io/virus/",
            repository: "https://github.com/josbert2/virus"
        },

        // pets/grocery food

        {
            title: "pixie",
            description: "Landing pages para ecommerce de ventas de productos de mascotas",
            image: pixie,
            type: "Web APP",
            icon: iconPixie,
            url: "https://josbert2.github.io/pet/",
            repository: "https://github.com/josbert2/pet"
        },

        // UOH

        {
            title: "UOH",
            description: "Landing pages para Universidad UOH",
            image: uoh,
            type: "Web APP",
            icon: iconUoh,
            url: "https://josbert2.github.io/uoh/",
            repository: "https://github.com/josbert2/uoh"
        },


        // rest 911
        {
            title: "rest 911",
            description: "Navigate the world of web technology",
            image: rest911,
            type: "Web APP",
            icon: IconRest,
            url: "https://josbert2.github.io/res-workana/",
            repository: "https://josbert2.github.io/res-workana/"
        },

        // davivivienda

        {
            title: "Davivienda",
            description: "Landing Pages para banco Davivivienda",
            image: davivivienda,
            type: "Web APP",
            icon: iconDavivivienda,
            url: "https://josbert2.github.io/repowork/",
            repository: "https://josbert2.github.io/repowork/"
        },


        // Savefood

        {
            title: "Savefood",
            description: "Iniciativa para reducir el excedente de alimentosgenerado por los restaurantes",
            image: savefood,
            type: "Web APP",
            icon: iconSavefood,
            url: "https://josbert2.github.io/savefood/",
            repository: "https://josbert2.github.io/savefood/"
        },

        // ADAGIOS TEAS Y BLACKCOOFFEE

        {
            title: "Black Coffee",
            description: "Navigate the world of web technology",
            image: blackcoffee,
            type: "Web APP",
            icon: iconBlackcoffee,
            url: "https://josbert2.github.io/teas/",
            repository: "https://josbert2.github.io/teas/" // https://github.com/josbert2/landings
        },
        {
            title: "ADAGIOS TEAS",
            description: "Natural Teas",
            image: adagio,
            type: "Web APP",
            url: "https://adagio-zeta.vercel.app/",
            repository: "https://github.com/josbert2/adagio"
        }

        // REVISAR

        // https://github.com/josbert2/Alejandra-Riveros
        // https://github.com/josbert2/Daniela-Landing
        // https://github.com/josbert2/new-landing
        // https://github.com/josbert2/landings-dist
        // https://github.com/josbert2/josdocs
        // https://github.com/josbert2/bytebox
        // https://github.com/josbert2/munder

        
    ]

    const visibleProjects = dataProject.slice(0, itemsToShow);



    return (
        <>
            <section ref={ref} className="container md:px-0 mt-20 pb-20 relative  sm:mt-20">
                <div className="px-10 md:px-20">
                    <motion.div
                        className="btn-title relative w-full mb-16 flex justify-start container-btn"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                    >
                        <div className="framer-1u3alye"></div>
                       <ButtonSection title="Works" />
                       <div className="framer-4ek1z5"></div>
                    </motion.div>
                 
                    <div className="framer-1lrue9j">
                       
                        {visibleProjects.map((project, index) => (
                             <div
                             className="framer-1hhlnuq-container"
                             key={index}
                             style={{
                                 opacity: "1",
                                 transform: "perspective(1200px)",
                             }}>
                                <a
                                    className="framer-rtsKZ framer-6pxgjl framer-v-6pxgjl framer-d4tf0f"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    href={project.url}
                                    style={{
                                        backgroundColor: "rgba(21, 22, 23, 0)",
                                        opacity: "1",
                                        width: "100%",
                                    }}
                                  >
                                    <div
                                    className="framer-1edw8qi-container"
                                    style={{
                                        opacity: "0",
                                    }}>
                                    <div
                                        style={{
                                        display: "contents",
                                        }}>
                                        <svg
                                        color="rgba(0, 0, 0, 0.19)"
                                        focusable="false"
                                        style={{
                                            color: "rgba(0, 0, 0, 0.19)",
                                            display: "inline-block",
                                            fill: "rgba(0, 0, 0, 0.19)",
                                            flexShrink: "0",
                                            height: "100%",
                                            userSelect: "none",
                                            width: "100%",
                                        }}
                                        viewBox="0 0 256 256"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g color="rgba(0, 0, 0, 0.19)">
                                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                                        </g>
                                        </svg>
                                    </div>
                                    </div>
                                    <motion.div
                                    className="framer-2hmlbu"
                                    data-framer-name="BlurImage"
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    style={{
                                        borderRadius: "18px",
                                        filter: "brightness(2) saturate(2) blur(80px)",
                                        opacity: "0",
                                    }}>
                                        <div
                                            data-framer-background-image-wrapper="true"
                                            style={{
                                            borderRadius: "inherit",
                                            bottom: "0",
                                            left: "0",
                                            position: "absolute",
                                            right: "0",
                                            top: "0",
                                            }}>
                                            <img
                                                src={project.image} 
                                                alt=""
                                                sizes="calc(min(473px, 100vw) - 2px)"
                                                style={{
                                                    borderRadius: "inherit",
                                                    display: "block",
                                                    height: "100%",
                                                    imageRendering: "auto",
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                    width: "100%",
                                                }}
                                            />
                                            {/*<img
                                            alt=""
                                            sizes="calc(min(473px, 100vw) - 2px)"
                                            src="https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png"
                                            srcSet="                        https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png?scale-down-to=512   512w,                        https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png?scale-down-to=1024 1024w,                        https://framerusercontent.com/images/gGr7r5BWikwvibWmbgQH3Gsc81M.png                    1920w                    "
                                            style={{
                                                borderRadius: "inherit",
                                                display: "block",
                                                height: "100%",
                                                imageRendering: "auto",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                            }}
                                            /> */}
                                        </div>
                                    </motion.div>
                                    <div
                                    className="framer-11vnvy3"
                                    data-border="true"
                                    data-framer-name="GlassCard"
                                    style={{
                                        "--border-bottom-width": "1px",
                                        "--border-color": "rgba(255, 255, 255, 0.06)",
                                        "--border-left-width": "1px",
                                        "--border-right-width": "1px",
                                        "--border-style": "solid",
                                        "--border-top-width": "1px",
                                        backdropFilter: "blur(10px)",
                                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                                        borderRadius: "20px",
                                        boxShadow:
                                        "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
                                        opacity: "1",
                                    }}>
                                    <div
                                        className="framer-1p6numl"
                                        data-framer-name="BadgeWrapper"
                                        style={{
                                        opacity: "1",
                                        }}>
                                        <div
                                        className="framer-1d5va92"
                                        data-framer-name="Badge"
                                        style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                                            borderRadius: "7px",
                                            opacity: "1",
                                        }}>
                                        <div
                                            className="framer-1bn53k8"
                                            data-framer-name="Fill"
                                            style={{
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            borderRadius: "6px",
                                            opacity: "1",
                                            }}
                                        />
                                        <div
                                            className="framer-1gqbim0"
                                            data-framer-component-type="RichTextContainer"
                                            style={{
                                            "--extracted-r6o4lv": "rgb(173, 173, 173)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                            display: "flex",
                                            flexDirection: "column",
                                            flexShrink: "0",
                                            justifyContent: "flex-start",
                                            opacity: "1",
                                            outline: "none",
                                            transform: "none",
                                            }}>
                                            <p
                                            className="framer-text"
                                            style={{
                                                "--font-selector": "RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==",
                                                "--framer-font-family":
                                                "'General Sans', 'General Sans Placeholder', sans-serif",
                                                "--framer-font-size": "12px",
                                                "--framer-font-weight": "500",
                                                "--framer-letter-spacing": "-0.01em",
                                                "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(173, 173, 173))",
                                            }}>
                                            iOS App
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    <div
                                        className="framer-1w58y41"
                                        data-framer-name="Content"
                                        style={{
                                        opacity: "1",
                                        }}>
                                        <div
                                        className="framer-1hrzvqf"
                                        data-framer-name="Icon"
                                        style={{
                                            borderRadius: "14px",
                                            boxShadow:
                                            "rgba(0, 0, 0, 0.08) 0px 0.482901px 1.06238px -0.5px, rgba(0, 0, 0, 0.23) 0px 4px 8.8px -1px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
                                            filter: "grayscale(1)",
                                            opacity: "1",
                                        }}>
                                        <div
                                            data-framer-background-image-wrapper="true"
                                            style={{
                                            borderRadius: "inherit",
                                            bottom: "0",
                                            left: "0",
                                            position: "absolute",
                                            right: "0",
                                            top: "0",
                                            }}>
                                           

                                            <img
                                                src={project.icon} 
                                                alt=""
                                                   sizes="44px"
                                                style={{
                                                    borderRadius: "inherit",
                                                    display: "block",
                                                    height: "100%",
                                                    imageRendering: "auto",
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                    width: "100%",
                                                }}
                                            />


                                        </div>
                                        </div>
                                        <div
                                        className="framer-s6ljvk"
                                        data-framer-component-type="RichTextContainer"
                                        style={{
                                            "--extracted-r6o4lv": "rgb(255, 255, 255)",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                            display: "flex",
                                            flexDirection: "column",
                                            flexShrink: "0",
                                            justifyContent: "flex-start",
                                            opacity: "1",
                                            outline: "none",
                                            textShadow: "rgba(0, 0, 0, 0.2) 0px 4px 9px",
                                            transform: "none",
                                        }}>
                                            
                                        <p
                                            className="framer-text open-sans"
                                            style={{
                                           
                                            "--framer-font-size": "32px",
                                            "--framer-font-weight": "600",
                                            "--framer-letter-spacing": "-0.02em",
                                            "--framer-line-height": "1em",
                                            "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                            }}>
                                            <span
                                            className="framer-text"
                                            data-text-fill="true"
                                            style={{
                                                backgroundImage:
                                                "linear-gradient(0deg, rgb(199, 199, 199) 0%, rgb(250, 250, 250) 100%)",
                                            }}>
                                            {project.title}
                                            </span>
                                        </p>
                                        </div>
                                        <div
                                        className="framer-1g9epbg"
                                        data-framer-name="Byline"
                                        style={{
                                            opacity: "1",
                                        }}>
                                        <div
                                            className="framer-1w079fg"
                                            data-framer-component-type="RichTextContainer"
                                            style={{
                                            "--extracted-r6o4lv":
                                                "var(--token-d9114fe5-ccf8-4f28-9a11-6445c9c3d500, rgba(255, 255, 255, 0.7))",
                                            "--framer-link-text-color": "rgb(0, 153, 255)",
                                            "--framer-link-text-decoration": "underline",
                                            display: "flex",
                                            flexDirection: "column",
                                            flexShrink: "0",
                                            justifyContent: "flex-start",
                                            opacity: "1",
                                            outline: "none",
                                            transform: "none",
                                            }}>
                                            <p
                                            className="framer-text open-sans"
                                            style={{
                                                "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=",
                                                "--framer-font-family":
                                                "'General Sans', 'General Sans Placeholder', sans-serif",
                                                "--framer-font-size": "14px",
                                                "--framer-line-height": "1.5em",
                                                "--framer-text-color":
                                                "var(--extracted-r6o4lv, var(--token-d9114fe5-ccf8-4f28-9a11-6445c9c3d500, rgba(255, 255, 255, 0.7)))",
                                            }}>
                                            {project.description}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div
                                    className="framer-ejjo2t"
                                    data-framer-name="ImageWrap"
                                    style={{
                                        borderRadius: "18px",
                                        opacity: "1",
                                    }}>
                                    <div
                                        className="framer-q1jd2k"
                                        data-framer-name="Image"
                                        style={{
                                        borderRadius: "18px",
                                        opacity: "1",
                                        transform: "perspective(1200px)",
                                        }}>
                                        <div
                                        data-framer-background-image-wrapper="true"
                                        style={{
                                            borderRadius: "inherit",
                                            bottom: "0",
                                            left: "0",
                                            position: "absolute",
                                            right: "0",
                                            top: "0",
                                        }}>
                                            <img
                                                src={project.image}
                                                alt="he"
                                                loading="lazy"
                                                placeholder="blur" 
                                                blurDataURL={project.image.src}
                                                style={{
                                                    borderRadius: "inherit",
                                                    display: "block",
                                                    height: "100%",
                                                    imageRendering: "auto",
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                    width: "100%",
                                                }} 
                                            />
                                        
                                        </div>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                        
                    </div>

                    {itemsToShow < dataProject.length && (
                        <div className="text-center justify-center mt-8">
                            <button
                                className="bg-ln-gray-header uppercase shadow-ln-xs px-12 py-3 overflow-hidden  rounded-full uppercase open-sans font-bold text-[14px] relative" 
                                 onClick={handleLoadMore}>
                                
                                        Cargar más
                                   
                                    <motion.div
                                        className="absolute z-[9999] h-[1.5px] w-[50%] left-2/4 transform -translate-x-2/4 inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0"
                                        style={{ top: "auto", bottom: "0px" }}
                                        initial={{ opacity: 0, width: "0%" }}
                                        animate={{ opacity: 1, width: "50%" }}
                                        exit={{ opacity: 0, width: "0%" }}
                                        transition={{ duration: 3.2, ease: "easeInOut" }}
                                    />
                               
                                </button>

                     
                        </div>
                    )}
                   

                </div>
                
            </section>
        </>
    )

}