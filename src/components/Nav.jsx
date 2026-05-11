import { useEffect, useState } from "react";
import LogoMark from "./LogoMark.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`ep-nav${scrolled ? " scrolled" : ""}`}>
      <div className="ep-nav-brand">
        <LogoMark variant="nav" animated={false} />
      </div>
      <div className="ep-nav-meta">São Paulo · 11.06.26</div>
    </nav>
  );
}
