import { motion, useReducedMotion } from "motion/react";

export default function LogoMark({ variant = "intro", animated = true }) {
  const logoSrc = `${import.meta.env.BASE_URL}logo-etraction.svg`;
  const reducedMotion = useReducedMotion();
  const shouldAnimate = animated && !reducedMotion;

  return (
    <div className={`ep-logo ep-logo-${variant}${shouldAnimate ? " is-animated" : " is-static"}`}>
      <div className="ep-logo-frame">
        {shouldAnimate && (
          <motion.svg
            className="ep-logo-orbit-svg"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.985, 1, 1, 1.01] }}
            transition={{
              duration: 3.1,
              times: [0, 0.18, 0.82, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <defs>
              <linearGradient id="ep-orbit-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DA9E2E" />
                <stop offset="50%" stopColor="#FBEC85" />
                <stop offset="100%" stopColor="#D39528" />
              </linearGradient>

              <filter id="ep-orbit-glow" x="-40%" y="-80%" width="180%" height="260%">
                <feGaussianBlur stdDeviation="1.7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.rect
              x="1.2"
              y="1.2"
              width="97.6"
              height="37.6"
              rx="19"
              fill="none"
              stroke="rgba(212, 160, 90, 0.12)"
              strokeWidth="0.25"
            />

            <motion.rect
              x="1.2"
              y="1.2"
              width="97.6"
              height="37.6"
              rx="19"
              fill="none"
              stroke="url(#ep-orbit-gold)"
              strokeWidth="0.7"
              strokeLinecap="round"
              filter="url(#ep-orbit-glow)"
              initial={{ pathLength: 0.12, pathOffset: 0 }}
              animate={{
                pathLength: [0.12, 0.22, 0.18, 0.12],
                pathOffset: [0, 0.38, 0.74, 1],
              }}
              transition={{
                duration: 2.45,
                ease: "linear",
                repeat: Infinity,
              }}
            />

            <motion.rect
              x="1.2"
              y="1.2"
              width="97.6"
              height="37.6"
              rx="19"
              fill="none"
              stroke="#FBEC85"
              strokeWidth="0.35"
              strokeLinecap="round"
              opacity="0.6"
              initial={{ pathLength: 0.045, pathOffset: 0.06 }}
              animate={{
                pathLength: [0.045, 0.075, 0.045],
                pathOffset: [0.06, 0.46, 1.06],
              }}
              transition={{
                duration: 2.45,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </motion.svg>
        )}

        <motion.img
          src={logoSrc}
          alt="Etraction Partner Premium"
          draggable="false"
          initial={
            shouldAnimate
              ? { opacity: 0, y: 12, scale: 0.985, filter: "blur(8px) brightness(0.82)" }
              : false
          }
          animate={
            shouldAnimate
              ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px) brightness(1)" }
              : false
          }
          transition={{
            duration: 1.15,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {shouldAnimate && (
          <motion.span
            className="ep-logo-reveal"
            aria-hidden="true"
            initial={{ opacity: 0, x: "-35%", skewX: -14 }}
            animate={{ opacity: [0, 0.85, 0], x: ["-35%", "290%", "650%"] }}
            transition={{
              duration: 1.7,
              delay: 0.52,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        )}

        {shouldAnimate && (
          <motion.span
            className="ep-logo-shine"
            aria-hidden="true"
            initial={{ opacity: 0, x: "-40%", skewX: -18 }}
            animate={{ opacity: [0, 0.48, 0], x: ["-40%", "260%", "640%"] }}
            transition={{
              duration: 1.22,
              delay: 1.85,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        )}
      </div>
    </div>
  );
}