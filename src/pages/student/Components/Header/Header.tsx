import "./Header.css";
import { Link, useLocation } from "react-router-dom";

import {
    notificationData,
    pageTitles,
    studentUser,
} from "../../../../data/StudentData/HeaderData";

import type { PageTitle } from "../../../../types";
function Header() {
    const location = useLocation();

    const page: PageTitle = pageTitles[location.pathname] || {
        title: "Student",
        subtitle: "Welcome back, Duy Nam! 👋",
    };

    return (
        <header className="student-header">
            {/* LEFT - TITLE */}
            <div className="header-title">
                <h1>{page.title}</h1>
                <p>{page.subtitle}</p>
            </div>

            {/* RIGHT */}
            <div className="header-right">
                {/* SEARCH */}
                <div className="header-search">
                    <input
                        type="text"
                        placeholder="Search anything..."
                    />

                    <Link
                        to="/search"
                        className="search-link"
                    >
                        <span className="search-icon">⌕</span>
                    </Link>
                </div>

                {/* NOTIFICATION */}
                <button
                    type="button"
                    className="notification-button"
                >
                    🔔

                    {notificationData.unreadCount > 0 && (
                        <span className="notification-badge">
                            {notificationData.unreadCount}
                        </span>
                    )}
                </button>

                {/* USER */}
                <div className="header-user">
                    <div className="user-avatar">
                        {studentUser.avatar}
                    </div>

                    <div className="user-info">
                        <strong>{studentUser.name}</strong>

                        <span>{studentUser.email}</span>
                    </div>

                    <span className="user-arrow">⌄</span>
                </div>
            </div>
        </header>
    );
}

export default Header;