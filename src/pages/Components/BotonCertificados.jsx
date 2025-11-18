export default function BotonCertificados({ texto = "Certificados" }) {
  return (
    <button
      className="
        relative 
        cursor-pointer 
        uppercase 
        tracking-[0.5rem] 
        font-bold 
        text-2xl 
        px-12 
        py-4 
        rounded-md
        transition-all 
        duration-300
        border-t border-b

        /* color principal */
        text-[#2ed573]

        /* fondo radial y patrones */
        bg-[radial-gradient(circle,rgba(46,213,116,0.36)_0%,transparent_95%)]
        before:bg-[linear-gradient(rgba(46,213,116,0.073)_1px,transparent_1px)]
        after:bg-[linear-gradient(to_right,rgba(46,213,116,0.073)_1px,transparent_1px)]

        /* patrones tamaño 15px */
        before:bg-size-[15px_15px]
        after:bg-size-[15px_15px]

        /* patrones en toda la superficie */
        before:absolute before:inset-0 before:z-[-1]
        after:absolute after:inset-0 after:z-[-1]

        /* border glow */
        border-image-[radial-gradient(circle,rgba(46,213,115,1)_0%,transparent_100%)] 
        border-image-slice-[1]

        /* hue rotate inicial */
        filter hue-rotate-0
      "

      /* hover */
      onMouseEnter={(e) => {
        e.currentTarget.style.setProperty(
          "background-size",
          "cover,10px 10px,10px 10px"
        );
      }}

      /* normal */
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty(
          "background-size",
          "cover,15px 15px,15px 15px"
        );
      }}

      /* active */
      onMouseDown={(e) => {
        e.currentTarget.style.filter = "hue-rotate(250deg)";
      }}

      onMouseUp={(e) => {
        e.currentTarget.style.filter = "hue-rotate(0deg)";
      }}
    >
      {texto}
    </button>
  );
}