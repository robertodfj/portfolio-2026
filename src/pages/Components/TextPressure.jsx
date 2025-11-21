import { useEffect, useRef } from 'react';

const TextPressure = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  // This font is just an example, you should not use it in commercial projects.
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  className = '',

  minFontSize = 24
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  // replace state with refs to avoid re-renders
  const fontSizeRef = useRef(minFontSize);
  const scaleYRef = useRef(1);
  const lineHeightRef = useRef(1);

  const chars = text.split('');

  // store rects once per frame
  const spanRectsRef = useRef([]);

  // animation/frame refs
  const rafRef = useRef(null);
  const lastFrameRef = useRef(performance.now());
  const targetFPS = 30;
  const frameInterval = 1000 / targetFPS;

  // simple distance helper
  const dist = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // inject preload link for font (best to move to head in production)
  useEffect(() => {
    if (!fontUrl) return;
    const id = `preload-font-${btoa(fontUrl).slice(0, 8)}`;
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
    return () => {};
  }, [fontUrl]);

  // pointer handlers
  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // init mouse at center of container if available
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // setSize using refs and applying directly to DOM, with debounce
  useEffect(() => {
    let resizeTimeout = null;

    const setSize = () => {
      if (!containerRef.current || !titleRef.current) return;

      const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

      let newFontSize = containerW / (chars.length / 2);
      newFontSize = Math.max(newFontSize, minFontSize);
      fontSizeRef.current = newFontSize;

      // apply directly
      titleRef.current.style.fontSize = `${fontSizeRef.current}px`;
      titleRef.current.style.lineHeight = `${lineHeightRef.current}`;

      // scale adjustment (only when requested)
      if (scale) {
        requestAnimationFrame(() => {
          if (!titleRef.current) return;
          const textRect = titleRef.current.getBoundingClientRect();
          if (textRect.height > 0) {
            const yRatio = containerH / textRect.height;
            scaleYRef.current = yRatio;
            lineHeightRef.current = yRatio;
            titleRef.current.style.transform = `scale(1, ${scaleYRef.current})`;
            titleRef.current.style.lineHeight = `${lineHeightRef.current}`;
          }
        });
      } else {
        // ensure transform reset if not scaling
        titleRef.current.style.transform = `scale(1, 1)`;
        scaleYRef.current = 1;
        lineHeightRef.current = 1;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(setSize, 120); // debounce 120ms
    };

    setSize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scale, text, minFontSize, chars.length]);

  // main animation loop (limited FPS) and optimized rect calculation
  useEffect(() => {
    const updateRects = () => {
      const spans = spansRef.current;
      const rects = new Array(spans.length);
      for (let i = 0; i < spans.length; i++) {
        const s = spans[i];
        rects[i] = s ? s.getBoundingClientRect() : null;
      }
      spanRectsRef.current = rects;
    };

    const runAnimationStep = () => {
      // lerp mouse towards cursor (simple smoothing)
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (!titleRef.current) return;
      const titleRect = titleRef.current.getBoundingClientRect();
      const maxDist = Math.max(1, titleRect.width / 2);

      const rects = spanRectsRef.current;
      const spans = spansRef.current;
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i];
        if (!span) continue;
        const rect = rects[i];
        if (!rect) continue;

        const charCenter = {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2
        };

        const d = dist(mouseRef.current, charCenter);

        // helper to compute attribute with bounds
        const getAttr = (distance, minVal, maxVal) => {
          const val = maxVal - Math.abs((maxVal * distance) / maxDist);
          return Math.max(minVal, val + minVal);
        };

        const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
        const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
        const italVal = italic ? Number(getAttr(d, 0, 1).toFixed(2)) : 0;
        const alphaVal = alpha ? Number(getAttr(d, 0, 1).toFixed(2)) : 1;

        // apply styles directly, minimal DOM operations
        // Only set when changed to avoid style thrash
        const currentFontVariation = span.style.fontVariationSettings;
        const newFontVar = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
        if (currentFontVariation !== newFontVar) {
          span.style.fontVariationSettings = newFontVar;
        }

        const currentOpacity = span.style.opacity;
        const newOpacity = String(alphaVal);
        if (currentOpacity !== newOpacity) {
          span.style.opacity = newOpacity;
        }
      }
    };

    const loop = (now) => {
      rafRef.current = requestAnimationFrame(loop);
      const last = lastFrameRef.current;
      const delta = now - last;
      if (delta < frameInterval) return; // skip frame to limit FPS
      lastFrameRef.current = now - (delta % frameInterval);

      // update rects once per frame (expensive but needed)
      updateRects();
      runAnimationStep();
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, weight, italic, alpha, chars.length]);

  // render
  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-transparent">
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
          font-display: swap;
        }
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${flex ? 'flex justify-between' : ''} ${stroke ? 'stroke' : ''} uppercase text-center`}
        style={{
          fontFamily,
          // initial font size set here; will be updated by setSize effect
          fontSize: `${fontSizeRef.current}px`,
          lineHeight: lineHeightRef.current,
          transform: `scale(1, ${scaleYRef.current})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor,
          transition: 'none' // avoid CSS transitions interfering
        }}
      >
        {chars.map((char, i) => (
          <span key={i} ref={el => (spansRef.current[i] = el)} data-char={char} className="inline-block">
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;