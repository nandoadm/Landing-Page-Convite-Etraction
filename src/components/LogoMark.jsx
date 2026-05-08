import { useEffect, useRef } from "react";

export default function LogoMark() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.querySelectorAll(".stroke").forEach((el, index) => {
      try {
        const len = typeof el.getTotalLength === "function" ? el.getTotalLength() : 800;
        el.style.setProperty("--len", String(len));
        el.style.setProperty("--delay", `${index * 110}ms`);
      } catch {
        el.style.setProperty("--len", "800");
      }
    });
  }, []);

  return (
    <div className="ep-intro-logo ep-logo">
      <svg
        ref={svgRef}
        viewBox="0 0 600 240"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Etraction Partner Premium"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbec85" />
            <stop offset="25%" stopColor="#d39528" />
            <stop offset="50%" stopColor="#fbed8a" />
            <stop offset="75%" stopColor="#f6e37c" />
            <stop offset="100%" stopColor="#da9e2e" />
          </linearGradient>
          <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,240,200,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <mask id="logoMask">
            <rect width="600" height="240" fill="black" />
            <text
              x="300"
              y="135"
              textAnchor="middle"
              fontFamily="Cormorant Garamond, serif"
              fontWeight="500"
              fontSize="92"
              letterSpacing="-2"
              fill="white"
            >
              etraction
            </text>
          </mask>
        </defs>

        <text
          className="stroke"
          x="300"
          y="135"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontWeight="500"
          fontSize="92"
          letterSpacing="-2"
          stroke="#f5ead4"
          fill="none"
          strokeWidth="1.1"
        >
          etraction
        </text>

        <g className="fillin">
          <text
            x="300"
            y="135"
            textAnchor="middle"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="500"
            fontSize="92"
            letterSpacing="-2"
            fill="#f5ead4"
          >
            etraction
          </text>
          <circle cx="430" cy="138" r="3.6" fill="url(#goldGrad)" />
        </g>

        <g mask="url(#logoMask)" className="shimmer">
          <rect x="-200" y="0" width="200" height="240" fill="url(#shimmerGrad)" />
        </g>

        <g className="sub">
          <line x1="220" y1="170" x2="280" y2="170" stroke="#a07a3e" strokeWidth="0.8" />
          <circle cx="300" cy="170" r="1.6" fill="#d4a05a" />
          <line x1="320" y1="170" x2="380" y2="170" stroke="#a07a3e" strokeWidth="0.8" />
          <text
            x="300"
            y="200"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            fontSize="14"
            letterSpacing="6"
            fill="url(#goldGrad)"
          >
            PARTNER PREMIUM
          </text>
        </g>
      </svg>
    </div>
  );
}
