import ProjectCard from "./Components/ProyectCard";
import TextPressure from "./Components/TextPressure";

function Proyects() {
  return (
    <div className="w-full h-auto py-10 flex flex-col items-center mt-100 md:mt-80" >

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

      <div className="w-full overflow-hidden">
        <ProjectCard />
      </div>
      
    </div>
  );
}

export default Proyects;