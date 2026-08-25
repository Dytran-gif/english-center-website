import "../admin-shared.css";
import Card from "../../../components/ui/Card";
import Tag from "../../../components/ui/Tag";
import { adminMockUsers } from "../../../data/AdminData/mockUsers";

const roleLabel: Record<string, string> = {
    student: "Học viên",
    teacher: "Giáo viên",
    admin: "Admin",
};

export default function UsersManagement() {
    return (
        <div className="admin-table-page">
            <Card>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Họ tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Vai trò</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminMockUsers.map((u) => (
                            <tr key={u.user_id}>
                                <td>{u.full_name}</td>
                                <td>{u.email}</td>
                                <td>{u.phone}</td>
                                <td>
                                    <Tag tone={u.role === "admin" ? "red" : u.role === "teacher" ? "green" : "ink"}>
                                        {roleLabel[u.role]}
                                    </Tag>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
