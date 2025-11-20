import { useState, useEffect } from "react";
import TextPressure from "./Components/TextPressure";
import Tarjeta from "./Components/Tarjeta";

function About() {
  const [loading, setLoading] = useState(true);

  // Cuando el componente monta, dejamos un pequeño delay
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 600); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen w-full px-4 md:px-0 py-20">

      {/* ---------------- LOADER OVERLAY ---------------- */}
      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <p className="text-white text-2xl font-mono animate-pulse">
            Cargando...
          </p>
        </div>
      )}
      {/* ------------------------------------------------ */}

      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-md md:max-w-lg font-mono shadow-lg items-center mx-auto mt-10">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">mysql</p>
        </div>

        <div className="mt-4">
          <p className="text-green-400">mysql&gt; SELECT github FROM developers WHERE name = 'Roberto';</p>
          <p className="text-white">+------------------------------+</p>
          <p className="text-white text-center">|github|</p>
          <p className="text-white">+------------------------------+</p>
          <p className="text-white">
            <a href="https://github.com/robertodfj" className="underline hover:text-teal-400">
              https://github.com/robertodfj
            </a>
          </p>
          <p className="text-white">+------------------------------+</p>
          <p className="text-green-400">1 row in set (0.01 sec)</p>
          <br />
          <p className="text-green-400">mysql&gt; SELECT linkedin FROM developers WHERE name = 'Roberto';</p>
          <p className="text-white">+------------------------------+</p>
          <p className="text-white text-center">|linkedin|</p>
          <p className="text-white">+------------------------------+</p>
          <p className="text-white">
            <a href="https://linkedin.com/in/robertodfj" className="underline hover:text-teal-400">
              https://linkedin.com/in/robertodfj
            </a>
          </p>
          <p className="text-white">+------------------------------+</p>
          <p className="text-green-400">1 row in set (0.04 sec)</p>
        </div>
      </aside>

      <div className="mt-9 w-full">
        <div style={{ position: 'relative', height: '400px' }}>
          <TextPressure
            text="¡Sobre mí!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={32}
          />
        </div>
      </div>

      {/* Espacio para la tarjeta y la info */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 px-4 md:px-8 mt-20">
        {/* Tarjeta */}
        <div className="w-full max-w-xl lg:mx-0 ">
          <Tarjeta />
        </div>

        {/* Información */}
        <aside className="bg-black text-white p-6 rounded-lg font-mono shadow-lg w-full max-w-xl 
                   h-auto md:h-[400px] lg:h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">mysql</p>
          </div>

          <div className="mt-4 space-y-4">
            <p className="text-green-400">SELECT info FROM developers WHERE name = 'Roberto';</p>
            <p className="text-white border-b border-gray-700 pb-2">| Información personal |</p>
            <p className="text-white">Nombre: Roberto de Frutos Jiménez</p>
            <p className="text-white">Edad: 19 años</p>
            <p className="text-white">Rol: Desarrollador Web Full Stack</p>

            <p className="text-green-400 mt-4">SELECT desc FROM developers WHERE name = 'Roberto';</p>
            <p className="text-white border-b border-gray-700 pb-2">| Un poco más sobre mí |</p>
            <p className="text-white">
              Soy un joven estudiante a punto de acabar DAM, estudio mientras trabajo, por lo que me ha hecho ser una persona organizada en busca de la perfección.
            </p>

            <p className="text-green-400 mt-4">SELECT live FROM developers WHERE name = 'Roberto';</p>
            <p className="text-white border-b border-gray-700 pb-2">| En mi vida personal |</p>
            <p className="text-white">
              En mi tiempo libre disfruto de la música, el cine y la programación, siempre buscando aprender cosas nuevas y mejorar mis habilidades.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default About;