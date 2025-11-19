import { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import Proyectos from "./Proyectos";

export default function ProjectCard() {
  const sliderRef = useRef(null);
  const sliderInstance = useRef(null);

  const proyectos = [
    {
      icono: "🍽️",
      titulo: "Mesero WEB",
      nombre: (
        <>
          Mesero es una aplicación en desarrollo diseñada para optimizar la gestión de pedidos en
          restaurantes. Incluye un video demostrativo que muestra todas las funcionalidades
          implementadas en el backend con Java y Spring Boot. 
          <br />
          <br />
          Ver demo completo en YouTube:{" "}
          <a
            href="https://www.youtube.com/watch?v=n2fKeVxJVg8&t=1s"
            target="_blank"
            className="text-green-400 underline"
          >
            https://youtu.be/n2fKeVxJVg8
          </a>
        </>
      ),
    },
    {
      icono: "☁️",
      titulo: "MiniCloud",
      nombre: (
        <>
          MiniCloud es un sistema en desarrollo que permite a varios usuarios subir, descargar y 
          eliminar archivos de forma segura. Los archivos se cifran automáticamente y se almacenan 
          en base de datos o carpetas por usuario, mientras el sistema atiende múltiples clientes 
          simultáneamente mediante hilos en Java. 
          <br />
          <br />
          ESTE PROYECTO ESTA EN DESARROLLO
        </>
      ),
    },
    {
      icono: "📋",
      titulo: "TaskFlow",
      nombre:
        "TaskFlow es una aplicación inspirada en Jira, desarrollada para consolidar mis conocimientos " +
        "full-stack. Permite gestionar proyectos, asignar tareas y visualizar su estado en tiempo real. " +
        "Construido con Spring Boot en el backend y React en el frontend, demuestra mi capacidad para " +
        "crear soluciones completas, organizadas y listas para entornos profesionales.",
    },
    {
      icono: "✊📄✂️",
      titulo: "Rock Paper Scissors",
      nombre:
        "Piedra, Papel o Tijera con Cámara es un proyecto personal desarrollado en Java que combina lógica " +
        "de juego con visión por computadora. Inspirado en un experimento visto en redes, decidí recrear " +
        "el clásico juego usando OpenCV para detectar la forma de la mano del usuario en tiempo real.",
    },
  ];

  // --- SLIDER CONFIG ---
  useEffect(() => {
    if (sliderRef.current) {
      sliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        mode: "free-snap",
        centered: true,
        slides: {
          origin: "center",
          perView: 1.3,
          spacing: 30,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "center",
              perView: 2.2,
              spacing: 40,
            },
          },
        },
      });
    }

    return () => sliderInstance.current?.destroy();
  }, []);

  // --- BOTÓN FUTURISTA ---
  const buttonClass =
    "relative cursor-pointer font-bold text-2xl w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 border-t border-b text-[#2ed573] " +
    "bg-[radial-gradient(circle,rgba(46,213,116,0.36)_0%,transparent_95%)] " +
    "before:bg-[linear-gradient(rgba(46,213,116,0.073)_1px,transparent_1px)] " +
    "after:bg-[linear-gradient(to_right,rgba(46,213,116,0.073)_1px,transparent_1px)] " +
    "before:bg-size-[15px_15px] after:bg-size-[15px_15px] " +
    "before:absolute before:inset-0 before:z-[-1] after:absolute after:inset-0 after:z-[-1] " +
    "border-image-[radial-gradient(circle,rgba(46,213,115,1)_0%,transparent_100%)] border-image-slice-[1]";

  const onHover = (e) =>
    e.currentTarget.style.setProperty("background-size", "cover,10px 10px,10px 10px");

  const onLeave = (e) =>
    e.currentTarget.style.setProperty("background-size", "cover,15px 15px,15px 15px");

  const onDown = (e) => (e.currentTarget.style.filter = "hue-rotate(250deg)");
  const onUp = (e) => (e.currentTarget.style.filter = "hue-rotate(0deg)");

  return (
    <section className="py-16 w-full">
      <div className="max-w-[100vw] mx-auto px-4 sm:px-8">

        {/* BOTONES DESKTOP */}
        <div className="hidden lg:flex justify-center gap-6 mb-10">
          <button
            onClick={() => sliderInstance.current?.prev()}
            className={buttonClass}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onMouseDown={onDown}
            onMouseUp={onUp}
          >
            ⬅
          </button>

          <button
            className={buttonClass}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onMouseDown={onDown}
            onMouseUp={onUp}
          >
            <a href="https://github.com/robertodfj" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-8 h-8" />
            </a>
          </button>
        </div>

        {/* SLIDER */}
        <div ref={sliderRef} className="keen-slider w-screen mx-auto">
          {proyectos.map((item, i) => (
            <div key={i} className="keen-slider__slide flex justify-center py-6 px-2">
              <Proyectos {...item} />
            </div>
          ))}
        </div>

        {/* BOTONES MOBILE */}
        <div className="mt-8 flex justify-center gap-6 lg:hidden">
          <button
            onClick={() => sliderInstance.current?.prev()}
            className={buttonClass + " w-14 h-14 text-xl"}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onMouseDown={onDown}
            onMouseUp={onUp}
          >
            ⬅
          </button>

          <button
            className={buttonClass + " w-14 h-14"}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onMouseDown={onDown}
            onMouseUp={onUp}
          >
            <a href="https://github.com/robertodfj" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.simpleicons.org/github" className="w-6 h-6" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}