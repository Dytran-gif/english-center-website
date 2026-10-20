import { nextLessonData } from "../../../../data/StudentData/DashboardData";
import bannerImage from "../../../../assets/images/Banner-dashboard.png";
import bannerArrowImage from "../../../../assets/images/Banner-arrow-dashboard.png";
import "./NextLesson.css"

export default function NextLessonFE() {
    return (
        <section className="next-lesson-section">
            {/* Lớp nền gradient mờ */}
            <div className="bg-gradient-overlay"></div>

            {/* Cột trái: Thông tin kêu gọi hành động */}
            <div className="left-column">
                <span className="badge">
                    Continue Learning
                </span>

                <h2 className="title">
                    Your next lesson is ready!
                </h2>

                <p className="description">
                    Continue where you left off and make progress towards your goals.
                </p>

                <button className="continue-btn">
                    <svg className="icon-play" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Continue Lesson</span>
                </button>
            </div>

            {/* Cột giữa: Thẻ bài học */}
            <div className="middle-column card">
                <img
                    src={nextLessonData.imageUrl || "/api/placeholder/400/200"}
                    alt={nextLessonData.title}
                    className="card-image"
                />
                <h3 className="card-title">
                    {nextLessonData.unit}: {nextLessonData.title}
                </h3>
                <p className="card-subtitle">
                    {nextLessonData.lessonName} • {nextLessonData.type}
                </p>

                <div className="progress-wrapper">
                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{ width: `${nextLessonData.progress}%` }}
                        ></div>
                    </div>
                    <span className="progress-text">
                        {nextLessonData.progress}%
                    </span>
                </div>
            </div>

            {/* Cột phải: Hình ảnh minh họa */}
            <div className="right-column">
                <div className="decorative-text">
                    Better English <br /> Brighter Future
                </div>
                <img
                    src={bannerArrowImage}
                    className="arrow-image"
                />
                <img
                    src={bannerImage}
                    alt={nextLessonData.title}
                    className="illustration-image"
                />
            </div>
        </section>
    );
}