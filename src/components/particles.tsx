'use client';
import React, { useRef, useEffect } from 'react';

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Número máximo de estrellas que quieres en pantalla
  const numStars = 300; // Sube o baja según tu gusto

  // Cuántas estrellas se crean inicialmente al cargar
  const initialBatch = 40; // Arrancar con 50

  // Pausa inicial (ms) - si la quieres en 0, no habrá espera tras el batch
  const initialPause = 0;

  // Tasa de generación continua (estrellas por segundo)
  const spawnRate = 40;

  // Array de estrellas
  const stars = useRef<ReturnType<typeof createStar>[]>([]);

  // Control de mouse (opcional)
  const mousePos = useRef({ x: 0, y: 0 });

  // Tiempo de último spawn y banderas
  const lastSpawnTime = useRef(0);
  const firstBatchSpawned = useRef(false);
  const initialBatchTime = useRef(0);

  function createStar(canvasWidth: number, canvasHeight: number) {
    // Ajusta la vida para que duren 3–5 segundos
    const lifetime = 3000 + Math.random() * 2000;

    const greyVal = Math.floor(Math.random() * 75 + 180); // 180–255
    const baseAlpha = (Math.random() * 0.4 + 0.2).toFixed(2);

    // Punto de inicio (abajo, posición X aleatoria)
    const startX = Math.random() * canvasWidth;
    const startY = canvasHeight + 10;

    // Destino (arriba en el centro)
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
      y: startY,
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId: number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // (Opcional) detectar movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Crea un batch inicial de estrellas
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

        // Curva de progreso: acelera al final (progress^2)
        const curvedProgress = progress ** 2;

        // Opacidad decrece (fadeFactor)
        const fadeFactor = 1 - progress;
        const currentAlpha = star.baseAlpha * fadeFactor;

        // Interpolación entre start y end
        const newX = star.startX + (star.endX - star.startX) * curvedProgress;
        const newY = star.startY + (star.endY - star.startY) * curvedProgress;

        star.x = newX;
        star.y = newY;

        // Dibujar
        ctx.fillStyle = `rgba(${star.r}, ${star.g}, ${star.b}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });
    }

    function updateStars() {
      const now = Date.now();

      // Eliminar las estrellas que acabaron su vida
      stars.current = stars.current.filter((star) => {
        const age = now - star.createdAt;
        return age < star.lifetime;
      });

      // Generar nuevas si no llegamos a numStars
      if (stars.current.length < numStars) {
        const nowPerf = performance.now();

        // Esperar initialPause solo tras el batch inicial
        if (
          firstBatchSpawned.current &&
          nowPerf - initialBatchTime.current > initialPause
        ) {
          // Calculamos cuántas estrellas crear en función del tiempo transcurrido
          const deltaTime = nowPerf - lastSpawnTime.current;
          const starsToSpawn = Math.floor(spawnRate * (deltaTime / 1000));

          for (let i = 0; i < starsToSpawn; i++) {
            if (stars.current.length < numStars) {
              stars.current.push(createStar(canvasRef.current!.width, canvasRef.current!.height));
            }
          }

          // Actualizamos el lastSpawnTime si creamos al menos 1
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

    // Inicializar
    stars.current = [];
    spawnInitialBatch();
    animate();

    // Ajustar el canvas en caso de resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'absolute',
        top: '265px',
        left: 'calc(49% - 600px)', // Ajusta según tu layout
        width: '1200px',
        zIndex: 9999,
      }}
    />
  );
}

export default StarField;
