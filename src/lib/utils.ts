import { useEffect, useState } from "react"
import { clsx, type ClassValue } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function UseMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar el ancho de la ventana
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el breakpoint según necesidad
    };

    // Detecta si es un dispositivo móvil por userAgent
    const checkUserAgent = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/.test(userAgent);
    };

    checkScreenSize();
    setIsMobile(checkUserAgent());

    // Escuchar cambios de tamaño de la ventana
    window.addEventListener("resize", checkScreenSize);
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
};

