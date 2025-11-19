import DynamicIconCloud from "./Components/DynamicIconCloud";
import TextPressure from "./Components/TextPressure";

function Tech() {
  return (
    <div className="w-full px-4 md:px-0 py-10 flex flex-col items-center">

      {/* Nube centrada */}
      <div className="w-full flex justify-center items-center py-10">
        <DynamicIconCloud />
      </div>

    </div>
  );
}

export default Tech;