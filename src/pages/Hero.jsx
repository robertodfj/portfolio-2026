import Particles from './Components/Particles.jsx';
import BlurText from './Components/BlurText.jsx';
import FadeContent from './Components/FadeContent.jsx';

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

function Hero() {
    return (
        <section className='relative w-full h-screen bg-black overflow-hidden'>
            {/* Partículas de fondo */}
            <div className='absolute inset-0'>
                <Particles
                    particleColors={['#D8FFB4', '#B4FFC8']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            {/* Contenido encima */}
            <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0} className='mt-5'>
                <h1>Desarrollador de aplicaciones moviles</h1>
            </FadeContent>
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
                <div className="flex flex-col items-center justify-center z-10 text-white space-y-6">
                    <BlurText
                        text="Roberto De Frutos Jiménez"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-5xl mb-2 sm:text-6xl md:text-7xl font-bold text-center"
                    />

                    <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0} className='mt-5'>
                        <a href="/cv.pdf" download className="group relative">
                            {/* Fondo del botón */}
                            <div
                                className="absolute -inset-1 rounded-xl bg-linear-to-r from-green-500 to-green-400 opacity-75 blur transition duration-300 group-hover:opacity-100"
                            ></div>
                            <div
                                className="absolute -inset-1 rounded-xl bg-linear-to-r from-green-500 to-green-400 opacity-75 blur transition duration-300 group-hover:opacity-100 animation-delay-200"
                            ></div>

                            {/* Contenido del botón */}
                            <span className="relative flex items-center gap-3 rounded-lg bg-black px-7 py-3 leading-none">
                                <span
                                    className="inline-block h-3 w-3 rounded-full bg-linear-to-tr from-green-400 to-green-300 opacity-80 shadow-lg shadow-green-400/50 transition-all duration-300 group-hover:scale-125"
                                ></span>

                                <span className="inline-flex flex-col gap-1">
                                    <span className="text-sm font-medium text-green-400">Descargar CV</span>
                                    <span className="text-[10px] font-light tracking-wider text-green-300/80">
                                        Obtén mi CV actualizado
                                    </span>
                                </span>

                                <span
                                    className="ml-auto transform transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    {/* Ícono de descarga */}
                                    <svg
                                        className="h-5 w-5 text-green-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
                                        />
                                    </svg>
                                </span>

                                <div
                                    className="absolute -bottom-2 left-1/2 h-px w-5/6 -translate-x-1/2 bg-linear-to-r from-transparent via-green-400 to-transparent opacity-50 blur-sm transition-all duration-300 group-hover:w-full"
                                ></div>
                            </span>
                        </a>
                    </FadeContent>
                </div>
            </div>
        </section>
    );
}

export default Hero;