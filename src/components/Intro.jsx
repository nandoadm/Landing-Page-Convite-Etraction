import LogoMark from "./LogoMark.jsx";

export default function Intro({ done }) {
  return (
    <div className={`ep-intro${done ? " hide" : ""}`} aria-hidden={done}>
      <LogoMark variant="intro" animated />
    </div>
  );
}
