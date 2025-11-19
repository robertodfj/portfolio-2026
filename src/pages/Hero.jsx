// Hero.jsx
import SplitText from "./Components/SplitText";
import TextType from "./Components/TextType";
import FadeContent from "./Components/FadeContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function handleAnimationComplete() {
    console.log("Letter animation completed!");
}

export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10 px-4 md:px-0">

      {/* Hero inicial */}
      <div className="flex flex-col items-center justify-center gap-10 max-w-5xl w-full mx-auto">

        <SplitText
          text="¡Hola, soy Roberto!"
          className="jersey-10-regular text-center text-white text-6xl md:text-9xl drop-shadow-[0_0_25px_#00eaff]"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
          <TextType
            text={["Desarrollador Full Stack", "¡Happy coding!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-white text-2xl md:text-4xl text-center jersey-10-regular"
          />
        </FadeContent>

        {/* Botón Descargar CV */}
        <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
          <div className="flex flex-col items-center gap-10 w-full">
            <a
              href="/cv.pdf" 
              download
              className="group relative bg-slate-900 h-16 w-64 md:w-72 border-2 border-teal-600 text-white text-base md:text-lg font-bold rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 p-3 text-center
              before:absolute before:w-10 before:h-10 before:content-[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500
              after:absolute after:z-10 after:w-16 after:h-16 after:content-[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500
              hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110 flex items-center justify-center gap-2"
            >
                <FontAwesomeIcon icon={faDownload} className="text-xl" />
                Descargar CV
            </a>
          </div>
        </FadeContent>

        {/* Flecha de scroll */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-2xl">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

      </div>
    </div>
  );
}