import "../admin-shared.css";
import Card from "../../../components/ui/Card";
import Tag from "../../../components/ui/Tag";
import { courses, formatPrice } from "../../../data/courses";
import { getCategoryById } from "../../../data/categories";

// MVP: chỉ hiển thị danh sách (đọc từ mock data), chưa có thêm/sửa/xóa thật
// vì chưa có backend lưu trữ. TODO: nối form thêm/sửa khi có API thật.
export default function CoursesManagement() {
    return (
        <div className="admin-table-page">
            <Card>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Tên khóa học</th>
                            <th>Danh mục</th>
                            <th>Trình độ</th>
                            <th>Thời lượng</th>
                            <th>Học phí</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => {
                            const category = getCategoryById(course.category_id);
                            return (
                                <tr key={course.course_id}>
                                    <td>{course.course_name}</td>
                                    <td>{category && <Tag tone="red">{category.category_name}</Tag>}</td>
                                    <td>{course.level}</td>
                                    <td>{course.duration_weeks} tuần</td>
                                    <td>{formatPrice(course.price)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
