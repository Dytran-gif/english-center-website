import React, { useState } from 'react';
import { skillDetailData } from "../../../../data/StudentData/SkillData";
import { continueLearningData } from "../../../../data/StudentData/DashboardData"; // Dùng lại continueLearningData
import "./SkillDetails.css";

const SKILL_TABS = [
    { id: 'Listening', icon: 'fa-solid fa-headphones' },
    { id: 'Reading', icon: 'fa-solid fa-book-open' },
    { id: 'Writing', icon: 'fa-solid fa-pen-to-square' }
];

export default function SkillDetailsFE() {
    const [activeTab, setActiveTab] = useState('Listening');

    // Hàm tính chiều cao Y cho biểu đồ SVG
    const getY = (score: number) => 100 - (score / 100) * 100;

    const chartWidth = 400;
    const pointSpacing = chartWidth / (skillDetailData.chartData.length - 1 || 1);
    const points = skillDetailData.chartData.map((data, index) => {
        const x = index * pointSpacing;
        const y = getY(data.score);
        return `${x},${y}`;
    }).join(' ');

    return (
        <section className="skill-details-card">
            {/* Header: Tiêu đề và Subtitle */}
            <header className="sd-header">
                <h2 className="sd-title">Skill Details</h2>
                <p className="sd-subtitle">Explore your progress in each skill and find areas to improve.</p>
            </header>

            {/* Tabs chọn kỹ năng */}
            <div className="sd-tabs">
                {SKILL_TABS.map(tab => (
                    <button
                        key={tab.id}
                        className={`sd-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <i className={tab.icon}></i> {tab.id}
                    </button>
                ))}
            </div>

            {/* Thông tin kỹ năng hiện tại & Biểu đồ */}
            <div className="sd-chart-section">
                <div className="sd-chart-header">
                    <div className="sd-chart-info">
                        <div className="sd-chart-icon bg-blue-light text-blue">
                            <i className="fa-solid fa-headphones"></i>
                        </div>
                        <div className="sd-chart-text">
                            <h3 className="sd-skill-name">{skillDetailData.skillName}</h3>
                            <p className="sd-skill-level">{skillDetailData.levelLabel}</p>
                        </div>
                    </div>
                    <div className="sd-chart-score">
                        <span>{skillDetailData.currentScore}%</span>
                    </div>
                </div>

                {/* Biểu đồ SVG */}
                <div className="sd-chart-area">
                    <div className="sd-y-axis">
                        <span>100%</span>
                        <span>50%</span>
                        <span>0%</span>
                    </div>

                    <div className="sd-graph">
                        <svg viewBox={`0 0 ${chartWidth} 150`} preserveAspectRatio="none" className="sd-svg">
                            <line x1="0" y1="0" x2={chartWidth} y2="0" className="sd-grid-line" />
                            <line x1="0" y1="50" x2={chartWidth} y2="75" className="sd-grid-line" />
                            <line x1="0" y1="100" x2={chartWidth} y2="150" className="sd-grid-line" />

                            <polygon
                                points={`0,100 ${points} ${chartWidth},100`}
                                fill="url(#blue-gradient)"
                                opacity="0.3"
                            />

                            <polyline
                                points={points}
                                fill="none"
                                stroke="#2563eb"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {skillDetailData.chartData.map((data, index) => (
                                <circle
                                    key={index}
                                    cx={index * pointSpacing}
                                    cy={getY(data.score)}
                                    r="4"
                                    fill="#ffffff"
                                    stroke="#2563eb"
                                    strokeWidth="2"
                                />
                            ))}

                            <defs>
                                <linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="sd-x-axis">
                            {skillDetailData.chartData.map((data, index) => (
                                <span key={index}>{data.dateLabel}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hoạt động gần đây (Recent activities) sử dụng dữ liệu từ continueLearningData */}
            <div className="sd-recent-activities">
                <h3 className="sd-recent-title">Recent activities</h3>
                <div className="sd-activity-list">
                    {continueLearningData.slice(0, 3).map((course, index) => (
                        <div key={`${course.id}-${index}`} className="sd-activity-item">
                            <div className="sd-activity-icon bg-blue-light text-blue">
                                <i className="fa-solid fa-play"></i>
                            </div>
                            <div className="sd-activity-content">
                                <h4 className="sd-activity-name">{course.unit}: {course.title}</h4>
                                <p className="sd-activity-desc">{course.lesson} • {course.courseTime}</p>
                            </div>
                            <span className={`sd-status-badge ${course.progress === 100 ? 'completed' : 'view-result'}`}>
                                {course.progress === 100 ? 'Completed' : 'View result'}
                            </span>
                        </div>
                    ))}
                </div>

                <a href="#view-all-listening" className="sd-view-all-link">
                    View all listening progress <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </section>
    );
}