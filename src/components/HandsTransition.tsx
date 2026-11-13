import React, { useEffect, useRef } from 'react';

interface HandsTransitionProps {
  isActive: boolean;
  onComplete: () => void;
  onCancel?: () => void;
}

export const HandsTransition: React.FC<HandsTransitionProps> = ({
  isActive,
  onComplete,
  onCancel,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const subCounterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      onComplete();
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      onComplete();
      return;
    }
    const g: CanvasRenderingContext2D = ctx;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let D = Math.min(window.devicePixelRatio || 1, 2);
    let basis = 0.6 * Math.hypot(W, H);

    function mass() {
      D = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      if (canvas) {
        canvas.width = W * D;
        canvas.height = H * D;
      }
      basis = 0.6 * Math.hypot(W, H);
    }
    window.addEventListener('resize', mass);
    mass();

    // Peaches constants & tunnel geometry
    const FARBEN = ['#3dff8a', '#35e0ff', '#ff5a00', '#ffb08a', '#ff3d9a', '#f2f2ee'];
    const N = 18;
    const ECKEN = 6;
    const ENDE = N + 2;

    // Stars field
    const sterne: [number, number, number, number][] = [];
    for (let i = 0; i < 260; i++) {
      sterne.push([Math.random(), Math.random(), Math.random() * 1.3 + 0.3, Math.random() * 6.28]);
    }

    function bogen(z: number) {
      return Math.sin(z * 0.11) * 0.9 + Math.sin(z * 0.047) * 1.4;
    }
    function bogenY(z: number) {
      return Math.sin(z * 0.083 + 1) * 0.7;
    }
    function klemm(x: number) {
      return x < 0 ? 0 : x > 1 ? 1 : x;
    }

    function ort(z: number, k: number, kam: number): [number, number, number, number, number] {
      const d = z - kam;
      const r = basis / d;
      const w = (k / ECKEN) * 6.2832 + z * 0.07;
      const mx = W / 2 + ((bogen(z) - bogen(kam)) * basis * 0.22) / d;
      const my = H / 2 + ((bogenY(z) - bogenY(kam)) * basis * 0.22) / d;
      return [mx + Math.cos(w) * r, my + Math.sin(w) * r, mx, my, r];
    }

    // Original Peaches Hands and Calibration
    const handL = new Image();
    const handR = new Image();
    const HK = { xl: 680, xr: 11, tyl: 189.0, tyr: 173.0, breit: 1376 };
    let zp = [W / 2, H / 2];
    handL.src = '/images/transition/hand-links.webp';
    handR.src = '/images/transition/hand-rechts.webp';

    let animId: number;
    const startTime = performance.now();
    let tKnall = -1e9;
    let knallStarted = false;
    let finished = false;

    // Timeline phases (total duration ~3.2s)
    // 0.0s -> 1.5s: f moves 0.40 -> 0.88 (hands smoothly glide in and touch)
    // 1.5s -> 2.2s: hold touch, amber light orb increases radius smoothly
    // 2.2s -> 3.2s: radial light blast (Knall) expands to engulf the whole screen
    const T_APPROACH = 1500;
    const T_HOLD = 700;
    const T_KNALL = 1000;

    function render(currentTime: number) {
      if (finished) return;

      const elapsed = currentTime - startTime;

      // Calculate progress factor f (0.38 at start -> 0.88 when hands meet)
      let f = 0.38;
      if (elapsed < T_APPROACH) {
        const p = elapsed / T_APPROACH;
        // Cubic ease out for hands closing
        const ease = 1 - Math.pow(1 - p, 2.5);
        f = 0.38 + 0.50 * ease;
      } else {
        f = 0.88;
      }

      // Update frame counter UI
      if (counterRef.current) {
        const frameNum = Math.min(99, Math.round(57 + (f - 0.38) * 65));
        counterRef.current.textContent = frameNum < 100 ? `0${frameNum}` : `${frameNum}`;
      }
      if (subCounterRef.current) {
        const subNum = Math.min(99, Math.round(64 + (f - 0.38) * 55));
        subCounterRef.current.textContent = subNum < 100 ? `0${subNum}` : `${subNum}`;
      }

      const kam = klemm(f / 0.8) * N;
      const tun = 1;

      // Set canvas transform
      g.setTransform(D, 0, 0, D, 0, 0);
      g.globalCompositeOperation = 'source-over';
      g.fillStyle = '#05070b';
      g.fillRect(0, 0, W, H);

      // Stars
      const sx = bogen(kam) * 18;
      const sy = bogenY(kam) * 18;
      for (let i = 0; i < sterne.length; i++) {
        const s = sterne[i];
        const a = 0.35 + 0.65 * Math.abs(Math.sin(elapsed * 0.0009 * s[2] + s[3]));
        g.globalAlpha = a * 0.7;
        g.fillStyle = i % 9 ? '#f2f2ee' : '#35e0ff';
        g.fillRect(
          ((s[0] * W - sx * s[2]) % W + W) % W,
          ((s[1] * H - sy * s[2]) % H + H) % H,
          s[2],
          s[2]
        );
      }

      g.globalCompositeOperation = 'lighter';

      // 3D Hexagonal Tunnel
      const erst = Math.max(0, Math.floor(kam));
      const letzt = Math.min(N, erst + 3 + Math.floor(f * 20));
      for (let z = letzt; z >= erst; z--) {
        const d = z - kam;
        if (d < 0.12) continue;
        const a = tun * klemm(1 - d / 44) * klemm(d / 0.5);
        const farbe = FARBEN[Math.floor(z / 3) % FARBEN.length];
        const tor = z % 4 === 0;
        g.strokeStyle = farbe;

        // Perspective tunnel rails
        if (z < N) {
          g.globalAlpha = a * 0.35;
          g.lineWidth = 1;
          g.beginPath();
          for (let k = 0; k < ECKEN; k++) {
            const o = ort(z, k, kam);
            const o2 = ort(z + 1, k, kam);
            g.moveTo(o[0], o[1]);
            g.lineTo(o2[0], o2[1]);
          }
          g.stroke();
        }

        // Ring polygon
        g.beginPath();
        for (let k = 0; k <= ECKEN; k++) {
          const o = ort(z, k % ECKEN, kam);
          k ? g.lineTo(o[0], o[1]) : g.moveTo(o[0], o[1]);
        }
        if (tor) {
          g.globalAlpha = a * 0.22;
          g.lineWidth = Math.min(24, 10 / d + 3);
          g.stroke();
        }
        g.globalAlpha = a * (tor ? 0.9 : 0.45);
        g.lineWidth = tor ? Math.min(4, 2 / d + 1) : 1;
        g.stroke();

        // Corner lights
        if (z % 2 === 0) {
          g.fillStyle = FARBEN[(Math.floor(z / 2)) % FARBEN.length];
          g.globalAlpha = a * 0.8;
          for (let k = Math.floor(z / 2) % 2; k < ECKEN; k += 2) {
            const o = ort(z, k, kam);
            const rr = Math.min(8, 2.4 / d + 1);
            g.beginPath();
            g.arc(o[0], o[1], rr, 0, 6.2832);
            g.fill();
          }
        }
      }

      // Point at the end (Touch Center)
      const e = ort(ENDE, 0, kam);
      const dE = ENDE - kam;
      const rp = Math.max(3.0, (basis * 0.012) / dE * 2);
      const puls = 1 + 0.12 * Math.sin(elapsed * 0.005);
      const nah = klemm((f - 0.55) / 0.33);

      // Expanding radius of the glowing amber light orb
      let extraOrbRadius = 1;
      if (elapsed > T_APPROACH) {
        const holdProgress = Math.min(1, (elapsed - T_APPROACH) / T_HOLD);
        extraOrbRadius = 1 + holdProgress * 2.8;
      }

      // Ambient radial gradient
      const orbRadius = rp * (8 + 28 * nah) * puls * extraOrbRadius;
      const gr = g.createRadialGradient(e[2], e[3], 0, e[2], e[3], orbRadius);
      gr.addColorStop(0, `rgba(255, 175, 115, ${0.35 + 0.55 * nah})`);
      gr.addColorStop(0.35, `rgba(255, 95, 0, ${0.18 + 0.35 * nah})`);
      gr.addColorStop(0.7, `rgba(255, 60, 0, ${0.08 * nah})`);
      gr.addColorStop(1, 'rgba(255, 60, 0, 0)');
      g.globalAlpha = 1;
      g.fillStyle = gr;
      g.fillRect(0, 0, W, H);

      // Central white point
      g.fillStyle = '#fff4e6';
      g.beginPath();
      g.arc(e[2], e[3], rp * puls * (1 + 0.5 * nah), 0, 6.2832);
      g.fill();
      zp = [e[2], e[3]];

      // Cross flare beams
      if (nah > 0.4) {
        const flareAlpha = klemm((nah - 0.4) / 0.6);
        const flareLen = (W * 0.35) * extraOrbRadius;
        g.strokeStyle = `rgba(255, 255, 255, ${flareAlpha * 0.85})`;
        g.lineWidth = 2;
        g.beginPath();
        g.moveTo(e[2] - flareLen, e[3]);
        g.lineTo(e[2] + flareLen, e[3]);
        g.moveTo(e[2], e[3] - flareLen * 0.6);
        g.lineTo(e[2], e[3] + flareLen * 0.6);
        g.stroke();
      }

      // Michelangelo Hands Drawing
      if (handL.complete && handL.naturalWidth && handR.complete && handR.naturalWidth) {
        // hh moves from 0 to 1 as f moves from 0.4 to 0.88
        const hh = klemm((f - 0.4) / 0.48);
        const eh = 1 - Math.pow(1 - hh, 3);
        const ms = (Math.max(W * 0.9, Math.min(W * 1.8, 920))) / HK.breit;
        const ab = (1 - eh) * W * 0.32 - 1.5 * eh;

        g.globalCompositeOperation = 'source-over';
        g.globalAlpha = 1;

        const leftX = e[2] - ab - HK.xl * ms;
        const leftY = e[3] - HK.tyl * ms;
        const rightX = e[2] + ab - HK.xr * ms;
        const rightY = e[3] - HK.tyr * ms;

        g.drawImage(handL, leftX, leftY, handL.naturalWidth * ms, handL.naturalHeight * ms);
        g.drawImage(handR, rightX, rightY, handR.naturalWidth * ms, handR.naturalHeight * ms);

        g.globalCompositeOperation = 'lighter';
      }

      // Check Knall trigger
      if (elapsed >= T_APPROACH + T_HOLD && !knallStarted) {
        knallStarted = true;
        tKnall = currentTime;
      }

      // Radial Light Burst ("Knall") expanding smoothly to engulf screen
      if (knallStarted) {
        const kn = klemm((currentTime - tKnall) / T_KNALL);
        if (kn > 0) {
          const ek = kn * kn * (3 - 2 * kn);
          const rad = Math.max(1, ek * Math.hypot(W, H) * 1.6);
          const ex = zp[0] || W / 2;
          const ey = zp[1] || H / 2;

          g.globalCompositeOperation = 'source-over';
          g.globalAlpha = 1;
          const gk = g.createRadialGradient(ex, ey, 0, ex, ey, rad);
          gk.addColorStop(0, '#fffdf8');
          gk.addColorStop(0.45, '#f6f0e6');
          gk.addColorStop(0.72, '#efe7da');
          gk.addColorStop(1, 'rgba(239,231,218,0)');

          g.fillStyle = gk;
          g.fillRect(0, 0, W, H);

          if (kn >= 1) {
            g.fillStyle = '#F1EFEA';
            g.fillRect(0, 0, W, H);
            finished = true;
            onComplete();
            return;
          }
        }
      }

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        finished = true;
        if (onCancel) onCancel();
        else onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', mass);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onComplete, onCancel]);

  if (!isActive) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black overflow-hidden select-none cursor-pointer"
      onClick={() => (onCancel ? onCancel() : onComplete())}
      role="dialog"
      aria-label="Opening Project"
    >
      {/* 1:1 Peaches.world Canvas Engine */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Bottom Interface Frame with subtle divider line & frame counters */}
      <div className="absolute bottom-8 left-8 right-8 pointer-events-none z-40">
        <div className="w-full h-[1px] bg-white/20 mb-3" />
        <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs tracking-widest text-white/50 uppercase">
          <div>
            CLICK OR PRESS <span className="text-white/80 font-bold">ESC</span> TO OPEN
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span ref={counterRef} className="text-white font-bold tracking-wider">
              057
            </span>
            <span ref={subCounterRef} className="text-white/40 text-[9px]">
              064
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
