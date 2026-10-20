
import{ yourSkillsOverviewData }  from '../../../../data/StudentData/SkillData';
import './SkillOverview.css';

export default function SkillOverviewFE() {
    const { overallProgress, trend, selectedCEFRLevel, skills } = yourSkillsOverviewData;

    // Cấu hình icon và class màu sắc riêng cho từng kỹ năng
    const getSkillConfig = (skillName: string) => {
        switch (skillName) {
            case 'Listening':
                return { icon: 'fa-solid fa-headphones', colorClass: 'listening' };
            case 'Reading':
                return { icon: 'fa-solid fa-book-open', colorClass: 'reading' };
            case 'Writing':
                return { icon: 'fa-solid fa-pen-to-square', colorClass: 'writing' };
            default:
                return { icon: 'fa-solid fa-star', colorClass: 'default' };
        }
    };

    // Tính toán vòng tròn tiến độ SVG (bán kính r = 52px)
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (overallProgress / 100) * circumference;

    return (
        <section className="skill-overview-card">
            {/* Header */}
            <header className="so-header">
                <div className="so-header-left">
                    <h2 className="so-title">Your Skills Overview</h2>
                    <p className="so-subtitle">Track your progress in all 4 English skills</p>
                </div>
                <div className="so-level-dropdown">
                    <span>CEFR Level: <strong>{selectedCEFRLevel}</strong></span>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </header>

            {/* Nội dung chính */}
            <div className="so-body">
                {/* Cột trái: Vòng tròn tiến độ & Chỉ số tăng trưởng */}
                <div className="so-left-column">
                    <div className="so-circle-container">
                        <svg className="so-circle-svg" viewBox="0 0 120 120">
                            <circle
                                className="so-circle-bg"
                                cx="60"
                                cy="60"
                                r={radius}
                            />
                            <circle
                                className="so-circle-progress"
                                cx="60"
                                cy="60"
                                r={radius}
                                style={{
                                    strokeDasharray: circumference,
                                    strokeDashoffset: strokeDashoffset
                                }}
                            />
                        </svg>
                        <div className="so-circle-text">
                            <span className="so-circle-label">Overall Progress</span>
                            <span className="so-circle-value">{overallProgress}%</span>
                        </div>
                    </div>

                    {/* Chỉ số tăng trưởng so với tháng trước */}
                    <div className="so-trend-wrapper">
                        <span className={`so-trend-badge ${trend.isIncrease ? 'up' : 'down'}`}>
                            <i className={`fa-solid ${trend.isIncrease ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                            {trend.percentage}%
                        </span>
                        <span className="so-trend-text">vs. last month</span>
                    </div>
                </div>

                {/* Cột phải: Danh sách 4 kỹ năng */}
                <div className="so-right-column">
                    {skills.map((item) => {
                        const config = getSkillConfig(item.skillName);
                        return (
                            <div key={item.id} className="so-skill-row">
                                <div className={`so-icon-box ${config.colorClass}`}>
                                    <i className={config.icon}></i>
                                </div>
                                <span className="so-skill-name">{item.skillName}</span>
                                
                                <div className="so-progress-track">
                                    <div
                                        className={`so-progress-fill ${config.colorClass}`}
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>

                                <span className="so-skill-percent">{item.progress}%</span>
                                <span className="so-skill-level">{item.levelLabel}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}