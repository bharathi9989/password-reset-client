function Input({ label, ...props }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input className="form-control" {...props} />
    </div>
  );
}

export default Input;
