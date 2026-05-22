import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import Toast from "../components/Toast.jsx";
import Loader from "../components/Loader.jsx";
import API from "../lib/api";

function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [valid, setValid] = useState(null);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  //  VERIFY TOKEN
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await API.get(`/auth/reset-password/${token}`);
        setValid(res.data.valid);
      } catch {
        setValid(false);
      }
    };
    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!password || !confirm) {
      setStatus({ type: "error", message: "All fields are required" });
      return;
    }

    if (password.length < 8) {
      setStatus({
        type: "error",
        message: "Password must be at least 8 characters",
      });
      return;
    }

    if (password !== confirm) {
      setStatus({
        type: "error",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await API.post(`/auth/reset-password/${token}`, { password });

      setStatus({ type: "success", message: res.data.message });
      setTimeout(() => navigate("/forgot-password"), 2000);
    } catch {
      setStatus({
        type: "error",
        message: "Reset link expired or invalid",
      });
    } finally {
      setLoading(false);
    }
  };

  if (valid === null) return <Loader />;

  if (!valid) {
    return (
      <h4 className="text-danger text-center mt-5">
        Reset link expired or invalid
      </h4>
    );
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <h3 className="text-center mb-4">Reset Password</h3>

      <form onSubmit={handleSubmit}>
        <Input
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          label="Confirm Password"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <Button className="btn-success w-100" loading={loading} type="submit">
          Reset Password
        </Button>
      </form>

      <Toast type={status.type} message={status.message} />
    </div>
  );
}

export default ResetPasswordPage;
