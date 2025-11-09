'use client'

import { motion } from 'motion/react'

import { useState, useMemo, useCallback, memo } from 'react'
import { useInView } from "react-intersection-observer";
import ButtonSection from '../button-section';




import butacas from '../../assets/butacas.png'
import stylo from '../../../public/stylo.png'

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



// Componente de proyecto individual memoizado para evitar re-renders
const ProjectCard = memo(({ project, index, isFeatured }: { project: any, index: number, isFeatured?: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="framer-1hhlnuq-container"
            style={{
                opacity: "1",
                transform: "perspective(1200px)",
            }}>
            <a
                className="framer-rtsKZ framer-6pxgjl framer-v-6pxgjl framer-d4tf0f"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href={project.url}
                style={{
                    backgroundColor: "rgba(21, 22, 23, 0)",
                    opacity: "1",
                    width: "100%",
                }}>
                <div
                    className="framer-1edw8qi-container"
                    style={{
                        opacity: isFeatured ? "1" : "0",
                    }}>
                    <div style={{ display: "contents" }}>
                        <svg
                            color="rgba(255, 255, 255, 0.6)"
                            focusable="false"
                            style={{
                                color: "rgba(255, 255, 255, 0.6)",
                                display: "inline-block",
                                fill: "rgba(255, 255, 255, 0.6)",
                                flexShrink: "0",
                                height: "100%",
                                userSelect: "none",
                                width: "100%",
                            }}
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg">
                            <g color="rgba(255, 255, 255, 0.6)">
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                            </g>
                        </svg>
                    </div>
                </div>
                <motion.div
                    className="framer-2hmlbu"
                    data-framer-name="BlurImage"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        borderRadius: "18px",
                        filter: "brightness(2) saturate(2) blur(40px)",
                        opacity: "0",
                        willChange: "opacity",
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
                            loading="lazy"
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
                    } as any}>
                    <div
                        className="framer-1p6numl"
                        data-framer-name="BadgeWrapper"
                        style={{ opacity: "1" }}>
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
                                } as any}>
                                <p
                                    className="framer-text font-geist"
                                    style={{
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-text-color":
                                            "var(--extracted-r6o4lv, rgb(173, 173, 173))",
                                    } as any}>
                                    {project.type}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="framer-1w58y41"
                        data-framer-name="Content"
                        style={{ opacity: "1" }}>
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
                                    loading="lazy"
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
                            } as any}>
                            <p
                                className="framer-text font-geist"
                                style={{
                                    "--framer-font-size": "38px",
                                    "--framer-font-weight": "700",
                                    "--framer-letter-spacing": "-0.03em",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                } as any}>
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
                            style={{ opacity: "1" }}>
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
                                } as any}>
                                <p
                                    className="framer-text font-geist"
                                    style={{
                                        "--framer-font-size": "15px",
                                        "--framer-line-height": "1.6em",
                                        "--framer-font-weight": "400",
                                        "--framer-text-color":
                                            "var(--extracted-r6o4lv, var(--token-d9114fe5-ccf8-4f28-9a11-6445c9c3d500, rgba(255, 255, 255, 0.7)))",
                                    } as any}>
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
                                alt="project preview"
                                loading="lazy"
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
    );
});

ProjectCard.displayName = 'ProjectCard';

export default function Work() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const [itemsToShow, setItemsToShow] = useState<number>(4);

   
    const handleLoadMore = useCallback(() => {
      setItemsToShow((prev) => prev + 6);
    }, []);

    
    const dataProject = useMemo(() => [
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
            icon: iconBlackcoffee,
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

        
    ], []);


    const featuresProjects = useMemo(() => [
        {
            title: "Butacas",
            description: "Navigate the world of web technology",
            image: butacas,
            type: "Web APP",
            icon: iconBlackcoffee,
            url: "https://josbert2.github.io/teas/",
            repository: "https://josbert2.github.io/teas/" // https://github.com/josbert2/landings
        },
        {
            title: "Stylo",
            description: "Editor de código en vivo con preview en tiempo real",
            image: stylo,
            type: "Web APP",
            icon: iconApp,
            url: "#",
            repository: "#"
        }
    ], []);

    const visibleProjects = useMemo(() => dataProject.slice(0, itemsToShow), [dataProject, itemsToShow]);



    return (
        <>
            <div>
                <div className="px-0 md:px-20">
                    <motion.div
                        className="btn-title relative w-full mb-16 flex justify-start container-btn"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
                    >
                        <div className="framer-1u3alye"></div>
                       <ButtonSection title="Feature works" />
                       <div className="framer-4ek1z5"></div>
                    </motion.div>


                <div className="grid md:grid-cols-2 gap-6 md:gap-8 md:px-20">
                    {featuresProjects.map((project, index) => (
                        <div 
                            key={`featured-${index}`} 
                            className="group relative p-[1px] rounded-3xl transition-all duration-500"
                            style={{
                                background: 'linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                                backgroundSize: '200% 100%',
                                animation: 'gradient 3s ease infinite'
                            }}
                        >
                            <a
                                href={project.url}
                                className="block relative overflow-hidden rounded-3xl transition-transform duration-500 hover:scale-[1.01]"
                            >
                                {/* Background Image con overlay */}
                                <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden rounded-3xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Link icon */}
                                    <div className="absolute top-6 right-6 z-20 opacity-70 group-hover:opacity-100 transition-opacity">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 256 256"
                                            fill="white"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12">
                                    <div className="flex items-start gap-6">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 p-3">
                                            <img
                                                src={project.icon}
                                                alt=""
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        
                                        {/* Text content */}
                                        <div className="flex-1">
                                            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3">
                                                <span className="text-xs font-geist font-medium text-white/70 uppercase tracking-wide">
                                                    {project.type}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-3xl md:text-5xl font-geist font-bold text-white mb-3 tracking-tight">
                                                {project.title}
                                            </h3>
                                            
                                            <p className="text-base md:text-lg font-geist text-white/80 max-w-2xl leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/10" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                </div>
            </div>
            <section id="works" ref={ref} className="container md:px-0 mt-20 pb-20 relative  sm:mt-20">
                <div className="px-0 md:px-20">
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
                            <ProjectCard key={`work-${index}`} project={project} index={index} />
                        ))}
                        
                    </div>

                    {itemsToShow < dataProject.length && (
                        <div className="text-center justify-center mt-8">
                            <button
                                className="bg-ln-gray-header uppercase shadow-ln-xs px-12 py-3 overflow-hidden  rounded-full uppercase font-geist font-bold text-[14px] relative" 
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