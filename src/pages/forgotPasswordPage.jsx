import { useState } from "react";
import Input from "../components/Input.jsx";
import Toast from "../components/Toast.jsx";
import Button from "../components/Button.jsx";
import API from "../lib/api.jsx";



function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!email) {
      setStatus({ type: "error", message: "Email is required" });
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/auth/forgot-password", { email });
      setStatus({ type: "success", message: res.data.message });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Forgot Password</h3>

      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button className="btn-primary w-100" loading={loading} type="submit">
          Send Reset Link
        </Button>
      </form>

      <Toast type={status.type} message={status.message} />
    </div>
  );
}

export default ForgotPasswordPage;
