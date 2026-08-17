import { useAuth } from "../../../context/AuthContext";

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard Học viên</h1>
      <p>Xin chào {user?.full_name}. Nội dung sẽ được thêm ở đây.</p>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}
