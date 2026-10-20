
import { learningGoalData } from "../../../../data/StudentData/DashboardData"; // Đảm bảo đường dẫn đúng
import "./LearningGoal.css";

export default function LearningGoalFE() {
    return (
        <section className="learning-goal-card">
            {/* Header của thẻ */}
            <header className="lg-header">
                <div className="lg-title-group">
                    <div className="lg-icon">
                        {/* Icon mục tiêu (target/bullseye) */}
                        <i className="fa-solid fa-bullseye"></i>
                    </div>
                    <h2 className="lg-title">My Learning Goal</h2>
                </div>
                <button className="lg-edit-btn">Edit</button>
            </header>

            {/* Nội dung chính */}
            <div className="lg-content">
                <div className="lg-info-row">
                    <h3 className="lg-goal-name">{learningGoalData.title}</h3>
                    <span className="lg-percentage">{learningGoalData.progress}%</span>
                </div>

                {/* Thanh tiến độ */}
                <div className="lg-progress-container">
                    <div className="lg-progress-track">
                        <div 
                            className="lg-progress-fill"
                            style={{ width: `${learningGoalData.progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Ngày mục tiêu */}
                <p className="lg-target-date">
                    Target date: {learningGoalData.targetDate}
                </p>
            </div>
        </section>
    );
}