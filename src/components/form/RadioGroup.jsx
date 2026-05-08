export default function RadioGroup({ name }) {
  const opts = [
    { value: "Sim", label: "Sim" },
    { value: "Não", label: "Não" },
  ];

  return (
    <div className="ep-radio-group">
      {opts.map((option) => (
        <label key={option.value} className="ep-radio">
          <input type="radio" name={name} value={option.value} required />
          <span className="dot" />
          {option.label}
        </label>
      ))}
    </div>
  );
}
