import { useCallback, useEffect, useState } from "react";
import Background from "./components/Background.jsx";
import Intro from "./components/Intro.jsx";
import Nav from "./components/Nav.jsx";
import StickyCTA from "./components/StickyCTA.jsx";
import Hero from "./components/sections/Hero.jsx";
import Letter from "./components/sections/Letter.jsx";
import Invitation from "./components/sections/Invitation.jsx";
import Experience from "./components/sections/Experience.jsx";
import Closing from "./components/sections/Closing.jsx";
import FormSection from "./components/sections/FormSection.jsx";
import Footer from "./components/sections/Footer.jsx";

export default function PremiumInvitationPage() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const timer = window.setTimeout(() => {
      setIntroDone(true);
    }, reduced ? 400 : 3200);

    return () => window.clearTimeout(timer);
  }, []);

  const scrollToForm = useCallback(() => {
    document.getElementById("ep-form-anchor")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const scrollToLetter = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="ep-root">
      <Background />
      <Intro done={introDone} />
      <Nav />

      <main style={{ visibility: introDone ? "visible" : "hidden" }}>
        <Hero onContinue={scrollToLetter} />
        <Letter />
        <Invitation />
        <Experience />
        <Closing />
        <FormSection />
        <Footer />
      </main>

      <StickyCTA onClick={scrollToForm} />
    </div>
  );
}
