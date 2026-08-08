import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (fullName === "" || email === "" || password === "") {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }

    console.log("Đăng ký:", { fullName, email, password });
    setError("");
    alert("Đăng ký thành công (demo)");
  }

  return (
    <div className="auth-page">
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <label>Họ và tên</label>
        <input
          type="text"
          value={fullName}
          onChange={function (e) {
            setFullName(e.target.value);
          }}
        />

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

        <label>Nhập lại mật khẩu</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={function (e) {
            setConfirmPassword(e.target.value);
          }}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Đăng ký</button>
      </form>

      <p>
        Đã có tài khoản? <Link to="/dang-nhap">Đăng nhập</Link>
      </p>
    </div>
  );
}

export default Register;
