import { useState } from "react";
import API from "../lib/api";
import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({});

    try {
      setLoading(true);
      const res = await API.post("/auth/login", form);

      setStatus({ type: "success", message: res.data.message });

      setTimeout(() => navigate("/forgot-password"), 1000);
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.response?.data?.message || "Login failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Login</h3>

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        <Button className="btn-primary w-100" loading={loading}>
          Login
        </Button>
      </form>

      <div className="mt-3 text-center">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>

      <p className="mt-2 text-center">
        New user? <Link to="/register">Register</Link>
      </p>

      <Toast type={status.type} message={status.message} />
    </div>
  );
}

export default LoginPage;
