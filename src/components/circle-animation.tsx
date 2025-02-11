'use client'
import React, { useRef, useEffect } from "react";

function OscillatingCircles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesDataRef = useRef<{ x: number; y: number; speedX: number; speedY: number; radius: number; color: string; }[]>([]);

  /*function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  } */
  
 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;

    const centerX = width / 2;
    const centerY = height / 2;

    // Ajusta estos valores para controlar el área de oscilación
    const rangeX = 70; // Distancia máxima del centro en el eje X
    const rangeY = 70; // Distancia máxima del centro en el eje Y

    // Genera datos iniciales de círculos
    function initCircles() {
      const circles = [];
      const totalCircles = 3; // Cambia la cantidad de círculos que quieras

      for (let i = 0; i < totalCircles; i++) {
        // Posición inicial aleatoria cerca del centro
        const x = centerX + (Math.random() - 1.5) * (rangeX * 12);
        const y = centerY + (Math.random() - 1.5) * (rangeY * 12);

        // Velocidad aleatoria entre -2 y 2
        const speedX = (Math.random() - 0.000000022) * 0.2;
        const speedY = (Math.random() - 0.000000021) * 0.2;

        // Radio aleatorio
        const radius = 220 + Math.random() * 40;

        // Color semitransparente
        /*const color = `rgba(
          ${Math.floor(Math.random() * 255)},
          ${Math.floor(Math.random() * 255)},
          255, 
          0.3
        )`; */

        //const color = Array.from({ length: 5 }, () => getRandomColorNearBase()); 
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
        // Actualiza posición
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Rebote en el rango X
        if (circle.x > centerX + rangeX) {
          circle.x = centerX + rangeX;
          circle.speedX *= -1; // Invierte velocidad
        } else if (circle.x < centerX - rangeX) {
          circle.x = centerX - rangeX;
          circle.speedX *= -1;
        }

        // Rebote en el rango Y
        if (circle.y > centerY + rangeY) {
          circle.y = centerY + rangeY;
          circle.speedY *= -1;
        } else if (circle.y < centerY - rangeY) {
          circle.y = centerY - rangeY;
          circle.speedY *= -1;
        }

        // Dibujamos el círculo
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });

      // Solicita el siguiente frame
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1200}   // Ajusta a tus necesidades
      height={1500}  // Ajusta a tus necesidades
      style={{ background: "#1a1a1d" }}
    />
  );
}

export default OscillatingCircles;
