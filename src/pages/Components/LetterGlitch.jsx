import { useRef, useEffect } from 'react';

const LetterGlitch = ({
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());

  const lettersAndSymbols = Array.from(characters);
  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const getRandomChar = () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  const getRandomColor = () => glitchColors[Math.floor(Math.random() * glitchColors.length)];

  const hexToRgb = hex => {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  };

  const interpolateColor = (start, end, factor) => {
    const r = Math.round(start.r + (end.r - start.r) * factor);
    const g = Math.round(start.g + (end.g - start.g) * factor);
    const b = Math.round(start.b + (end.b - start.b) * factor);
    return `rgb(${r},${g},${b})`;
  };

  const initializeLetters = (cols, rows) => {
    letters.current = Array.from({ length: cols * rows }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = parent.clientWidth * dpr;
    canvas.height = parent.clientHeight * dpr;
    canvas.style.width = `${parent.clientWidth}px`;
    canvas.style.height = `${parent.clientHeight}px`;

    const ctx = canvas.getContext('2d');
    context.current = ctx;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    const cols = Math.ceil(canvas.width / charWidth);
    const rows = Math.ceil(canvas.height / charHeight);
    initializeLetters(cols, rows);
  };

  const drawLetters = () => {
    const ctx = context.current;
    if (!ctx) return;
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cols = Math.ceil(canvas.width / charWidth);
    letters.current.forEach((letter, index) => {
      const x = (index % cols) * charWidth;
      const y = Math.floor(index / cols) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };

  const updateLetters = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current < glitchSpeed) return;
    lastGlitchTime.current = now;

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
    for (let i = 0; i < updateCount; i++) {
      const idx = Math.floor(Math.random() * letters.current.length);
      letters.current[idx].char = getRandomChar();
      letters.current[idx].targetColor = getRandomColor();
      if (!smooth) letters.current[idx].color = letters.current[idx].targetColor;
      else letters.current[idx].colorProgress = 0;
    }
  };

  const handleSmooth = () => {
    let redraw = false;
    letters.current.forEach(letter => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;
        const start = hexToRgb(letter.color);
        const end = hexToRgb(letter.targetColor);
        letter.color = interpolateColor(start, end, letter.colorProgress);
        redraw = true;
      }
    });
    if (redraw) drawLetters();
  };

  const animate = () => {
    updateLetters();
    drawLetters();
    if (smooth) handleSmooth();
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-screen h-screen absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {outerVignette && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_100%)]"></div>
      )}
      {centerVignette && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_60%)]"></div>
      )}
    </div>
  );
};

export default LetterGlitch;