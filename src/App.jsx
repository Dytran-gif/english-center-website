import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TeacherList from "./pages/TeacherList";
import TeacherDetail from "./pages/TeacherDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/khoa-hoc/:id" element={<CourseDetail />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/giao-vien" element={<TeacherList />} />
        <Route path="/giao-vien/:id" element={<TeacherDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
