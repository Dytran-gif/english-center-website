import React from 'react';
import "./QuickPractice.css";

// Mock data: Dữ liệu bài tập ngắn tập trung vào 4 kỹ năng của trang Skill
const quickPracticeSkillData = [
    { 
        id: 1, 
        title: 'Listen to a short podcast', 
        skill: 'Listening', 
        time: '5 mins', 
        icon: 'fa-solid fa-headphones',
        colorClass: 'sqp-blue' 
    },
    { 
        id: 3, 
        title: 'Read a news article', 
        skill: 'Reading', 
        time: '7 mins', 
        icon: 'fa-solid fa-book-open',
        colorClass: 'sqp-green' 
    },
    { 
        id: 4, 
        title: 'Write a short email', 
        skill: 'Writing', 
        time: '15 mins', 
        icon: 'fa-solid fa-pen-to-square',
        colorClass: 'sqp-orange' 
    }
];

export default function QuickPracticeSkillFE() {
    return (
        <section className="skill-qp-card">
            {/* Header */}
            <header className="sqp-header">
                <div className="sqp-header-text">
                    <h2 className="sqp-title">Quick Practice</h2>
                    <p className="sqp-subtitle">Short exercises to keep your skills sharp.</p>
                </div>
            </header>

            {/* Danh sách bài tập */}
            <div className="sqp-list">
                {quickPracticeSkillData.map((item) => (
                    <div key={item.id} className="sqp-item">
                        {/* Icon kỹ năng */}
                        <div className={`sqp-icon-box ${item.colorClass}`}>
                            <i className={item.icon}></i>
                        </div>
                        
                        {/* Nội dung */}
                        <div className="sqp-content">
                            <h3 className="sqp-item-title">{item.title}</h3>
                            <p className="sqp-item-desc">{item.skill} • {item.time}</p>
                        </div>
                        
                        {/* Nút Play (đặc trưng của trang Skill) */}
                        <button className="sqp-play-btn" aria-label={`Start ${item.skill} practice`}>
                            <i className="fa-solid fa-play"></i>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}