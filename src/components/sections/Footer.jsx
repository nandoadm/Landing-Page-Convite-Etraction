import LogoMark from "../LogoMark.jsx";

export default function Footer() {
  return (
    <footer className="ep-footer">
      <div className="brand">
        <LogoMark variant="footer" animated={false} />
      </div>
      <div className="meta">São Paulo · MMXXVI · Convite pessoal</div>
    </footer>
  );
}
