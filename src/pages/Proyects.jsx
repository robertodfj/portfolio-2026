import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model.jsx';


function Proyects() {
  return (
    <section>
        <Canvas
        style={{ width: '50%', height: '50vh' }}>
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <Model />
        </Canvas>
    </section>
  );
}

export default Proyects;