import "../teacher-shared.css";
import Card from "../../../components/ui/Card";
import { courses } from "../../../data/courses";
import { CURRENT_TEACHER_ID } from "../../../data/TeacherData/currentTeacher";

export default function Schedule() {
    const myCourses = courses.filter((c) => c.teacher_id === CURRENT_TEACHER_ID);

    return (
        <div className="teacher-table-page">
            <Card>
                <table className="teacher-table">
                    <thead>
                        <tr>
                            <th>Khóa học</th>
                            <th>Lịch học</th>
                            <th>Trình độ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCourses.map((c) => (
                            <tr key={c.course_id}>
                                <td>{c.course_name}</td>
                                <td>{c.schedule}</td>
                                <td>{c.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
