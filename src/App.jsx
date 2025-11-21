import LetterGlitch from './pages/Components/LetterGlitch.jsx';
import Hero from './pages/Hero.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Tech from './pages/Tech.jsx';
import Proyects from './pages/Proyects.jsx';
import TextPressure from './pages/Components/TextPressure.jsx';
import Footer from './pages/Footer.jsx';

function App() {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden bg-black">

      {/* Fondo glitch: ocupa TODO el scroll */}
      <LetterGlitch
        className="absolute inset-0 w-full h-full z-0"
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />

      {/* Contenido delante */}
      <div
        className="relative z-10 overflow-y-auto h-full"
        style={{ backgroundColor: 'rgba(0, 0, 1, 0.8)' }}
      >
        <Hero />
        <About />

        <div className="md:mt-[-50px] mt-[-15px] w-full" style={{ position: 'relative', height: '400px' }}>
          <TextPressure
            text=" Experiencia"
          />
        </div>
        <div className="-mt-80 md:mt-0"><Experience /></div>
        
        
        <div className="mt-9 w-full" style={{ position: 'relative', height: '400px' }}>
          <TextPressure
            text="Proyectos"
          />
        </div>
        <div className="-mt-80 md:mt-0"><Proyects /></div>

        <div className="mt-9 w-full" style={{ position: 'relative', height: '400px' }}>
          <TextPressure
            text="Tecnologías"
          />
        </div>
        <div className="mt-[-300px] md:mt-0"><Tech /></div>

        <Footer />
      </div>
    </div>
  );
}

export default App;