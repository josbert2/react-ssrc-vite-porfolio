import React from 'react'
import Rrss from './rrss'




const presentacionTwo = () => {
    return (
        <>
            <div
                className="framer-1xpccc6"
                data-framer-appear-id="1xpccc6"
                data-framer-name="Text"
             
                style={{
                    opacity: "1",
                    transform: "perspective(1200px)",
                }}>
                <div
                    className="framer-9uyh1w"
                    data-framer-component-type="RichTextContainer"
                    data-framer-name="Bio"
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: "0",
                    justifyContent: "flex-start",
                    outline: "none",
                    transform: "none",
                    }}>
                    <p
                    className="framer-text"
                    style={{
                        "--font-selector": "RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==",
                        "--framer-font-family":
                        "'General Sans', 'General Sans Placeholder', sans-serif",
                        "--framer-font-size": "44px",
                        "--framer-font-weight": "500",
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.4em",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": "rgba(209, 213, 230, 0.87)",
                    }}>
                    <span
                        className="framer-text"
                        data-text-fill="true"
                        style={{
               
                        backgroundImage:
                            "linear-gradient(0deg, rgba(190, 193, 207, 0.64) 0%, rgba(213, 216, 234, 0.886) 88.2362%, rgb(223, 226, 245) 100%)",
                        }}>
                       <span className="font-xl" style={{fontFamily: 'Open Sans'}}> Hi, I&apos;m Josbert 💫 I am</span>
                        <span
                        className="framer-text mr-1"
                        style={{
                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=",
                            "--framer-font-weight": "400",
                        }}>
                           
                        </span>
                        <span
                        className="framer-text"
                        style={{
                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXNlbWlib2xk",
                            "--framer-font-weight": "900",
                            "--framer-font-size": "54px"
                        }}>
                         <br />  Frontend Enginer
                        </span>
                        
                        <span
                        className="framer-text mr-2"
                        style={{
                            "--font-selector": "RlM7R2VuZXJhbCBTYW5zLXJlZ3VsYXI=",
                            "--framer-font-weight": "400",
                            "--framer-font-family":
                            "'DM Serif Display', 'DM Serif Display Placeholder', serif",
                        }}>
                        <br />&
                        </span>
                        <span
                        className="framer-text"
                        style={{
                            "--font-selector": "R0Y7RE0gU2VyaWYgRGlzcGxheS1pdGFsaWM=",
                            "--framer-font-family":
                            "'DM Serif Display', 'DM Serif Display Placeholder', serif",
                            "--framer-font-style": "italic",
                            "--framer-font-weight": "400",
                        }}>
                        Creative developer
                        </span>
                        .
                    </span>
                    </p>
                </div>
            </div>
            <Rrss />

        </>
    )   
}


export default function presentacion() {
  return (
    <div>
        {presentacionTwo()}
    </div>
  )
}
