function Footer() {
  return (
    <div className="w-full">
      <aside className="bg-black text-white p-6 rounded-lg font-mono shadow-lg mx-auto mt-10">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">mysql</p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-green-400">mysql&gt; SELECT footer FROM portfolio WHERE name = 'RobertoDFJ';</p>
          <p className="text-white">+------------------------------+</p>
          <p className="text-white">
            <a href="mailto:robertodfj93@gmail.com" className="underline hover:text-teal-400">
              robertodfj93@gmail.com
            </a>
          </p>

          {/* Iconos */}
          <div className="flex justify-center gap-6 mt-4 text-green-400">
            {/* GitHub */}
            <a
              href="https://github.com/robertodfj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-green-600"
            >
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-2.01c-3.2.7-3.88-1.39-3.88-1.39-.53-1.34-1.3-1.7-1.3-1.7-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.76 1.27 3.44.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.24 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/robertodfj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-green-600"
            >
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.13V24h-4v-7.6c0-1.81 0-4.13-2.5-4.13-2.5 0-2.9 1.96-2.9 4v7.7h-4V8z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/34623154438"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-green-600"
            >
              <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 6.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.898 6.994c-.003 5.45-4.437 9.884-9.888 9.884" />
              </svg>
            </a>
          </div>

          <p className="text-white mt-4">+------------------------------+</p>
          <p className="text-white">© 2026 Roberto de Frutos Jiménez. Todos los derechos reservados.</p>
        </div>
      </aside>
    </div>
  );
}

export default Footer;