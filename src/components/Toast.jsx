function Toast({ type, message }) {
  if (!message) return null;

  const alertClass = type === "success" ? "alert-success" : "alert-danger";

  return <div className={`alert mt-3 ${alertClass}`}>{message}</div>;
}

export default Toast;
