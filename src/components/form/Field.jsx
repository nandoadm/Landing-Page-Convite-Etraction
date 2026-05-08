export default function Field({ label, children }) {
  return (
    <div className="ep-field">
      <label className="ep-field-label">{label}</label>
      {children}
    </div>
  );
}
