import LogoMark from "../LogoMark.jsx";

export default function Footer() {
  return (
    <footer className="ep-footer">
      <div className="brand">
        <LogoMark variant="footer" animated={false} />
      </div>
      <div className="meta">São Paulo · 2026 · Convite pessoal</div>
    </footer>
  );
}
