import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // ngăn form load lại trang

    if (email === "" || password === "") {
      setError("Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }

    // Chưa có backend nên tạm log ra console
    console.log("Đăng nhập với:", email, password);
    setError("");
    alert("Đăng nhập thành công (demo)");
  }

  return (
    <div className="auth-page">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={function (e) {
            setEmail(e.target.value);
          }}
        />

        <label>Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={function (e) {
            setPassword(e.target.value);
          }}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Đăng nhập</button>
      </form>

      <p>
        Chưa có tài khoản? <Link to="/dang-ky">Đăng ký</Link>
      </p>
    </div>
  );
}

export default Login;
