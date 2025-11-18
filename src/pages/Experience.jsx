import TextPressure from "./Components/TextPressure";
import SpotlightCard from './Components/SpotLightCard';

function Experience() {
    return (
        <div className="mt-10 min-h-screen w-full px-4 md:px-0 py-20">
                <div style={{ position: 'relative', height: '400px' }}>
                    <TextPressure
                        text="Experiencia"
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
                
  
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(10, 20, 255, 0.1)">
                    <p>Hola</p>
                    </SpotlightCard>
                <div style={{ position: 'relative', height: '400px' }} className="min-h-screen">
                    <TextPressure
                        text="Proyectos"
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
    );
}

export default Experience;