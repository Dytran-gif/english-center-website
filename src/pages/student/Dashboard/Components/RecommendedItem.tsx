import React, { useRef, useState } from 'react';
import { recommendedData } from "../../../../data/StudentData/DashboardData"; // Đường dẫn tuỳ thuộc cấu trúc của bạn
import "./RecommendedItem.css";

export default function RecommendedItemFE() {
    // Xử lý kéo thả bằng chuột cho thanh cuộn ngang
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 0.5; // Tốc độ cuộn 1:1
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="recommended-section">
            {/* Tiêu đề của phần Đề xuất */}
            <header className="recommended-header">
                <div className="recommended-icon">
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="recommended-header-text">
                    <h2 className="recommended-title">Recommended for you</h2>
                    <p className="recommended-subtitle">Based on your progress and learning goals</p>
                </div>
            </header>

            {/* Vùng chứa cuộn ngang */}
            <div
                className={`recommended-scroll-wrapper ${isDragging ? 'active-drag' : ''}`}
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUpOrLeave}
                onMouseUp={handleMouseUpOrLeave}
                onMouseMove={handleMouseMove}
            >
                {recommendedData.map((item) => (
                    <div key={item.id} className="recommended-card">
                        {/* Ảnh vuông bên trái */}
                        <img
                            src={item.imageUrl || "/api/placeholder/100/100"}
                            alt={item.title}
                            className="recommended-image"
                        />

                        {/* Nội dung bên phải */}
                        <div className="recommended-content">
                            <span className="recommended-tag">{item.tag}</span>
                            <h3 className="recommended-item-title">{item.title}</h3>
                            <p className="recommended-item-info">{item.levelInfo}</p>
                            <button className="recommended-start-btn">Start</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}