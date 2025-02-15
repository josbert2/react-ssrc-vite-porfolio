'use client'
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

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
]
export default function MarqueeHtml() {
  const marqueeRef = useRef<HTMLUListElement>(null);
  const [oneSetWidth, setOneSetWidth] = useState(0);


  const speed = 15;

  useEffect(() => {
    if (marqueeRef.current) {
      const fullWidth = marqueeRef.current.scrollWidth;
      setOneSetWidth(fullWidth / 2);
    }
  }, []);

 
  const duration = oneSetWidth > 0 ? oneSetWidth / speed : 0;

  return (
    <div className="framer-1augxt8" data-framer-name="IconsTicker" >
      <div className="framer-obe0ej-container">
        <div
          style={{
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
          }}
        >
          <motion.ul
            ref={marqueeRef}
            style={{
              display: "flex",
              gap: "14px",
              position: "absolute",
              left: 0,
              top: 0,
              willChange: "transform"
            }}
            animate={oneSetWidth ? { x: [0, -oneSetWidth] } : {}}
            transition={{
              duration,          // Duración calculada en base a la velocidad
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Duplicamos el array */}
            {[...tools, ...tools].map((item, index) => (
              <li
                key={index}
                aria-hidden="true"
                style={{
                  listStyleType: "none",
                  willChange: "transform"
                }}
              >
                <div
                  aria-label={item.label}
                  className={item.wrapperClass}
                  data-framer-name={item.dataFramerName}
                  style={{ flexShrink: 0, width: 35, height: 35, position: "relative" }}
                >
                  <div
                    data-framer-background-image-wrapper="true"
                    style={{
                      position: "absolute",
                      borderRadius: "inherit",
                      inset: "0px"
                    }}
                  >
                    <img
                      src={item.imgSrc}
                      alt=""
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        objectPosition: "center center",
                        objectFit: "cover",
                        imageRendering: "auto"
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}