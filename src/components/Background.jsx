import ParticleCanvas from "./ParticleCanvas.jsx";

export default function Background() {
  return (
    <>
      <ParticleCanvas />
      <div className="ep-vignette" aria-hidden="true" />
      <div className="ep-grain" aria-hidden="true" />
    </>
  );
}
