import React, { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const letters = "01".split("");
    const fontSize = 12;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    let raf = 0;
    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }
    loop();

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-green-200 font-sans">
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-900 to-green-800 shadow-2xl">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#00FF7F" strokeWidth="1.2" />
              <path d="M6 12h12M12 6v12" stroke="#00FF7F" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wider">MRVIRUSX INFO</h1>
            <p className="text-sm text-green-300/70">Owner — Team Xevision Hackers</p>
          </div>
        </div>

        <nav className="space-x-3 text-sm">
          <a href="mailto:gamershub20007@gmail.com" className="px-3 py-1 border border-green-700 rounded hover:bg-green-900/20">Email</a>
          <a href="https://wa.me/263780667006" target="_blank" rel="noreferrer" className="px-3 py-1 border border-green-700 rounded hover:bg-green-900/20">WhatsApp</a>
          <a href="https://whatsapp.com/channel/0029VbBcAeSGOj9hYmE5WZ1s" target="_blank" rel="noreferrer" className="px-3 py-1 border border-green-700 rounded hover:bg-green-900/20">Channel</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <section className="space-y-6">
          <div className="p-6 bg-black/60 border border-green-800 rounded-2xl shadow-lg backdrop-blur-sm">
            <h2 className="text-4xl font-extrabold tracking-tight">MRVIRUSX</h2>
            <p className="mt-2 text-green-300/80">Owner of <span className="font-semibold">Team Xevision Hackers</span> — leader, strategist, and guardian of the digital underground.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:gamershub20007@gmail.com" className="px-4 py-2 rounded-md border border-green-700">Email: gamershub20007@gmail.com</a>
              <a href="https://wa.me/263780667006" className="px-4 py-2 rounded-md border border-green-700">WhatsApp: +263780667006</a>
              <a href="https://whatsapp.com/channel/0029VbBcAeSGOj9hYmE5WZ1s" className="px-4 py-2 rounded-md border border-green-700">Channel</a>
            </div>
          </div>

          <div className="p-6 bg-black/60 border border-green-800 rounded-2xl shadow-inner">
            <h3 className="text-xl font-semibold">Live Status</h3>
            <div className="mt-3 flex items-center space-x-3">
              <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm">Online — monitoring</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 border border-green-700 rounded">
                <p className="text-xs text-green-200/80">Team</p>
                <p className="font-mono text-sm">Xevision Hackers</p>
              </div>
              <div className="p-3 border border-green-700 rounded">
                <p className="text-xs text-green-200/80">Channel</p>
                <p className="font-mono text-sm">WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="p-6 bg-black/70 border border-green-800 rounded-2xl shadow-2xl">
            <h3 className="text-lg font-bold">Matrix Feed</h3>
            <div className="mt-4 text-sm font-mono bg-black/60 p-3 rounded h-44 overflow-auto border border-green-900/60">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="leading-5 opacity-90">{`[${new Date().toLocaleTimeString()}] 0x${Math.floor(Math.random() * 0xfffffff).toString(16)} — packet received`}</div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-black/60 to-green-900/5 border border-green-800 rounded-2xl">
            <h3 className="text-lg font-bold">Contact Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:gamershub20007@gmail.com">✉ gamershub20007@gmail.com</a></li>
              <li><a href="https://wa.me/263780667006">📲 +263 780 667 006</a></li>
              <li><a href="https://whatsapp.com/channel/0029VbBcAeSGOj9hYmE5WZ1s">🔗 Channel</a></li>
            </ul>
          </div>
        </aside>

        <div className="col-span-1 lg:col-span-2">
          <div className="p-6 bg-black/70 border border-green-800 rounded-2xl flex items-center justify-between overflow-hidden">
            <div className="flex-1">
              <div className="mb-2 text-sm text-green-300/80">Announcements</div>
              <div className="text-2xl md:text-4xl font-extrabold tracking-wide flex items-center gap-4">
                <span className="flicker">WELCOME TO MRVIRUSX</span>
                <span className="blink">•</span>
                <span className="marquee whitespace-nowrap">JOIN THE CHANNEL • STAY ALERT • HACK THE SYSTEM</span>
              </div>
            </div>
            <div className="ml-6 flex-shrink-0">
              <button className="px-4 py-2 rounded border border-green-700">Join WhatsApp</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto p-6 text-center text-xs text-green-300/60">
        <div>© {new Date().getFullYear()} MRVIRUSX — Team Xevision Hackers</div>
      </footer>
    </div>
  );
}
