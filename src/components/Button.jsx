function Button({ loading, children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`btn ${className}`}
      disabled={loading || props.disabled}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;
