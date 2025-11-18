// App.jsx
import LetterGlitch from './pages/Components/LetterGlitch.jsx';
import Hero from './pages/Hero.jsx';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Tech from './pages/Tech.jsx';
import Proyects from './pages/Proyects.jsx';

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
      <div className="relative z-10 overflow-y-auto h-full" style={{ backgroundColor: 'rgba(0, 0, 1, 0.8)'}}>
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Proyects />
      </div>
    </div>
  );
}

export default App;