import { memo, useEffect, useRef, useState } from "react";

const Reveal = memo(function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const element = ref.current;
    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }

    let timer = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = window.setTimeout(() => setShown(true), delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`ep-reveal${shown ? " in" : ""}`}>
      {children}
    </div>
  );
});

export default Reveal;
