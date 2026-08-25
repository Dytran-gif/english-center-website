import "../admin-shared.css";
import Card from "../../../components/ui/Card";
import { blogPosts } from "../../../data/blogPosts";

const formatter = new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
});

export default function BlogManagement() {
    return (
        <div className="admin-table-page">
            <Card>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Tiêu đề</th>
                            <th>Danh mục</th>
                            <th>Ngày đăng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogPosts.map((post) => (
                            <tr key={post.post_id}>
                                <td>{post.title}</td>
                                <td>{post.category}</td>
                                <td>{formatter.format(new Date(post.published_at))}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
