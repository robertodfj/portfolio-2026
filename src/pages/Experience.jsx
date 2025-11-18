import TextPressure from "./Components/TextPressure";
import EmpresaCard from "./Components/EmpresaCard";
import BotonCertificados from "./Components/BotonCertificados";

function Experience() {
    return (
        <div className="w-full px-4 md:px-0 py-10 flex flex-col items-center">

            {/* Título */}
            <div className="w-full mt-10 flex justify-center">
                <div style={{ position: 'relative', height: '250px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <TextPressure
                        text="Experiencia!"
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

            {/* Contenido */}
            <div className="mt-10 flex flex-col items-center gap-10 w-full">

                {/* Botón centrado */}
                <div className="flex justify-center w-full">
                    <BotonCertificados />
                </div>

                {/* Grid empresas (súper centrado) */}
                <div
                    className="
                        grid
                        grid-cols-1        /* móvil */
                        md:grid-cols-1     /* pantallas medianas: 1 col */
                        lg:grid-cols-2     /* pantallas grandes: 2 col */
                        gap-8
                        place-items-center  /* CENTRADO total */
                        justify-center
                        w-full
                        max-w-4xl          /* evita que se expandan demasiado */
                    "
                >
                    <EmpresaCard
                        nombre="Abril 2025 - Actualidad"
                        titulo="Kyndryl"
                          icono="https://www.kyndryl.com/content/experience-fragments/kyndrylprogram/us/en/sites/header/master/_jcr_content/root/header_copy/image.coreimg.svg/1636019574172/kyndryl-logo.svg"

                    />

                    <EmpresaCard
                        nombre="Marzo 2025 - Junio 2025"
                        titulo="App Informatica"
                        icono="https://www.ticnova.es/esp/retail.php"
                    />

                    <EmpresaCard
                        nombre="2024 - Actualidad"
                        titulo="DAM"
                        icono="/icons/empresa-logo.png"
                    />

                    <EmpresaCard
                        nombre="2022 - 2024"
                        titulo="SMR"
                        icono="/icons/empresa-logo.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;