// Tech.jsx
import DynamicIconCloud from "./Components/DynamicIconCloud";
import TextPressure from "./Components/TextPressure";

function Tech() {
    return (
        <div className="w-full min-h-screen px-4 md:px-0 py-10 flex flex-col items-center">

            {/* Título */}
            <div className="w-full mt-10 flex justify-center">
                <div style={{ position: 'relative', height: '250px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <TextPressure
                        text="Tecnologias"
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

            {/* Nube centrada */}
            <div className="mt-10 w-full flex justify-center items-center">
                <DynamicIconCloud />
            </div>

        </div>
    );
}

export default Tech;