import React from 'react';
import { recommendedData } from "../../../../data/StudentData/DashboardData"; // Lấy data từ Dashboard
import "./Recommended.css";

export default function RecommendedSkillFE() {
    // Hàm phụ trợ để gắn class màu sắc cho Tag giống với thiết kế
    const getTagColorClass = (tag: string) => {
        const lowerTag = tag.toLowerCase();
        if (lowerTag.includes('listening')) return 'tag-listening';
        if (lowerTag.includes('speaking')) return 'tag-speaking';
        if (lowerTag.includes('reading')) return 'tag-reading';
        if (lowerTag.includes('writing')) return 'tag-writing';
        return 'tag-default';
    };

    return (
        <section className="skill-recommended-card">
            {/* Header */}
            <header className="sr-header">
                <div className="sr-header-text">
                    <h2 className="sr-title">Recommended for You</h2>
                    <p className="sr-subtitle">Based on your current level and learning goals.</p>
                </div>
                <button className="sr-refresh-btn">Refresh</button>
            </header>

            {/* Danh sách xếp dọc */}
            <div className="sr-list">
                {recommendedData.slice(0, 8).map((item) => (
                    <div key={item.id} className="sr-item">
                        {/* Ảnh bên trái */}
                        <img
                            src={item.imageUrl || "/api/placeholder/100/100"}
                            alt={item.title}
                            className="sr-item-img"
                        />

                        {/* Nội dung ở giữa */}
                        <div className="sr-item-content">
                            <span className={`sr-tag ${getTagColorClass(item.tag)}`}>
                                {item.tag}
                            </span>
                            <h3 className="sr-item-title">{item.title}</h3>
                            <p className="sr-item-info">{item.levelInfo}</p>
                        </div>

                        {/* Nút Start bên phải */}
                        <button className="sr-start-btn">
                            Start <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}