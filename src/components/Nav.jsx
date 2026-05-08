import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`ep-nav${scrolled ? " scrolled" : ""}`}>
      <div className="ep-nav-brand">
        e.traction <span className="dot">·</span> premium
      </div>
      <div className="ep-nav-meta">São Paulo · 11.06.26</div>
    </nav>
  );
}
