import { useEffect, useState } from "react";

export default function StickyCTA({ onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const form = document.getElementById("ep-form-anchor");
      const nearForm = form ? window.innerHeight + y > form.offsetTop - 80 : false;

      setVisible(y > window.innerHeight * 0.6 && !nearForm);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button className={`ep-sticky${visible ? " visible" : ""}`} onClick={onClick} type="button">
      Confirmar presença
    </button>
  );
}
