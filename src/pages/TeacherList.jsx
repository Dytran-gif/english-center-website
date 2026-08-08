import { Link } from "react-router-dom";
import { teachers } from "../data/mockData";
import "../styles/TeacherPages.css";

function TeacherList() {
  return (
    <div className="teacher-list">
      <h1>Đội ngũ giáo viên</h1>
      <div className="teacher-grid">
        {teachers.map(function (t) {
          return (
            <Link to={"/giao-vien/" + t.id} key={t.id} className="teacher-card">
              <img src={t.image} alt={t.name} />
              <h3>{t.name}</h3>
              <p>{t.score}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TeacherList;
