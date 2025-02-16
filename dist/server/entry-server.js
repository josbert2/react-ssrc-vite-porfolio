import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { useId, useRef, useState, useEffect, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { useInView } from "react-intersection-observer";
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const id = useId();
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute  inset-0 h-full w-full  svg-stroke-color-doit",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            patternContentUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ jsx("circle", { id: "pattern-circle", cx, cy, r: cr })
          }
        ) }),
        /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: `url(#${id})` })
      ]
    }
  );
}
function Rrss() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex justify-center mt-4",
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative isolate grid  auto-cols-fr grid-flow-col gap-1 rounded-10 bg-[#181818] p-1",
          style: { outline: "none" },
          children: [
            /* @__PURE__ */ jsx("a", { href: "https://github.com/josbert2", target: "_blank", className: "hover:bg-[#373737] bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-github text-[#9b9b9b] w-4 h-4",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                  /* @__PURE__ */ jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/josbert_ui/#", target: "_blank", className: "  bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-instagram text-[#9b9b9b] w-4 h-4",
                children: [
                  /* @__PURE__ */ jsx("rect", { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 }),
                  /* @__PURE__ */ jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
                  /* @__PURE__ */ jsx("line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/josbert-hernandez-317b77113/", target: "_blank", className: "   bg-ln-gray-0 relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-linkedin text-[#9b9b9b] w-4 h-4",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
                  /* @__PURE__ */ jsx("rect", { width: 4, height: 12, x: 2, y: 9 }),
                  /* @__PURE__ */ jsx("circle", { cx: 4, cy: 4, r: 2 })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("a", { href: "https://codepen.io/josbert", target: "_blank", className: "   bg-ln-gray-0  relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-codepen text-[#9b9b9b] w-4 h-4",
                children: [
                  /* @__PURE__ */ jsx("polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
                  /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 22, y2: "15.5" }),
                  /* @__PURE__ */ jsx("polyline", { points: "22 8.5 12 15.5 2 8.5" }),
                  /* @__PURE__ */ jsx("polyline", { points: "2 15.5 12 8.5 22 15.5" }),
                  /* @__PURE__ */ jsx("line", { x1: 12, x2: 12, y1: 2, y2: "8.5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("a", { href: "https://x.com/JosbertHern", target: "_blank", className: "   bg-ln-gray-0 relative z-10 h-8 whitespace-nowrap rounded-md px-2 text-label-sm text-text-soft-400 outline-none flex items-center justify-center gap-1.5 transition duration-300 ease-out focus:outline-none data-[state=active]:text-text-strong-950 aspect-square", children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "lucide lucide-twitter text-[#9b9b9b] w-4 h-4",
                children: /* @__PURE__ */ jsx("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
              }
            ) })
          ]
        }
      )
    }
  ) });
}
const presentacionTwo = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "framer-1xpccc6",
        "data-framer-appear-id": "1xpccc6",
        "data-framer-name": "Text",
        style: {
          opacity: "1",
          transform: "perspective(1200px)"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "framer-9uyh1w",
            "data-framer-component-type": "RichTextContainer",
            "data-framer-name": "Bio",
            style: {
              display: "flex",
              flexDirection: "column",
              flexShrink: "0",
              justifyContent: "flex-start",
              outline: "none",
              transform: "none"
            },
            children: /* @__PURE__ */ jsx(
              "p",
              {
                className: "framer-text",
                style: {
                  "--font-selector": "RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==",
                  "--framer-font-family": "'General Sans', 'General Sans Placeholder', sans-serif",
                  "--framer-font-size": "44px",
                  "--framer-font-weight": "500",
                  "--framer-letter-spacing": "-0.02em",
                  "--framer-line-height": "1.4em",
                  "--framer-text-alignment": "center",
                  "--framer-text-color": "rgba(209, 213, 230, 0.87)"
                },
                children: /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: "framer-text",
                    "data-text-fill": "true",
                    style: {
                      backgroundImage: "linear-gradient(0deg, rgba(190, 193, 207, 0.64) 0%, rgba(213, 216, 234, 0.886) 88.2362%, rgb(223, 226, 245) 100%)"
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "font-xl", children: " Hi, I'm Josbert 💫 I am" }),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "framer-text mr-1",
                          style: {
                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=",
                            "--framer-font-weight": "400"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "span",
                        {
                          className: "framer-text",
                          style: {
                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXNlbWlib2xk",
                            "--framer-font-weight": "900",
                            "--framer-font-size": "54px"
                          },
                          children: [
                            /* @__PURE__ */ jsx("br", {}),
                            "  Frontend Enginer"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "span",
                        {
                          className: "framer-text mr-2",
                          style: {
                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=",
                            "--framer-font-weight": "400",
                            "--framer-font-family": "'DM Serif Display', 'DM Serif Display Placeholder', serif"
                          },
                          children: [
                            /* @__PURE__ */ jsx("br", {}),
                            "&"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "framer-text",
                          style: {
                            "--font-selector": "R0Y7RE0gU2VyaWYgRGlzcGxheS1pdGFsaWM=",
                            "--framer-font-family": "'DM Serif Display', 'DM Serif Display Placeholder', serif",
                            "--framer-font-style": "italic",
                            "--framer-font-weight": "400"
                          },
                          children: "Creative developer"
                        }
                      ),
                      "."
                    ]
                  }
                )
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(Rrss, {})
  ] });
};
function presentacion() {
  return /* @__PURE__ */ jsx("div", { children: presentacionTwo() });
}
const tools = [
  {
    "id": 1,
    "label": "Icon",
    "wrapperClass": "framer-1tltcml",
    "dataFramerName": "Tool1",
    "name": "Tool1",
    "imgSrc": "https://framerusercontent.com/images/U4uEM64hE0jpeXWU7oQnAJ0t3w.png"
  },
  {
    "id": 2,
    "label": "Icon",
    "wrapperClass": "framer-1tcxtaf",
    "dataFramerName": "Tool2",
    "name": "Tool2",
    "imgSrc": "https://framerusercontent.com/images/YWcP2W5U3RNsyQzTRoW9XnBSL4Q.png"
  },
  {
    "id": 4,
    "label": "Icon",
    "wrapperClass": "framer-1iu7w7r",
    "dataFramerName": "Tool4",
    "name": "Tool4",
    "imgSrc": "https://framerusercontent.com/images/biOHrT9Rj4WyodSqjmfmg6BCBk.png"
  },
  {
    "id": 5,
    "label": "Icon",
    "wrapperClass": "framer-goisdy",
    "dataFramerName": "Tool5",
    "name": "Tool5",
    "imgSrc": "https://framerusercontent.com/images/RN13Jbe1UCpcj2BfwLRaAVrNVXM.png"
  },
  {
    "id": 6,
    "label": "Icon",
    "wrapperClass": "framer-11n8fy6",
    "dataFramerName": "Tool6",
    "name": "Tool6",
    "imgSrc": "https://framerusercontent.com/images/7yqHqHrtdNC9RKecSqDC3FygaaM.png"
  },
  {
    "id": 7,
    "label": "Icon",
    "wrapperClass": "framer-1bxte5q",
    "dataFramerName": "Tool7",
    "name": "Tool7",
    "imgSrc": "https://framerusercontent.com/images/IhARhAMNUNSYXrW0SD6Uhty6Egw.png"
  },
  {
    "id": 8,
    "label": "Icon",
    "wrapperClass": "framer-189l4rc",
    "dataFramerName": "Tool8",
    "name": "Tool8",
    "imgSrc": "https://framerusercontent.com/images/iVzaCn1DRm8KBrYvIoG9dcAnKHY.png"
  },
  {
    "id": 9,
    "label": "Icon",
    "wrapperClass": "framer-47sbco",
    "dataFramerName": "Tool9",
    "name": "Tool9",
    "imgSrc": "https://framerusercontent.com/images/DCaJezx8M3GlKYKkt801HBQK8Y.png"
  },
  {
    "id": 1,
    "label": "Icon",
    "wrapperClass": "framer-1tltcml",
    "dataFramerName": "Tool1",
    "name": "Tool1",
    "imgSrc": "https://framerusercontent.com/images/U4uEM64hE0jpeXWU7oQnAJ0t3w.png"
  },
  {
    "id": 2,
    "label": "Icon",
    "wrapperClass": "framer-1tcxtaf",
    "dataFramerName": "Tool2",
    "name": "Tool2",
    "imgSrc": "https://framerusercontent.com/images/YWcP2W5U3RNsyQzTRoW9XnBSL4Q.png"
  },
  {
    "id": 4,
    "label": "Icon",
    "wrapperClass": "framer-1iu7w7r",
    "dataFramerName": "Tool4",
    "name": "Tool4",
    "imgSrc": "https://framerusercontent.com/images/biOHrT9Rj4WyodSqjmfmg6BCBk.png"
  },
  {
    "id": 5,
    "label": "Icon",
    "wrapperClass": "framer-goisdy",
    "dataFramerName": "Tool5",
    "name": "Tool5",
    "imgSrc": "https://framerusercontent.com/images/RN13Jbe1UCpcj2BfwLRaAVrNVXM.png"
  },
  {
    "id": 6,
    "label": "Icon",
    "wrapperClass": "framer-11n8fy6",
    "dataFramerName": "Tool6",
    "name": "Tool6",
    "imgSrc": "https://framerusercontent.com/images/7yqHqHrtdNC9RKecSqDC3FygaaM.png"
  },
  {
    "id": 7,
    "label": "Icon",
    "wrapperClass": "framer-1bxte5q",
    "dataFramerName": "Tool7",
    "name": "Tool7",
    "imgSrc": "https://framerusercontent.com/images/IhARhAMNUNSYXrW0SD6Uhty6Egw.png"
  },
  {
    "id": 8,
    "label": "Icon",
    "wrapperClass": "framer-189l4rc",
    "dataFramerName": "Tool8",
    "name": "Tool8",
    "imgSrc": "https://framerusercontent.com/images/iVzaCn1DRm8KBrYvIoG9dcAnKHY.png"
  },
  {
    "id": 9,
    "label": "Icon",
    "wrapperClass": "framer-47sbco",
    "dataFramerName": "Tool9",
    "name": "Tool9",
    "imgSrc": "https://framerusercontent.com/images/DCaJezx8M3GlKYKkt801HBQK8Y.png"
  },
  {
    "id": 1,
    "label": "Icon",
    "wrapperClass": "framer-1tltcml",
    "dataFramerName": "Tool1",
    "name": "Tool1",
    "imgSrc": "https://framerusercontent.com/images/U4uEM64hE0jpeXWU7oQnAJ0t3w.png"
  },
  {
    "id": 2,
    "label": "Icon",
    "wrapperClass": "framer-1tcxtaf",
    "dataFramerName": "Tool2",
    "name": "Tool2",
    "imgSrc": "https://framerusercontent.com/images/YWcP2W5U3RNsyQzTRoW9XnBSL4Q.png"
  },
  {
    "id": 4,
    "label": "Icon",
    "wrapperClass": "framer-1iu7w7r",
    "dataFramerName": "Tool4",
    "name": "Tool4",
    "imgSrc": "https://framerusercontent.com/images/biOHrT9Rj4WyodSqjmfmg6BCBk.png"
  },
  {
    "id": 5,
    "label": "Icon",
    "wrapperClass": "framer-goisdy",
    "dataFramerName": "Tool5",
    "name": "Tool5",
    "imgSrc": "https://framerusercontent.com/images/RN13Jbe1UCpcj2BfwLRaAVrNVXM.png"
  },
  {
    "id": 6,
    "label": "Icon",
    "wrapperClass": "framer-11n8fy6",
    "dataFramerName": "Tool6",
    "name": "Tool6",
    "imgSrc": "https://framerusercontent.com/images/7yqHqHrtdNC9RKecSqDC3FygaaM.png"
  },
  {
    "id": 7,
    "label": "Icon",
    "wrapperClass": "framer-1bxte5q",
    "dataFramerName": "Tool7",
    "name": "Tool7",
    "imgSrc": "https://framerusercontent.com/images/IhARhAMNUNSYXrW0SD6Uhty6Egw.png"
  },
  {
    "id": 8,
    "label": "Icon",
    "wrapperClass": "framer-189l4rc",
    "dataFramerName": "Tool8",
    "name": "Tool8",
    "imgSrc": "https://framerusercontent.com/images/iVzaCn1DRm8KBrYvIoG9dcAnKHY.png"
  },
  {
    "id": 9,
    "label": "Icon",
    "wrapperClass": "framer-47sbco",
    "dataFramerName": "Tool9",
    "name": "Tool9",
    "imgSrc": "https://framerusercontent.com/images/DCaJezx8M3GlKYKkt801HBQK8Y.png"
  }
];
function MarqueeHtml() {
  const marqueeRef = useRef(null);
  const [oneSetWidth, setOneSetWidth] = useState(0);
  const speed = 15;
  useEffect(() => {
    if (marqueeRef.current) {
      const fullWidth = marqueeRef.current.scrollWidth;
      setOneSetWidth(fullWidth / 2);
    }
  }, []);
  const duration = oneSetWidth > 0 ? oneSetWidth / speed : 0;
  return /* @__PURE__ */ jsx("div", { className: "framer-1augxt8", "data-framer-name": "IconsTicker", children: /* @__PURE__ */ jsx("div", { className: "framer-obe0ej-container", children: /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: "0px",
        padding: "14px",
        listStyleType: "none",
        opacity: 1,
        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)",
        overflow: "hidden",
        position: "relative"
      },
      children: /* @__PURE__ */ jsx(
        motion.ul,
        {
          ref: marqueeRef,
          style: {
            display: "flex",
            gap: "14px",
            position: "absolute",
            left: 0,
            top: 0,
            willChange: "transform"
          },
          animate: oneSetWidth ? { x: [0, -oneSetWidth] } : {},
          transition: {
            duration,
            // Duración calculada en base a la velocidad
            repeat: Infinity,
            ease: "linear"
          },
          children: [...tools, ...tools].map((item, index) => /* @__PURE__ */ jsx(
            "li",
            {
              "aria-hidden": "true",
              style: {
                listStyleType: "none",
                willChange: "transform"
              },
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  "aria-label": item.label,
                  className: item.wrapperClass,
                  "data-framer-name": item.dataFramerName,
                  style: { flexShrink: 0, width: 35, height: 35, position: "relative" },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      "data-framer-background-image-wrapper": "true",
                      style: {
                        position: "absolute",
                        borderRadius: "inherit",
                        inset: "0px"
                      },
                      children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: item.imgSrc,
                          alt: "",
                          style: {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center center",
                            objectFit: "cover",
                            imageRendering: "auto"
                          }
                        }
                      )
                    }
                  )
                }
              )
            },
            index
          ))
        }
      )
    }
  ) }) });
}
function NalaImage() {
  const testimonials = [
    {
      quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "../public/image-4.jpg"
    },
    {
      quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "../public/nala.jpg"
    },
    {
      quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "./public/image-5 (1).webp"
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://www.jopcmelo.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.6bda92e9.webp&w=384&q=75"
    },
    {
      quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "../public/iamge-5.png"
    }
  ];
  const [active, setActive] = useState(0);
  const autoplay = false;
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const isActive = (index) => {
    return index === active;
  };
  useEffect(() => {
  }, [autoplay]);
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !useIsMobile() ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "", style: { opacity: 1, transform: "none" }, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2", children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Photo 0 of João's travels",
        width: 1536,
        height: 2048,
        className: "absolute inset-0 h-full w-full object-cover",
        src: "https://www.jopcmelo.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.6bda92e9.webp&w=384&q=75",
        style: { color: "transparent" }
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "", style: { opacity: 1, transform: "none" }, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2", children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Photo 0 of João's travels",
        width: 1536,
        height: 2048,
        className: "absolute inset-0 h-full w-full object-cover",
        src: "../public/nala.jpg",
        style: { color: "transparent" }
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "", style: { opacity: 1, transform: "none" }, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2", children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Photo 0 of João's travels",
        width: 1536,
        height: 2048,
        className: "absolute inset-0 h-full w-full object-cover",
        src: "../public/image-5 (1).webp",
        style: { color: "transparent" }
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "", style: { opacity: 1, transform: "none" }, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2", children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Photo 0 of João's travels",
        width: 3024,
        height: 4032,
        className: "absolute inset-0 h-full w-full object-cover",
        src: "../public/image-4.jpg",
        style: { color: "transparent" }
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "", style: { opacity: 1, transform: "none" }, children: /* @__PURE__ */ jsx("div", { className: "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2", children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Photo 0 of João's travels",
        width: 3024,
        height: 4032,
        className: "absolute inset-0 h-full w-full object-cover",
        src: "../public/iamge-5.png",
        style: { color: "transparent" }
      }
    ) }) })
  ] }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: " mx-auto antialiased font-sans px-16 md:px-8 lg:px-12 md:py-20", children: /* @__PURE__ */ jsxs("div", { className: "relative grid grid-cols-1 md:grid-cols-2  gap-20", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "relative h-80 w-full", children: /* @__PURE__ */ jsx(AnimatePresence, { children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: {
          opacity: 0,
          scale: 0.9,
          z: -100,
          rotate: randomRotateY()
        },
        animate: {
          opacity: isActive(index) ? 1 : 0.7,
          scale: isActive(index) ? 1 : 0.95,
          z: isActive(index) ? 0 : -100,
          rotate: isActive(index) ? 0 : randomRotateY(),
          zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
          y: isActive(index) ? [0, -80, 0] : 0
        },
        exit: {
          opacity: 0,
          scale: 0.9,
          z: 100,
          rotate: randomRotateY()
        },
        transition: {
          duration: 0.4,
          ease: "easeInOut"
        },
        className: "absolute inset-0 origin-bottom",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: testimonial.src,
            alt: testimonial.name,
            width: 500,
            height: 500,
            draggable: false,
            className: "h-full w-full rounded-3xl object-cover object-center"
          }
        )
      },
      testimonial.src
    )) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-col py-4", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: {
            y: 20,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          exit: {
            y: -20,
            opacity: 0
          },
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        },
        active
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 pt-12 md:pt-0", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handlePrev,
            className: "cursor-pointer h-11 w-11 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",
            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { stroke: "#d1d5e6de", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleNext,
            className: "cursor-pointer h-11 w-11 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",
            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { stroke: "#d1d5e6de", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" }) })
          }
        )
      ] })
    ] })
  ] }) }) }) });
}
const profile = "/assets/profile-6CZfycmz.jpg";
const DashedLineContainer = ({ children }) => {
  const container = {
    initial: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "flex flex-col size-full relative",
      variants: container,
      initial: "initial",
      animate: "visible",
      children
    }
  );
};
const LineAbsolute = () => {
  const lineLeft = {
    initial: {
      opacity: 0,
      height: "0%"
    },
    visible: {
      opacity: 1,
      height: "100%",
      transition: {
        delay: 0.5,
        // Delay de 0.5s para la línea izquierda
        duration: 0.8
        // Ajusta la duración como prefieras
      }
    }
  };
  const lineRight = {
    initial: {
      opacity: 0,
      height: "0%"
    },
    visible: {
      opacity: 1,
      height: "100%",
      transition: {
        delay: 1,
        duration: 0.8
      }
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "container pointer-events-none absolute inset-0 -z-10 select-none mac:block",
      initial: "initial",
      animate: "visible",
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute h-full w-[1px] -left-0 bleed-ln-gray-200 bg-[#2d2d2d] h-full",
            variants: lineLeft
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute h-full w-[1px] -right-0 bleed-ln-gray-200 bg-[#2d2d2d] h-full",
            variants: lineRight
          }
        )
      ]
    }
  ) });
};
const VerticalDashedLine = ({
  className,
  width = "100%",
  mobileWidth = "100%"
}) => {
  const isMobile = useIsMobile();
  const variants = {
    initial: { width: "0%", opacity: 0.6 },
    visible: {
      width: isMobile ? mobileWidth : width,
      opacity: 0.2,
      transition: { duration: 1 }
    }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants,
      className: twMerge(
        "relative border-dashed border-t border-primary",
        className
      )
    }
  );
};
const HorizontalDashedLine = ({
  className,
  side,
  height = "100%"
}) => {
  const variants = {
    initial: { height: "0%", opacity: 0.6 },
    visible: { height, opacity: 0.2, transition: { duration: 0.5 } }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      variants,
      className: twMerge(
        "border-dashed border-l border-primary absolute top-0",
        side === "left" ? "left-0" : "right-0",
        className
      )
    }
  );
};
const DashedCircle = ({ className }) => {
  return /* @__PURE__ */ jsx("div", { className: twMerge("absolute hidden md:block", className), children: /* @__PURE__ */ jsx(motion.div, { className: "relative", initial: "initial", animate: "visible", children: /* @__PURE__ */ jsx(
    motion.svg,
    {
      width: "100",
      height: "100",
      viewBox: "0 0 100 100",
      className: "absolute inset-0 border-color svg-stroke-color",
      children: /* @__PURE__ */ jsx(
        motion.circle,
        {
          cx: "50",
          cy: "50",
          r: "40",
          fill: "none",
          stroke: "current",
          strokeWidth: "1",
          strokeDasharray: "5,5",
          initial: { strokeDashoffset: 283 },
          animate: { strokeDashoffset: 0 },
          transition: { duration: 2, ease: "easeInOut" },
          className: "text-primary/20"
        }
      )
    }
  ) }) });
};
const HeroSection = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center text-center px-10 xl:px-72 py-32 z-[100]", children: /* @__PURE__ */ jsxs(DashedLineContainer, { children: [
    !useIsMobile() ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        VerticalDashedLine,
        {
          className: "md:-left-10",
          width: "calc(100% + 80px)",
          mobileWidth: "100%"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "z-[-10] ", children: /* @__PURE__ */ jsx(
        DotPattern,
        {
          className: twMerge(
            "[mask-image:radial-gradient(235px_circle_at_center,white,transparent)] top-[-104px]"
          )
        }
      ) })
    ] }) : /* @__PURE__ */ jsx(Fragment, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "flex justify-center py-4 rounded-lg mt-6",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "frame rounded-lg",
            initial: { scale: 0.9 },
            animate: { scale: 1 },
            transition: { duration: 0.5 },
            children: /* @__PURE__ */ jsx(
              motion.img,
              {
                className: "rounded-[24px]",
                src: "https://josbert.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fperfil.41276050.jpg&w=1080&q=75",
                alt: "perfil",
                initial: { y: 10 },
                animate: { y: 0 },
                transition: { duration: 0.5 }
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(presentacion, {}),
    /* @__PURE__ */ jsxs("div", { className: "", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto h-8 w-full max-w-[596px] items-center gap-6 px-4 my-4 hidden md:flex xl:my-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-px w-full flex-1 bg-ln-gray-200", children: [
          /* @__PURE__ */ jsxs("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "11", height: "11", className: "svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2", children: [
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" }),
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" })
          ] }),
          /* @__PURE__ */ jsxs("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "11", height: "11", className: "svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px]  right-0 top-1/2 -translate-x-1/2 -translate-y-1/2", children: [
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" }),
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", className: "size-6", children: [
          /* @__PURE__ */ jsx("path", { stroke: "#434343", "stroke-linecap": "round", "stroke-linejoin": "round", d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }),
          /* @__PURE__ */ jsx("path", { stroke: "#434343", "stroke-linecap": "round", "stroke-linejoin": "round", d: "M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-px w-full flex-1 bg-ln-gray-200", children: [
          /* @__PURE__ */ jsxs("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "11", height: "11", className: "svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2", children: [
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" }),
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" })
          ] }),
          /* @__PURE__ */ jsxs("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "11", height: "11", className: "svg-stroke-color svg-fill-color absolute z-30 min-h-[9px] min-w-[9px]  right-0 top-1/2 -translate-x-1/2 -translate-y-1/2", children: [
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" }),
            /* @__PURE__ */ jsx("path", { d: "M0 0 C1.8871875 0.00773437 1.8871875 0.00773437 3.8125 0.015625 C5.070625 0.01046875 6.32875 0.0053125 7.625 0 C10.8125 0.265625 10.8125 0.265625 12.8125 2.265625 C13.078125 5.453125 13.078125 5.453125 13.0625 9.265625 C13.06765625 10.52375 13.0728125 11.781875 13.078125 13.078125 C12.8125 16.265625 12.8125 16.265625 10.8125 18.265625 C7.625 18.53125 7.625 18.53125 3.8125 18.515625 C2.554375 18.52078125 1.29625 18.5259375 0 18.53125 C-3.1875 18.265625 -3.1875 18.265625 -5.1875 16.265625 C-5.453125 13.078125 -5.453125 13.078125 -5.4375 9.265625 C-5.44265625 8.0075 -5.4478125 6.749375 -5.453125 5.453125 C-5.08918713 1.08587052 -4.36725448 0.36393787 0 0 Z M-2.1875 2.265625 C-3.42637548 4.74337595 -3.35491669 6.50216207 -3.375 9.265625 C-3.38917969 10.1525 -3.40335937 11.039375 -3.41796875 11.953125 C-3.41463126 14.46082484 -3.41463126 14.46082484 -1.1875 16.265625 C1.18205386 16.58462015 1.18205386 16.58462015 3.8125 16.515625 C5.1428125 16.52335937 5.1428125 16.52335937 6.5 16.53125 C9.00650239 16.48615362 9.00650239 16.48615362 10.8125 14.265625 C11.13149515 11.89607114 11.13149515 11.89607114 11.0625 9.265625 C11.06765625 8.37875 11.0728125 7.491875 11.078125 6.578125 C11.03302862 4.07162261 11.03302862 4.07162261 8.8125 2.265625 C6.14300591 2.02246844 6.14300591 2.02246844 3.1875 2.140625 C2.18460937 2.15867188 1.18171875 2.17671875 0.1484375 2.1953125 C-1.00785156 2.23011719 -1.00785156 2.23011719 -2.1875 2.265625 Z ", fill: "current", transform: "translate(5.1875,-0.265625)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pb-4", children: /* @__PURE__ */ jsx(MarqueeHtml, {}) })
    ] }),
    !useIsMobile() ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(VerticalDashedLine, {}),
      /* @__PURE__ */ jsx(
        HorizontalDashedLine,
        {
          className: "-top-14",
          height: "calc(100% + 112px)",
          side: "left"
        }
      ),
      /* @__PURE__ */ jsx(
        HorizontalDashedLine,
        {
          className: "-top-14",
          height: "calc(100% + 112px)",
          side: "right"
        }
      ),
      /* @__PURE__ */ jsx(DashedCircle, { className: "-top-12 -left-12" })
    ] }) : /* @__PURE__ */ jsx(Fragment, {}),
    /* @__PURE__ */ jsx("div", { className: "h-full w-full absolute top-0 right-0 overflow-hidden z-[-10]", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full flex justify-end" }) })
  ] }) }) });
};
const UserTravels = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "mt-6 sm:mt-20 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[35px] w-full h-[57px] bg-[#1a1a1d]" }),
    /* @__PURE__ */ jsx(NalaImage, {})
  ] }) }) });
};
const AboutMe = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "container pointer-events-none  -z-10 select-none mac:block", children: /* @__PURE__ */ jsxs("section", { className: "framer-bvzlds", children: [
    /* @__PURE__ */ jsxs("div", { className: "framer-h6odpz grid-col-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "framer-1n4bwt", children: [
        /* @__PURE__ */ jsxs("div", { className: "framer-9ydxhr", children: [
          /* @__PURE__ */ jsx("div", { className: "ssr-variant hidden-upi8ji", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "framer-uzhzb6",
              style: {
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                transform: "none"
              },
              children: /* @__PURE__ */ jsxs(
                "h2",
                {
                  style: {
                    "--font-selector": "SW50ZXItTWVkaXVt",
                    "--framer-font-family": "'Inter', 'Inter Placeholder', sans-serif",
                    "--framer-font-size": "44px",
                    "--framer-font-weight": "500",
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "var(--token-a2d601b2-39bf-470a-bb5f-61bc109d99fd, rgba(255, 255, 255, 0.9))"
                  },
                  className: "framer-text open-sans",
                  children: [
                    /* @__PURE__ */ jsx("span", { style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }, children: "More" }),
                    " ",
                    /* @__PURE__ */ jsx("span", { style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }, children: "about" }),
                    /* @__PURE__ */ jsxs("span", { style: { "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-weight": "600", "--framer-text-color": "rgb(255, 255, 255)" }, className: "framer-text", children: [
                      /* @__PURE__ */ jsx("span", { style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" } }),
                      /* @__PURE__ */ jsx("span", { style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" } })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          "--font-selector": "R0Y7SW5zdHJ1bWVudCBTZXJpZi1pdGFsaWM=",
                          "--framer-font-family": "'Instrument Serif', 'Instrument Serif Placeholder', serif",
                          "--framer-font-style": "italic",
                          "--framer-font-weight": "400",
                          "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))"
                        },
                        className: "framer-text ml-3",
                        children: /* @__PURE__ */ jsx("span", { style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }, children: "myself" })
                      }
                    )
                  ]
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "framer-11blnjb",
              "data-framer-name": "Become part of something useful, In chart goat university we help each other and learn from each other everyday",
              style: {
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                transform: "none"
              },
              "data-framer-component-type": "RichTextContainer",
              children: /* @__PURE__ */ jsx("p", { className: "framer-text framer-styles-preset-1kvyxmc open-sans", "data-styles-preset": "n7RLEGRKm", children: /* @__PURE__ */ jsx("span", { style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }, children: "Hi, i am josbert i am web developer frontend and creative enginer desing" }) })
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "text-sm open-sans", style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }, children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base", children: "🎨 Frontend & UI/UX" }),
            /* @__PURE__ */ jsxs(
              "ul",
              {
                className: "mt-2 l !list-disc ml-5 pl-5 framer-text open-sans !text-sm",
                style: {
                  listStyleType: "disc",
                  "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))"
                },
                children: [
                  /* @__PURE__ */ jsx("li", { children: "Expertise in React.js, Next.js, Vue.js, TailwindCSS" }),
                  /* @__PURE__ */ jsx("li", { children: "UI/UX Design with Figma, Adobe XD, Design Systems" }),
                  /* @__PURE__ */ jsx("li", { children: "Framer Motion & GSAP for animations and microinteractions" }),
                  /* @__PURE__ */ jsx("li", { children: "Accessibility (a11y) & performance optimization" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm open-sans", style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }, children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base", children: "💻 Fullstack Development" }),
            /* @__PURE__ */ jsxs(
              "ul",
              {
                className: "mt-2 l !list-disc ml-5 pl-5 framer-text open-sans !text-sm",
                style: {
                  listStyleType: "disc",
                  "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))"
                },
                children: [
                  /* @__PURE__ */ jsx("li", { children: " Proficient in JavaScript, TypeScript, Node.js, Express.js, NestJS" }),
                  /* @__PURE__ */ jsx("li", { children: " API Development with REST & GraphQL, authentication, and security best practices" }),
                  /* @__PURE__ */ jsx("li", { children: "Database expertise: MongoDB, PostgreSQL, Firebase " }),
                  /* @__PURE__ */ jsx("li", { children: "Serverless & Cloud: AWS, Vercel, Supabase" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-sm open-sans", style: { display: "inline-block", opacity: 1, transform: "none", willChange: "transform" }, children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base", children: "⚙️ Backend & DevOps" }),
            /* @__PURE__ */ jsxs(
              "ul",
              {
                className: "mt-2 l !list-disc ml-5 pl-5 framer-text open-sans !text-sm",
                style: {
                  listStyleType: "disc",
                  "--framer-text-color": "var(--token-f195ea74-7512-4096-8d91-0e7c7e10d0ab, rgba(255, 255, 255, 0.6))"
                },
                children: [
                  /* @__PURE__ */ jsx("li", { children: "Scalable API architecture & microservices" }),
                  /* @__PURE__ */ jsx("li", { children: "CI/CD pipelines, Docker, and Kubernetes" }),
                  /* @__PURE__ */ jsx("li", { children: "Caching, performance tuning & database optimization" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "framer-6iz3g2-container mt-8", children: /* @__PURE__ */ jsx("div", { className: "ssr-variant hidden-upi8ji", children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "bg-ln-gray-header shadow-ln-xs px-12 py-3 overflow-hidden  rounded-full uppercase open-sans font-bold text-[14px] relative ",
            "data-border": "true",
            target: "_blank",
            rel: "noopener",
            "data-framer-name": "Variant 1",
            children: [
              "Contact me",
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute z-[9999] h-[1.5px] w-[50%] left-2/4 transform -translate-x-2/4 inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0",
                  style: { top: "auto", bottom: "0px" },
                  initial: { opacity: 0, width: "0%" },
                  animate: { opacity: 1, width: "50%" },
                  exit: { opacity: 0, width: "0%" },
                  transition: { duration: 3.2, ease: "easeInOut" }
                }
              )
            ]
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "framer-1nqcbjd w-full", "data-framer-name": "section", children: [
        /* @__PURE__ */ jsx("div", { className: "ssr-variant hidden-7lwtj4 hidden-upi8ji  w-full", children: /* @__PURE__ */ jsx("div", { className: "framer-1l6nomv-container", "data-framer-name": "card 1", id: "1l6nomv", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "framer-NoRSJ framer-1ln1adt framer-v-1ln1adt",
            "data-highlight": "true",
            style: {
              backgroundColor: "var(--token-f213e283-24d0-40a3-a2dc-bca1da07b971, rgb(20, 20, 20))",
              width: "100%",
              opacity: 1,
              borderRadius: "24px"
            },
            "data-framer-name": "Variant 1",
            children: /* @__PURE__ */ jsxs("div", { className: "framer-1acgu6t", "data-framer-name": "content", style: { opacity: 1, borderRadius: "16px" }, children: [
              /* @__PURE__ */ jsx("div", { className: "framer-69mjuu", "data-framer-name": "thumbnail", style: { filter: "brightness(1)", borderRadius: "16px", transform: "none", transformOrigin: "50% 50% 0px", willChange: "transform" }, children: /* @__PURE__ */ jsx("div", { style: { position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }, "data-framer-background-image-wrapper": "true", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: profile,
                  style: {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    objectPosition: "center",
                    objectFit: "cover"
                  },
                  width: 500,
                  height: 500,
                  alt: "Picture of the author"
                }
              ) }) }),
              /* @__PURE__ */ jsx("div", { className: "framer-fnoddg-container", style: { opacity: 1 }, children: /* @__PURE__ */ jsx("div", { style: { display: "inline-block", transform: "none" }, children: /* @__PURE__ */ jsx("div", { className: "framer-TETrW framer-1i145ng framer-v-1i145ng", "data-framer-name": "Variant 1", style: { height: "100%", width: "100%", opacity: 1 }, children: /* @__PURE__ */ jsx(
                "div",
                {
                  "data-framer-component-type": "SVG",
                  "data-framer-name": "play btn",
                  style: {
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    fill: "rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                    transform: "rotate(3deg)",
                    opacity: 1
                  },
                  className: "framer-37jcy4",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx("div", { className: "svgContainer", style: { width: "100%", height: "100%", aspectRatio: "inherit" }, children: /* @__PURE__ */ jsx("svg", { style: { width: "100%", height: "100%" }, viewBox: "0 0 82 82", preserveAspectRatio: "none", width: "100%", height: "100%", children: /* @__PURE__ */ jsx("use", { href: "#svg-797516101_2247" }) }) })
                }
              ) }) }) })
            ] })
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "framer-125ssij", "data-framer-name": "bacgk blur" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "framer-1kpnfyz", "data-framer-name": "overlay" }),
    /* @__PURE__ */ jsx("div", { className: "framer-18ifhg6", "data-framer-name": "grid bg", children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "absolute",
          borderRadius: "inherit",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "46.62px auto",
          backgroundImage: "url(https://framerusercontent.com/images/VfkEna8iRjS9ZbXeCG1MRu3r0w.svg)",
          border: 0
        },
        "data-framer-background-image-wrapper": "true"
      }
    ) })
  ] }) }) });
};
function HeaderUser() {
  const easeOutQuint = [0.23, 1, 0.32, 1];
  const widthMobileHeader = !useIsMobile() ? "50%" : "100%";
  const yMobileHeader = !useIsMobile() ? "20px" : "0";
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.3;
      setScrolled(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed top-[20px]  left-0 !transform tranform-x-2/4 z-[9999] flex w-full items-center justify-center gap-8 bg-ln-gray-900 lg:bg-transparent",
      initial: { y: 0 },
      animate: scrolled ? { y: -20, top: 0 } : { y: 0, top: yMobileHeader },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
      children: /* @__PURE__ */ jsxs(
        motion.header,
        {
          className: "relative backdrop-blur-lg z-10 flex h-10 w-full items-center !py-[35px] justify-between  rounded-t-2xl bg-ln-gray-25 px-4  lg:justify-start lg:rounded-3xl bg-ln-gray-header  lg:shadow-ln-xs",
          animate: scrolled ? { width: "100%", borderRadius: "0" } : { width: widthMobileHeader, borderRadius: "16px" },
          transition: { duration: 0.6, ease: easeOutQuint, delay: 0.1 },
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: !scrolled ? { top: ".3px", bottom: "auto" } : { top: "auto", bottom: "0px" },
                transition: { duration: 0.2, ease: easeOutQuint, delay: 0 },
                className: "absolute z-[9999] h-[1px] inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0 "
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2.5 pr-40 absolute top-2/4 transform -translate-y-2/4 ", children: /* @__PURE__ */ jsx("a", { className: "focus:outline-none", href: "/", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("h1", { className: "text-title-h6 bg-clip-text bg-gradient-to-b from-black dark:from-white text-transparent antialiased relative text-5xl sm:text-7xl font-bold py-1 font-anurati", children: "JH" }) }) }) }),
            /* @__PURE__ */ jsxs("nav", { className: "flex justify-center items-center gap-2.5 lg:flex absolute top-2/4 transform -translate-y-2/4  right-0", children: [
              /* @__PURE__ */ jsx("button", { className: " relative\n                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10\n                  px-4 text-label-sm outline-none transition duration-200 ease-out \n                  focus:outline-none text-ln-gray-500 shadow-regular-xs \n                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent\n                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full", children: "01. About" }),
              /* @__PURE__ */ jsx("button", { className: " relative\n                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10\n                  px-4 text-label-sm outline-none transition duration-200 ease-out \n                  focus:outline-none  text-ln-gray-500 shadow-regular-xs \n                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent\n                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full", children: "02. Experiencia" }),
              /* @__PURE__ */ jsx("button", { className: " relative\n                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10\n                  px-4 text-label-sm outline-none transition duration-200 ease-out \n                  focus:outline-none  text-ln-gray-500 shadow-regular-xs \n                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent\n                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full", children: "03. Trabajos" }),
              /* @__PURE__ */ jsx("button", { className: " relative\n                 inline-flex h-10 items-center justify-center gap-3.5 whitespace-nowrap rounded-10\n                  px-4 text-label-sm outline-none transition duration-200 ease-out \n                  focus:outline-none  text-ln-gray-500 shadow-regular-xs \n                  ring-stroke-soft-200 hover:bg-bg-weak-50 hover:shadow-none hover:ring-transparent\n                 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950 w-full", children: "04. Contactos" })
            ] })
          ]
        }
      )
    }
  );
}
const boxShadowIntensity = Math.random() * 225 + 5;
const asteroidVariants = {
  initial: (startPosition) => ({
    x: startPosition.x,
    y: startPosition.y,
    opacity: 1,
    scale: 0.5,
    rotate: 30,
    top: Math.random() * 30 + "vh",
    left: -100
  }),
  animate: (custom) => ({
    x: "50vw",
    y: "50vh",
    opacity: 0,
    scale: 0.2,
    transition: {
      duration: custom.duration,
      ease: "linear"
    }
  }),
  exit: {
    opacity: 0
  }
};
const generateRandomStartPosition = () => {
  if (typeof window === "undefined") return { x: -500, y: 0 };
  return {
    x: -500,
    // Start from the left of the screen
    y: Math.random() * window.innerHeight / 2 - window.innerHeight / 2
    // Random vertical position
  };
};
const AsteroidMotion = () => {
  const [asteroids, setAsteroids] = React__default.useState([]);
  const asteroidLimit = 4;
  React__default.useEffect(() => {
    const interval = setInterval(() => {
      setAsteroids((prev) => {
        const newAsteroid = {
          id: Math.random(),
          startPosition: generateRandomStartPosition(),
          duration: Math.random() * 4 + 4
          // Random duration between 3 and 6 seconds
        };
        return prev.length < asteroidLimit ? [...prev, newAsteroid] : prev;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: asteroids.map((asteroid) => /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "framer-hdff1m-container absolute",
      custom: {
        duration: asteroid.duration
      },
      variants: asteroidVariants,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onAnimationComplete: () => setAsteroids(
        (prev) => prev.filter((item) => item.id !== asteroid.id)
      ),
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "framer-PMKWr framer-v-8wex7e",
          style: {
            display: "contents"
          },
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "framer-8wex7e",
              "data-framer-name": "Variant 1",
              style: {
                background: "linear-gradient(270deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: "2px",
                height: "100%",
                opacity: "1",
                width: "100%"
              },
              children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "framer-16kciz9",
                  style: {
                    borderRadius: "1px",
                    // Mantiene la forma ajustada
                    boxShadow: `0 0 ${boxShadowIntensity}px 1px rgba(255, 255, 255, 0.6)`
                    // Brillo dinámico
                  },
                  animate: {
                    backgroundColor: [
                      "rgba(255, 255, 255, 0.2)",
                      // Blanco tenue
                      "rgba(255, 165, 0, 0.4)",
                      // Naranja opaco
                      "rgba(135, 206, 250, 0.4)",
                      // Azul cielo opaco
                      "rgba(255, 255, 255, 0.2)"
                      // Regreso a blanco tenue
                    ],
                    boxShadow: [
                      "0px 0px 6px 1px rgba(255, 255, 255, 0.6)",
                      // Blanco tenue
                      "0px 0px 15px 3px rgba(255, 165, 0, 0.8)",
                      // Resplandor naranja
                      "0px 0px 15px 3px rgba(135, 206, 250, 0.8)",
                      // Resplandor azul
                      "-3px 2px 14px 6px rgb(255 255 255)"
                      // Regreso a blanco
                    ]
                  },
                  transition: {
                    duration: 5,
                    // Duración más lenta para fluidez
                    ease: "easeInOut",
                    repeat: Infinity
                  }
                }
              )
            }
          )
        }
      )
    },
    asteroid.id
  )) });
};
function StarField() {
  const canvasRef = useRef(null);
  const numStars = 300;
  const initialBatch = 40;
  const initialPause = 0;
  const spawnRate = 40;
  const stars = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastSpawnTime = useRef(0);
  const firstBatchSpawned = useRef(false);
  const initialBatchTime = useRef(0);
  function createStar(canvasWidth, canvasHeight) {
    const lifetime = 3e3 + Math.random() * 2e3;
    const greyVal = Math.floor(Math.random() * 75 + 180);
    const baseAlpha = (Math.random() * 0.4 + 0.2).toFixed(2);
    const startX = Math.random() * canvasWidth;
    const startY = canvasHeight + 10;
    const endX = canvasWidth / 2;
    const endY = -50;
    return {
      startX,
      startY,
      endX,
      endY,
      radius: Math.random() * 1.2 + 0.4,
      r: greyVal,
      g: greyVal,
      b: greyVal,
      baseAlpha: parseFloat(baseAlpha),
      createdAt: Date.now(),
      lifetime,
      x: startX,
      y: startY
    };
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    function spawnInitialBatch() {
      for (let i = 0; i < initialBatch; i++) {
        if (canvas) {
          stars.current.push(createStar(canvas.width, canvas.height));
        }
      }
      firstBatchSpawned.current = true;
      initialBatchTime.current = performance.now();
      lastSpawnTime.current = performance.now();
    }
    function drawStars() {
      if (!ctx) return;
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      const now = Date.now();
      stars.current.forEach((star) => {
        const age = now - star.createdAt;
        const progress = age / star.lifetime;
        const curvedProgress = progress ** 2;
        const fadeFactor = 1 - progress;
        const currentAlpha = star.baseAlpha * fadeFactor;
        const newX = star.startX + (star.endX - star.startX) * curvedProgress;
        const newY = star.startY + (star.endY - star.startY) * curvedProgress;
        star.x = newX;
        star.y = newY;
        ctx.fillStyle = `rgba(${star.r}, ${star.g}, ${star.b}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
    function updateStars() {
      const now = Date.now();
      stars.current = stars.current.filter((star) => {
        const age = now - star.createdAt;
        return age < star.lifetime;
      });
      if (stars.current.length < numStars) {
        const nowPerf = performance.now();
        if (firstBatchSpawned.current && nowPerf - initialBatchTime.current > initialPause) {
          const deltaTime = nowPerf - lastSpawnTime.current;
          const starsToSpawn = Math.floor(spawnRate * (deltaTime / 1e3));
          for (let i = 0; i < starsToSpawn; i++) {
            if (stars.current.length < numStars) {
              stars.current.push(createStar(canvasRef.current.width, canvasRef.current.height));
            }
          }
          if (starsToSpawn > 0) {
            lastSpawnTime.current = nowPerf;
          }
        }
      }
    }
    function animate() {
      updateStars();
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    }
    stars.current = [];
    spawnInitialBatch();
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      style: {
        display: "block",
        position: "absolute",
        top: "265px",
        left: "calc(49% - 600px)",
        // Ajusta según tu layout
        width: "1200px",
        zIndex: 9999
      }
    }
  );
}
function OscillatingCircles() {
  const canvasRef = useRef(null);
  const circlesDataRef = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    const centerX = width / 2;
    const centerY = height / 2;
    const rangeX = 70;
    const rangeY = 70;
    function initCircles() {
      const circles = [];
      const totalCircles = 3;
      for (let i = 0; i < totalCircles; i++) {
        const x = centerX + (Math.random() - 1.5) * (rangeX * 12);
        const y = centerY + (Math.random() - 1.5) * (rangeY * 12);
        const speedX = (Math.random() - 22e-9) * 0.2;
        const speedY = (Math.random() - 21e-9) * 0.2;
        const radius = 220 + Math.random() * 40;
        const color = `rgba(
          255,
          255,
          255, 
          0.3
        )`;
        circles.push({ x, y, speedX, speedY, radius, color });
      }
      circlesDataRef.current = circles;
    }
    initCircles();
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      circlesDataRef.current.forEach((circle) => {
        circle.x += circle.speedX;
        circle.y += circle.speedY;
        if (circle.x > centerX + rangeX) {
          circle.x = centerX + rangeX;
          circle.speedX *= -1;
        } else if (circle.x < centerX - rangeX) {
          circle.x = centerX - rangeX;
          circle.speedX *= -1;
        }
        if (circle.y > centerY + rangeY) {
          circle.y = centerY + rangeY;
          circle.speedY *= -1;
        } else if (circle.y < centerY - rangeY) {
          circle.y = centerY - rangeY;
          circle.speedY *= -1;
        }
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref: canvasRef,
      width: 1200,
      height: 1500,
      style: { background: "#1a1a1d" }
    }
  );
}
function CornedEarth() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "framer-qL3Nr transform scale-[1.065]", children: /* @__PURE__ */ jsxs("div", { className: "framer-11253p8", children: [
    /* @__PURE__ */ jsxs("div", { className: "framer-dw9aad", children: [
      /* @__PURE__ */ jsx("div", { className: "framer-hh1l9l-container", "data-framer-appear-id": "hh1l9l", "data-framer-name": "Gradient", style: { opacity: 1, willChange: "transform", transform: "perspective(1200px)" }, children: /* @__PURE__ */ jsx("div", { className: "ssr-variant hidden-19ifihh hidden-1rdjywm", children: /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "100%", overflow: "hidden", transform: "translateZ(0)", borderRadius: 0, position: "relative" }, children: /* @__PURE__ */ jsx("div", { id: "Gradients", children: /* @__PURE__ */ jsx("div", { className: "top-[-40px] flex justify-center relative", children: /* @__PURE__ */ jsx(OscillatingCircles, {}) }) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "framer-xs0sb5", "data-framer-name": "Blur" }),
      /* @__PURE__ */ jsx("div", { className: "framer-12gsl6o-container", "data-framer-appear-id": "12gsl6o", style: { opacity: 1, willChange: "transform", transform: "perspective(1200px)" }, children: /* @__PURE__ */ jsx("div", { className: "ssr-variant hidden-19ifihh hidden-1rdjywm", children: /* @__PURE__ */ jsx("div", { style: { width: "100%", height: "100%", overflow: "hidden", backgroundColor: "rgba(0, 0, 0, 0)", transform: "translateZ(0)", borderRadius: 0, position: "relative" }, children: /* @__PURE__ */ jsx("div", { id: "Desktop" }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "framer-1az1164", "data-framer-name": "Linear" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "framer-1liu9c4", "data-framer-appear-id": "1liu9c4", "data-framer-name": "Radial", style: { opacity: 1, willChange: "transform", transform: "perspective(1200px)" } }),
    /* @__PURE__ */ jsx("div", { className: "framer-9dhxaz", "data-framer-name": "Elipse" }),
    /* @__PURE__ */ jsx("div", { className: "framer-ct3gpt", "data-framer-name": "Base" }),
    /* @__PURE__ */ jsxs("div", { className: "framer-1f3m948", "data-framer-name": "Fade", children: [
      /* @__PURE__ */ jsx("div", { className: "framer-xfsdgu", "data-framer-name": "Left" }),
      /* @__PURE__ */ jsx("div", { className: "framer-17qwwh1", "data-framer-name": "Right" })
    ] })
  ] }) }) }) });
}
function OpenWork({ onClick }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "framer-ibpz4q-container",
      "data-framer-appear-id": "ibpz4q",
      style: {
        opacity: "1",
        transform: "perspective(1200px)"
      },
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          className: "framer-6816R framer-1iqbyp5 framer-v-1iqbyp5 framer-4r3h2s",
          "data-border": "true",
          "data-framer-name": "Main",
          onClick,
          style: {
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
            width: "100%"
          },
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "framer-jbcjxm",
                "data-framer-name": "Content",
                style: {
                  backgroundColor: "#272727",
                  borderRadius: "11px",
                  boxShadow: "rgba(71, 176, 214, 0) 0px 0px 10px 2px inset",
                  opacity: "1"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "framer-4ew8cv",
                      "data-framer-name": "Dot",
                      style: {
                        backgroundColor: "rgba(55, 212, 133, 0.8)",
                        borderRadius: "5px",
                        opacity: "1"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "framer-gwfg9e",
                      "data-framer-component-type": "RichTextContainer",
                      style: {
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
                        transform: "none"
                      },
                      children: /* @__PURE__ */ jsx(
                        "p",
                        {
                          className: "framer-text",
                          style: {
                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==",
                            "--framer-font-family": "'General Sans', 'General Sans Placeholder', sans-serif",
                            "--framer-font-weight": "500",
                            "--framer-letter-spacing": "0.2px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(155, 199, 177))"
                          },
                          children: "Open to Work"
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "framer-1pj0lro",
                "data-framer-name": "BorderGlow",
                style: {
                  borderRadius: "12px",
                  opacity: "1"
                },
                children: /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "framer-1bq67wi",
                    style: {
                      background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgba(217, 217, 217, 0) 176.757deg, rgb(49, 177, 112) 223.784deg, rgba(194, 194, 194, 0) 274.054deg, rgba(171, 171, 171, 0) 360deg)",
                      borderRadius: "100px",
                      filter: "blur(10px)",
                      opacity: "0.95",
                      transform: "translateX(0px) translateY(0px) scale(1) rotate(46.2423deg) rotateX(0deg) rotateY(0deg) translateZ(0px)"
                    },
                    animate: {
                      rotate: 360,
                      // Rota 360 grados
                      translateX: 0,
                      translateY: 0,
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0,
                      translateZ: 0
                    },
                    transition: {
                      duration: 5,
                      // Duración de 2 segundos
                      repeat: Infinity,
                      // Repetir infinitamente
                      ease: "linear"
                      // Movimiento suave
                    }
                  }
                )
              }
            )
          ]
        }
      )
    }
  ) });
}
const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5
    }
  }
};
const ShinyButton = React__default.forwardRef(({ children, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      ref,
      className: cn(
        "relative cursor-poiner rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
        className
      ),
      ...animationProps,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "relative block size-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]",
            style: {
              maskImage: "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))"
            },
            children
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
              maskComposite: "exclude"
            },
            className: "absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
          }
        )
      ]
    }
  );
});
ShinyButton.displayName = "ShinyButton";
function FloatingPaths({ position }) {
  const paths = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03
  }));
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "w-full h-full",
      viewBox: "0 0 696 316",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Background Paths" }),
        paths.map((path) => /* @__PURE__ */ jsx(
          motion.path,
          {
            d: path.d,
            stroke: "#9b9b9b26",
            strokeWidth: path.width,
            initial: { pathLength: 0.3, opacity: 0.6 },
            animate: {
              pathLength: 1,
              // Se utilizan más puntos en la opacidad para suavizar la transición
              opacity: [0.3, 0.45, 0.6, 0.45, 0.3]
            },
            transition: {
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }
          },
          path.id
        ))
      ]
    }
  ) });
}
function BackgroundPaths() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed inset-0 z-[9000] motion-bg bg-black/10 bg-opacity-50 backdrop-blur-lg flex items-center justify-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-[#1F1F20] rounded-2xl p-6 shadow-xl w-2/4 relative backdrop-blur-md overflow-hidden ",
            initial: { opacity: 0, y: 20, filter: "blur(10px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 20, filter: "blur(10px)" },
            transition: { type: "spring", stiffness: 300, damping: 20 },
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-800",
                  onClick: () => setIsOpen(false),
                  children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17", stroke: "#595959cc", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Hablemos." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Escribe tu nombre completo", className: " px-4 py-[10px] rounded-md bg-[#2b2b2bcc] outline-0", style: {
                  border: "1px solid rgb(53 53 53);"
                } }),
                /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Correo electrónico", className: " px-3 py-[10px] rounded-md bg-[#2b2b2bcc] outline-0 ", style: {
                  border: "1px solid rgb(53 53 53);"
                } }),
                /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx("textarea", { className: "px-4 py-[10px] h-[100px] rounded-md bg-[#2b2b2bcc] outline-0 w-full", placeholder: "Deja tu mensaje aquí" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-end  col-span-2", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "cursor-pointer shadow-ln-xs px-12 py-3 overflow-hidden  rounded-full uppercase open-sans font-bold text-[14px] relative",
                      children: "Cerrar"
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      className: "bg-ln-gray-header cursor-pointer  shadow-ln-xs px-12 py-3 overflow-hidden  rounded-full uppercase open-sans font-bold text-[14px] relative",
                      children: [
                        "Enviar correo",
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "absolute z-[9999] h-[1.5px] w-[50%] left-2/4 transform -translate-x-2/4 inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0",
                            style: { top: "auto", bottom: "0px" },
                            initial: { opacity: 0, width: "0%" },
                            animate: { opacity: 1, width: "50%" },
                            exit: { opacity: 0, width: "0%" },
                            transition: { duration: 1.2, ease: "easeInOut" }
                          }
                        )
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full -z-10", children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  "aria-hidden": "true",
                  className: "pointer-events-none absolute inset-0 h-full w-full svg-stroke-color-doit [mask-image:radial-gradient(235px_circle_at_center,white,transparent)] top-[-104px]",
                  children: [
                    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
                      "pattern",
                      {
                        id: ":r1:",
                        width: 16,
                        height: 16,
                        patternUnits: "userSpaceOnUse",
                        patternContentUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        children: /* @__PURE__ */ jsx("circle", { id: "pattern-circle", cx: 1, cy: 1, r: 1 })
                      }
                    ) }),
                    /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#:r1:)" })
                  ]
                }
              ) })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(DashedLineContainer, { children: /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen flex  flex-col  w-full flex items-center justify-center overflow-hidden ", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(FloatingPaths, { position: 1 }),
        /* @__PURE__ */ jsx(FloatingPaths, { position: -1 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 md:px-6 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          onClick: () => setIsOpen(true),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 2 },
          className: "max-w-4xl mx-auto cursor-pointer",
          children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter",
                style: {
                  fontSize: "14px"
                },
                children: /* @__PURE__ */ jsx(ShinyButton, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-4", children: [
                  /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: [
                    /* @__PURE__ */ jsx("path", { d: "M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z", stroke: "#3b3b3b", "stroke-width": "1.5", "stroke-miterlimit": "10", "stroke-linecap": "round", strokeLinejoin: "round" }),
                    /* @__PURE__ */ jsx("path", { d: "M15.996 11h.01M11.995 11h.01M7.995 11h.008", stroke: "#3b3b3b", "stroke-width": "2", "stroke-linecap": "round", strokeLinejoin: "round" })
                  ] }),
                  /* @__PURE__ */ jsx("a", { href: "mailto:joheandroid@gmail.com", className: "text-[#9b9b9b] font-bold", children: "Get in touch" }),
                  /* @__PURE__ */ jsx("svg", { className: "rotate transform -rotate-90", xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { stroke: "#3b3b3b", "stroke-linecap": "round", strokeLinejoin: "round", "stroke-miterlimit": "10", "stroke-width": "1.5", d: "M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95" }) })
                ] }) })
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "framer-azddm3",
                "data-framer-name": "Text",
                style: { opacity: 1 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "framer-t2pmrq-container", style: { opacity: 1 }, children: /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: "framer-JUd2S framer-bn8buf framer-v-bn8buf framer-1ydy58o",
                      "data-framer-name": "Variant 1",
                      "data-highlight": "true",
                      style: {
                        "--rsevh9": "0px 2px 5px 0px rgba(0, 0, 0, 0.25)",
                        height: "100%",
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "var(--rsevh9)",
                        opacity: 1
                      },
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "framer-mbdh49",
                            "data-framer-name": "App Icon",
                            style: { borderRadius: "20px", opacity: 1 },
                            children: /* @__PURE__ */ jsx(
                              "div",
                              {
                                "data-framer-background-image-wrapper": "true",
                                style: { position: "absolute", borderRadius: "inherit", inset: "0px" }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "framer-1kkk9lx",
                            "data-framer-name": "Inner Shadow",
                            style: {
                              "--7ppjz2": "inset 0px 2px 4px 0px rgba(255, 255, 255, 0.4)",
                              borderRadius: "20px",
                              boxShadow: "var(--7ppjz2)",
                              opacity: 1
                            }
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "framer-1xbvzw3",
                      "data-framer-component-type": "RichTextContainer",
                      style: {
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: 0,
                        "--extracted-gdpscs": "rgb(255, 255, 255)",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: 1
                      },
                      children: /* @__PURE__ */ jsx(
                        "h1",
                        {
                          className: "framer-text framer-styles-preset-1px6bkr",
                          "data-styles-preset": "Il2Yri1Ja",
                          style: {
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-gdpscs, rgb(255, 255, 255))"
                          },
                          children: /* @__PURE__ */ jsx(
                            "span",
                            {
                              "data-text-fill": "true",
                              className: "framer-text text-looking",
                              style: {
                                backgroundImage: "radial-gradient(60% 200% at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)"
                              },
                              children: "Looking for a designer & developer who can make your ideas come to life"
                            }
                          )
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "framer-83hpwa",
                      "data-framer-component-type": "RichTextContainer",
                      style: {
                        outline: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        flexShrink: 0,
                        "--extracted-1eung3n": "var(--token-8e61a935-bee1-4d42-ba1c-0c51ee3870e4, rgba(255, 255, 255, 0.7))",
                        "--framer-paragraph-spacing": "0px",
                        transform: "none",
                        opacity: 1
                      },
                      children: /* @__PURE__ */ jsx(
                        "h4",
                        {
                          className: "framer-text framer-styles-preset-10ea4s6",
                          "data-styles-preset": "eM7OTWacr",
                          style: {
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "var(--extracted-1eung3n, var(--token-8e61a935-bee1-4d42-ba1c-0c51ee3870e4, rgba(255, 255, 255, 0.7)))"
                          }
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-5 pt-10", children: /* @__PURE__ */ jsx(OpenWork, { onClick: () => console.log(0) }) }),
            /* @__PURE__ */ jsx("div", { className: "pt-5", children: /* @__PURE__ */ jsx(Rrss, {}) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "inline-block group relative bg-gradient-to-b from-black/10 to-white/10 \n                    dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg \n                    overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              }
            )
          ]
        }
      ) })
    ] }) })
  ] });
}
function Separator() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "container mt-16 pointer-events-none !pl-0 !pr-0 -z-10  select-none mac:block", children: /* @__PURE__ */ jsx("div", { className: "border-t border-color w-full" }) }) });
}
function buttonSection(props) {
  return /* @__PURE__ */ jsx("div", { className: "framer-3R4K1 italic text-framer mb-0 text-gray-500 text-title-h3 text-3xl font-bold", "data-border": "true", children: props.title });
}
const bookforce = "/assets/bookforce-C5rTwJUu.webp";
const crypto = "/assets/crypto-BI2GNs-0.webp";
const mill = "/assets/mill-BGjeh5GI.webp";
const llantas = "/assets/llantas-D2uYB-db.webp";
const adagio = "/assets/adagio-Cx6QiWxU.webp";
const productApp = "/assets/productApp-CiiFtFD2.webp";
const Motoo = "/assets/motoo-DJ4BKuro.webp";
const piazza = "/assets/piazza-FCe-Uq_H.webp";
const babarrun = "/assets/babarrun-DSGp46A7.webp";
const mascarillas = "/assets/mascarillas-DT9rr-FX.webp";
const virus = "/assets/virus-CXsy6Xr_.webp";
const pixie = "/assets/pixie-CsVsEo8O.webp";
const uoh = "/assets/uoh-DhSZzp8u.webp";
const rest911 = "/assets/rest911-CA7LqUJb.webp";
const davivivienda = "/assets/davivivienda-CPZEaZYJ.webp";
const savefood = "/assets/savefood-DQFqLqhv.webp";
const blackcoffee = "/assets/blackcoffe-C29P0w8E.webp";
const iconEntrekids = "/assets/entrekids-gFAfx1jM.ico";
const iconBookforce = "/assets/bookforce-Dn9gDQjV.png";
const iconCrytovision = "/assets/crypto-CzXpyjDi.ico";
const iconMill = "/assets/mill-CSrvNgqw.png";
const iconApp = "/assets/app-C-sGGCGF.png";
const iconMotoo = "/assets/hotel-D-GizqK_.svg";
const iconLlantas = "/assets/llanta-svHr1kSJ.png";
const iconPiazza = "/assets/piazza-P5nN8CjK.png";
const iconBabarrun = "/assets/babarrun-Dhmu2EIA.png";
const iconMascarillas = "/assets/mascarillas-n1v_FWkg.png";
const iconPixie = "/assets/pixie-BJuZOWg3.png";
const iconUoh = "data:image/png;base64,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";
const IconRest = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAABQCAMAAABMHUtqAAAAsVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3mHKcAAAAOnRSTlMAMuBdCpSB9Q39A4V3JxUG3dMe+a0ISy3uvSJlWD058VVQGnxgRsnDoIpuEdemmkHONOjkuLOQaXK/rfYVKQAAB61JREFUeNrs2Ml24jAQBdCHabBs8IQBMzQQIIxhHsP7/w9rG0QwDel1Fyd3JWv3zlGVSsaPHz/+N+vlsvo7lm3jpbgmtSNeSpdax8VLyVGr46X8Mqh9IsVrVI/53GJROK4h05KalYHWG+T3M/Nrfycp2iD3gYsDtZmHmN3u12u815GTrLFl0ELCDqjlAGT6K16F29XodBpuSB4gRClJYxUUgCi85sg4xaHFM8svFweOQsL97bMMGbwhz4I1MKVmnky9GE2dClLazEEEb06tU6zseKezf3cBF2nepgoRcrwJTN5Yu6YLtA6Br5DS21cgQZHPGRMHWE9mjLWQUh1AAHvKZ6x6F3AKK15McKNkHER7zEedeQQM9rpBbsvvPdw4CjJkt7xnFFz0+oH+WHRdpCkpuYDemCn+0cN63GHCnHcfYtgQ5Lih5n9WsJxbjIVB34F0zpYJf+qhe+KZlFv4n9q7kGRtUkFrxyuzIOO6+l7vkMSyxiUs90xbtSDZm8HYKYPGnH8JCx6kcseMGU2ofo2PRnKeXvfefJLWRKFp8CkzL6q/ayrPWDBAdOK3Rg2I0yYZTjy7YCaLzTfBBP6FU1v6LbSCSzWN+cxKzgiVsigr79zs/aZtG9RmFr8YAg9i7APrgKR1cIEltTCqbqnVIshUNC/dIzahNgRKZZ1RxtvrQVQnGeYVYl5ALY/Ye42klYVI1U1qbsrwaomEsyP7ECl/ri6Fiz4147pTlDnfqznJWhVXI2pziNZLgowiXJU61ITWlRbNSC4UvmSp1QQOGn/aN7ctNWEoDP94iIACalEcQMTjKKijVkeb93+wSmAMiaDtRbuWXf3mZtyEmGQfCZHjJMm4hRwbmvIy+/KFBAdKR55gmRrN8PC6dL9T2hBTr9skxJslvLAlJi+NRi9aUjyitqP020tsv/8e+iZ1JEspwrXAUQ1FwtGZ3JXvArhIwECC4U9X9SJWZBqaSJivcsIWK34i3u6TeC6e0EzjoXmiRTTWZ2T07co3KtHRoXqnSkMTxZ8IB7SQI4DwrUEfcGDReSEKbRWKKBmFeEg/i+hVWoaPhMmGFrDER6dAPEabFkMQb+gzPMAc3XXZkiTrZ2/R6UIFsKRlHHFlXzjShVvlStRuetuoRirWqMRbN36nTzmYGMuyGd4kyXc8IGk9ctNNgYzGXLlSrfDBJPO6WZb9oXBiIzd0bes4qRhQFQahX5xSQQ1HmmdA5h/D61+4k9QzCQKSl2gKnCD4ISwSHuCxtbgy5FoAY3sTREC3clumGvJMhe3UTwsiWyqn+VB0UQMZruCTUeb8nHYvEa3zohbKMa7dbaURkh4hpGk3bmttATb9og6PcByfCuwC5LHWtzkbSDkKKzHEjYWoMUAXlLhkq6/ldRigDDbgwwQJ3IDDk+hhKrDnHY4FF/6wOlIQnSGHo4mneoD4UOj+zBU4o2RMbkOKJwARXExFKXPt66HEvFlC5SyGXh3AJ/9KZSD2bezkOBkXvab/RIrxrWRiH3n5KZEwYxA1LriYjVL099vlOe80yK3Uio2yx0373WlzOkr6fCqyYCYgmcEcKV1BDVqkI4PceU9d6BSQU0CEUqrJzhogOirBWOPzYIM0uKCOHscCwxtJSdsEJDMYmHwtxbZvGULsCLIzXJxmlnI52h4lsFuX2b+LvEtGOWMxAez55wsKULK7ZbubF0TmkD6nUks6FYyW7wdyr31Uc4wM2fTblhho32JBY1sUsmoIasC9GdwgGi1E9p4LTRA0Lmi7jlKO/KonhlUsczOrwcod5du2OAGcFuMSLeTQLA5kCE6w3Q1GDYlvd95zlHKxHCZDlOFo/MzoUkqk+aNhGws+LcR3K5QjOKbo64MYAmZXZiEWGYAq5IVptvqcRvdRVf+OlF5FTqRxLopvdTSL7KehkqI6b1XjselXt03UQd6SLV4J5TVuC6uHUhY8YhrtSkrbR4a7qGSwjfxg2alItOewJcnuSPomd7wv+SnGE8K72DO9y8U9oQxfoRhmsQ0XKXoto4cESSZ9zsnvJAK9L7n+fO9PDvZiKb/JXCdHH2X4iTr/NpNp857VSYgKW9ZQyI2zojBZxioXMc/TKjmzzDOdVQ3AmpFZ1QLgT8/n7Ek9YkqYtUikAPi4NnT4ikeklbRXg273ogJWdUrODrvNQ4JB+kiI6FOWVkk9Zf9iPWXzn6q4tLNhCxXQxZR0gbhNbUcHPNo0JxY7kvjG6hzdHY0MlTfMUKd0OgF0+wQvcXTd0A6uCtSy29Cks+xLn9CegbGV9h/k8jlCKR2eCjx63jKjndGl39eBSXXAXPiTRoELQFnO9guWCRy6AWu4ZQ35KhkArHYd9V18O/6831SVHbttSb2hCdQG9BGjHxcVDKsiG6f0SK2glDalY6Q4YYwwmVivH46HAIzxuJ/owwz9kBmeP3Zif5xM2WdmUWMNOfPkGmAMh0rMat3QzW4z/aTjybWjCWD51XLGQ149W2H+CjMNV2iro5T1q79GeVBQEfyLrFKnfOnzooXMC2JLrBg1vDrWgtKGD47Zv8yM11cYEIzYLmEMQDf3F/t0ef0TvynDNStO1rtOZdDehC95RKoYtWp3DoNDx24N/6FZ/ec///kz/ARSQelYhxYibgAAAABJRU5ErkJggg==";
const iconDavivivienda = "data:image/png;base64,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";
const iconSavefood = "/assets/savefood-DsIeCxXo.png";
const iconBlackcoffee = "/assets/black-Bzyu5A8m.png";
const test = "/assets/test-BDFWhwUF.webp";
function Work() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const [itemsToShow, setItemsToShow] = useState(4);
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
      repository: "https://josbert2.github.io/teas/"
      // https://github.com/josbert2/landings
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
  ];
  const visibleProjects = dataProject.slice(0, itemsToShow);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { ref, className: "container md:px-0 mt-20 pb-20 relative  sm:mt-20", children: /* @__PURE__ */ jsxs("div", { className: "px-10 md:px-20", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "btn-title relative w-full mb-16 flex justify-start container-btn",
        initial: { opacity: 0, x: -20 },
        animate: inView ? { opacity: 1, x: 0 } : {},
        transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] },
        children: [
          /* @__PURE__ */ jsx("div", { className: "framer-1u3alye" }),
          /* @__PURE__ */ jsx(buttonSection, { title: "Works" }),
          /* @__PURE__ */ jsx("div", { className: "framer-4ek1z5" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "framer-1lrue9j", children: visibleProjects.map((project, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "framer-1hhlnuq-container",
        style: {
          opacity: "1",
          transform: "perspective(1200px)"
        },
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "framer-rtsKZ framer-6pxgjl framer-v-6pxgjl framer-d4tf0f",
            onMouseEnter: () => setHoveredIndex(index),
            onMouseLeave: () => setHoveredIndex(null),
            href: project.url,
            style: {
              backgroundColor: "rgba(21, 22, 23, 0)",
              opacity: "1",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "framer-1edw8qi-container",
                  style: {
                    opacity: "0"
                  },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        display: "contents"
                      },
                      children: /* @__PURE__ */ jsx(
                        "svg",
                        {
                          color: "rgba(0, 0, 0, 0.19)",
                          focusable: "false",
                          style: {
                            color: "rgba(0, 0, 0, 0.19)",
                            display: "inline-block",
                            fill: "rgba(0, 0, 0, 0.19)",
                            flexShrink: "0",
                            height: "100%",
                            userSelect: "none",
                            width: "100%"
                          },
                          viewBox: "0 0 256 256",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: /* @__PURE__ */ jsx("g", { color: "rgba(0, 0, 0, 0.19)", children: /* @__PURE__ */ jsx("path", { d: "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" }) })
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "framer-2hmlbu",
                  "data-framer-name": "BlurImage",
                  animate: { opacity: hoveredIndex === index ? 1 : 0 },
                  initial: { opacity: 0 },
                  whileHover: { opacity: 1 },
                  style: {
                    borderRadius: "18px",
                    filter: "brightness(2) saturate(2) blur(80px)",
                    opacity: "0"
                  },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      "data-framer-background-image-wrapper": "true",
                      style: {
                        borderRadius: "inherit",
                        bottom: "0",
                        left: "0",
                        position: "absolute",
                        right: "0",
                        top: "0"
                      },
                      children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: project.image,
                          alt: "",
                          sizes: "calc(min(473px, 100vw) - 2px)",
                          style: {
                            borderRadius: "inherit",
                            display: "block",
                            height: "100%",
                            imageRendering: "auto",
                            objectFit: "cover",
                            objectPosition: "center",
                            width: "100%"
                          }
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "framer-11vnvy3",
                  "data-border": "true",
                  "data-framer-name": "GlassCard",
                  style: {
                    "--border-bottom-width": "1px",
                    "--border-color": "rgba(255, 255, 255, 0.06)",
                    "--border-left-width": "1px",
                    "--border-right-width": "1px",
                    "--border-style": "solid",
                    "--border-top-width": "1px",
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderRadius: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.114) 0px 0.602187px 1.08394px -0.416667px, rgba(0, 0, 0, 0.15) 0px 2.28853px 4.11936px -0.833333px, rgba(0, 0, 0, 0.306) 0px 10px 18px -1.25px, rgba(0, 0, 0, 0.58) 0px -1px 1px 0px inset",
                    opacity: "1"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "framer-1p6numl",
                        "data-framer-name": "BadgeWrapper",
                        style: {
                          opacity: "1"
                        },
                        children: /* @__PURE__ */ jsxs(
                          "div",
                          {
                            className: "framer-1d5va92",
                            "data-framer-name": "Badge",
                            style: {
                              backgroundColor: "rgba(255, 255, 255, 0.05)",
                              borderRadius: "7px",
                              opacity: "1"
                            },
                            children: [
                              /* @__PURE__ */ jsx(
                                "div",
                                {
                                  className: "framer-1bn53k8",
                                  "data-framer-name": "Fill",
                                  style: {
                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                    borderRadius: "6px",
                                    opacity: "1"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                "div",
                                {
                                  className: "framer-1gqbim0",
                                  "data-framer-component-type": "RichTextContainer",
                                  style: {
                                    "--extracted-r6o4lv": "rgb(173, 173, 173)",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexShrink: "0",
                                    justifyContent: "flex-start",
                                    opacity: "1",
                                    outline: "none",
                                    transform: "none"
                                  },
                                  children: /* @__PURE__ */ jsx(
                                    "p",
                                    {
                                      className: "framer-text",
                                      style: {
                                        "--font-selector": "RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==",
                                        "--framer-font-family": "'General Sans', 'General Sans Placeholder', sans-serif",
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "500",
                                        "--framer-letter-spacing": "-0.01em",
                                        "--framer-text-color": "var(--extracted-r6o4lv, rgb(173, 173, 173))"
                                      },
                                      children: "iOS App"
                                    }
                                  )
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "framer-1w58y41",
                        "data-framer-name": "Content",
                        style: {
                          opacity: "1"
                        },
                        children: [
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "framer-1hrzvqf",
                              "data-framer-name": "Icon",
                              style: {
                                borderRadius: "14px",
                                boxShadow: "rgba(0, 0, 0, 0.08) 0px 0.482901px 1.06238px -0.5px, rgba(0, 0, 0, 0.23) 0px 4px 8.8px -1px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px",
                                filter: "grayscale(1)",
                                opacity: "1"
                              },
                              children: /* @__PURE__ */ jsx(
                                "div",
                                {
                                  "data-framer-background-image-wrapper": "true",
                                  style: {
                                    borderRadius: "inherit",
                                    bottom: "0",
                                    left: "0",
                                    position: "absolute",
                                    right: "0",
                                    top: "0"
                                  },
                                  children: /* @__PURE__ */ jsx(
                                    "img",
                                    {
                                      src: project.icon,
                                      alt: "",
                                      sizes: "44px",
                                      style: {
                                        borderRadius: "inherit",
                                        display: "block",
                                        height: "100%",
                                        imageRendering: "auto",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        width: "100%"
                                      }
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "framer-s6ljvk",
                              "data-framer-component-type": "RichTextContainer",
                              style: {
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
                                transform: "none"
                              },
                              children: /* @__PURE__ */ jsx(
                                "p",
                                {
                                  className: "framer-text open-sans",
                                  style: {
                                    "--framer-font-size": "32px",
                                    "--framer-font-weight": "600",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                  },
                                  children: /* @__PURE__ */ jsx(
                                    "span",
                                    {
                                      className: "framer-text",
                                      "data-text-fill": "true",
                                      style: {
                                        backgroundImage: "linear-gradient(0deg, rgb(199, 199, 199) 0%, rgb(250, 250, 250) 100%)"
                                      },
                                      children: project.title
                                    }
                                  )
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "framer-1g9epbg",
                              "data-framer-name": "Byline",
                              style: {
                                opacity: "1"
                              },
                              children: /* @__PURE__ */ jsx(
                                "div",
                                {
                                  className: "framer-1w079fg",
                                  "data-framer-component-type": "RichTextContainer",
                                  style: {
                                    "--extracted-r6o4lv": "var(--token-d9114fe5-ccf8-4f28-9a11-6445c9c3d500, rgba(255, 255, 255, 0.7))",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexShrink: "0",
                                    justifyContent: "flex-start",
                                    opacity: "1",
                                    outline: "none",
                                    transform: "none"
                                  },
                                  children: /* @__PURE__ */ jsx(
                                    "p",
                                    {
                                      className: "framer-text open-sans",
                                      style: {
                                        "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=",
                                        "--framer-font-family": "'General Sans', 'General Sans Placeholder', sans-serif",
                                        "--framer-font-size": "14px",
                                        "--framer-line-height": "1.5em",
                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d9114fe5-ccf8-4f28-9a11-6445c9c3d500, rgba(255, 255, 255, 0.7)))"
                                      },
                                      children: project.description
                                    }
                                  )
                                }
                              )
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "framer-ejjo2t",
                  "data-framer-name": "ImageWrap",
                  style: {
                    borderRadius: "18px",
                    opacity: "1"
                  },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "framer-q1jd2k",
                      "data-framer-name": "Image",
                      style: {
                        borderRadius: "18px",
                        opacity: "1",
                        transform: "perspective(1200px)"
                      },
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          "data-framer-background-image-wrapper": "true",
                          style: {
                            borderRadius: "inherit",
                            bottom: "0",
                            left: "0",
                            position: "absolute",
                            right: "0",
                            top: "0"
                          },
                          children: /* @__PURE__ */ jsx(
                            "img",
                            {
                              src: project.image,
                              alt: "he",
                              loading: "lazy",
                              placeholder: "blur",
                              blurDataURL: project.image.src,
                              style: {
                                borderRadius: "inherit",
                                display: "block",
                                height: "100%",
                                imageRendering: "auto",
                                objectFit: "cover",
                                objectPosition: "center",
                                width: "100%"
                              }
                            }
                          )
                        }
                      )
                    }
                  )
                }
              )
            ]
          }
        )
      },
      index
    )) }),
    itemsToShow < dataProject.length && /* @__PURE__ */ jsx("div", { className: "text-center justify-center mt-8", children: /* @__PURE__ */ jsxs(
      "button",
      {
        className: "bg-ln-gray-header uppercase shadow-ln-xs px-12 py-3 overflow-hidden  rounded-full uppercase open-sans font-bold text-[14px] relative",
        onClick: handleLoadMore,
        children: [
          "Cargar más",
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute z-[9999] h-[1.5px] w-[50%] left-2/4 transform -translate-x-2/4 inset-x-1 top-[.3px] -bottom-px bg-gradient-to-r from-[#EDD4BA]/0 via-[#EDD4BA]/40 to-[#EDD4BA]/0",
              style: { top: "auto", bottom: "0px" },
              initial: { opacity: 0, width: "0%" },
              animate: { opacity: 1, width: "50%" },
              exit: { opacity: 0, width: "0%" },
              transition: { duration: 3.2, ease: "easeInOut" }
            }
          )
        ]
      }
    ) })
  ] }) }) });
}
function App() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "relative isolate flex min-h-screen flex-col bg-ln-gray-25 ", children: [
    /* @__PURE__ */ jsx("div", { className: "pt-10 absolute top-0 left-0 h-screen w-full", children: /* @__PURE__ */ jsx(AsteroidMotion, {}) }),
    /* @__PURE__ */ jsx(HeaderUser, {}),
    /* @__PURE__ */ jsx(LineAbsolute, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx("div", { className: " container pointer-events-none mt-[200px] md:mt-[225px] ", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
      !useIsMobile() ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(StarField, {}) }) : /* @__PURE__ */ jsx(Fragment, {}),
      /* @__PURE__ */ jsx(CornedEarth, {})
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container pointer-events-none !pl-0 !pr-0 -z-10  select-none mac:block", children: /* @__PURE__ */ jsx("div", { className: "border-t border-color w-full" }) }),
    /* @__PURE__ */ jsx(UserTravels, {}),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsx(AboutMe, {}),
    /* @__PURE__ */ jsx(Work, {}),
    /* @__PURE__ */ jsx("div", { className: "-z-10 container pointer-events-none mt-[-71px] mb-[225px]  rotate-180 transform invert-orbit", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(CornedEarth, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "container !px-0 mx-0 mac:block", children: /* @__PURE__ */ jsx(BackgroundPaths, {}) })
  ] }) });
}
function render(_url) {
  const html = renderToString(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
