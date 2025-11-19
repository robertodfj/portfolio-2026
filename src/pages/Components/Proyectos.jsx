export default function EmpresaCard({ nombre, titulo, icono }) {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 w-[450px] h-[500px]">
      <div className="text-white rounded-3xl border border-green-500/20 bg-linear-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl h-full">

        {/* Fondos animados */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-linear-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000"></div>

          <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        {/* Contenido */}
        <div className="p-8 relative z-10 h-full flex flex-col items-center text-center">

          {/* Icono */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-green-500/10 animate-pulse delay-500"></div>

            <div className="p-6 rounded-full backdrop-blur-lg border border-green-500/20 bg-linear-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <div className="w-12 h-12">
                <img
                  src={icono}
                  alt="icono empresa"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Título */}
          <p className="text-3xl font-bold bg-linear-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent mb-4 transform group-hover:scale-105 transition-transform duration-300">
            {titulo}
          </p>

          {/* Descripción con scroll si es larga */}
          <p className="text-gray-300 text-sm leading-relaxed font-semibold overflow-y-auto max-h-[180px] pr-2 transform group-hover:text-gray-200 transition-colors duration-300 scrollbar-thin scrollbar-thumb-green-600/30 scrollbar-track-transparent">
            {nombre}
          </p>

          {/* Línea animada */}
          <div className="mt-6 w-1/3 h-0.5 bg-linear-to-r from-transparent via-green-500 to-transparent rounded-full group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

          {/* Dots */}
          <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Esquinas brillantes */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-green-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-green-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      </div>
    </div>
  );
}