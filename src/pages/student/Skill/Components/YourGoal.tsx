import "./YourGoal.css"
import { learningGoalData } from "../../../../data/StudentData/DashboardData"; // Đường dẫn đến data Dashboard của bạn

export default function GoalFE() {
    return (
        <section className="goal-card">
            {/* Header */}
            <header className="goal-header">
                <div className="goal-title-group">
                    <div className="goal-icon">
                        <i className="fa-solid fa-bullseye"></i>
                    </div>
                    <h2 className="goal-header-title">Your Goal</h2>
                </div>
                <button className="goal-edit-btn">Edit</button>
            </header>

            {/* Nội dung chính */}
            <div className="goal-body">
                <h3 className="goal-main-title">{learningGoalData.title}</h3>
                <p className="goal-subtitle">
                    You're {learningGoalData.progress}% there! Keep going, you can do it!
                </p>

                {/* Thanh tiến độ */}
                <div className="goal-progress-wrapper">
                    <div className="goal-progress-track">
                        <div 
                            className="goal-progress-fill"
                            style={{ width: `${learningGoalData.progress}%` }}
                        ></div>
                    </div>
                    <span className="goal-progress-percent">{learningGoalData.progress}%</span>
                </div>

                {/* Hàng thông tin dưới cùng */}
                <div className="goal-info-row">
                    <div className="goal-info-item">
                        <div className="goal-info-icon">
                            <i className="fa-regular fa-calendar"></i>
                        </div>
                        <div className="goal-info-text">
                            <span className="goal-info-label">Target date</span>
                            <strong className="goal-info-value">{learningGoalData.targetDate}</strong>
                        </div>
                    </div>

                    <div className="goal-info-item">
                        <div className="goal-info-icon">
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <div className="goal-info-text">
                            <span className="goal-info-label">Study time / week</span>
                            {/* Hiển thị biến goalTime đã thêm */}
                            <strong className="goal-info-value">
                                {(learningGoalData as any).goalTime}
                            </strong>
                        </div>
                    </div>
                </div>

                {/* Trang trí góc phải (Hình núi / Badge decor) */}
                <div className="goal-decoration">
                    <i className="fa-solid fa-mountain"></i>
                </div>
            </div>
        </section>
    );
}