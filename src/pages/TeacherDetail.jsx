import { useParams, Link } from "react-router-dom";
import { teachers } from "../data/mockData";
import "../styles/TeacherPages.css";

function TeacherDetail() {
  const params = useParams();
  const teacherId = parseInt(params.id);
  const teacher = teachers.find(function (t) {
    return t.id === teacherId;
  });

  if (!teacher) {
    return <p>Không tìm thấy giáo viên.</p>;
  }

  return (
    <div className="teacher-detail">
      <Link to="/giao-vien">← Quay lại danh sách</Link>
      <img src={teacher.image} alt={teacher.name} />
      <h1>{teacher.name}</h1>
      <p><strong>{teacher.score}</strong></p>
      <p>{teacher.experience}</p>
      <p>{teacher.bio}</p>
    </div>
  );
}

export default TeacherDetail;
