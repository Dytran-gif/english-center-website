import { useParams, Link } from "react-router-dom";
import { courses, teachers } from "../data/mockData";
import "../styles/CourseDetail.css";

function CourseDetail() {
  const params = useParams();
  const courseId = parseInt(params.id);
  const course = courses.find(function (c) {
    return c.id === courseId;
  });

  if (!course) {
    return <p>Không tìm thấy khóa học.</p>;
  }

  const teacher = teachers.find(function (t) {
    return t.id === course.teacherId;
  });

  return (
    <div className="course-detail">
      <Link to="/">← Quay lại</Link>
      <img src={course.image} alt={course.name} />
      <h1>{course.name}</h1>
      <p className="price">{course.price}</p>
      <p>Thời lượng: {course.duration}</p>
      <p>Lịch học: {course.schedule}</p>
      <p>{course.description}</p>

      <h3>Nội dung khóa học</h3>
      <ul>
        {course.outline.map(function (item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      {teacher && (
        <div className="course-teacher">
          <h3>Giáo viên phụ trách</h3>
          <Link to={"/giao-vien/" + teacher.id}>
            {teacher.name} - {teacher.score}
          </Link>
        </div>
      )}

      <button className="btn-register">Đăng ký ngay</button>
    </div>
  );
}

export default CourseDetail;
