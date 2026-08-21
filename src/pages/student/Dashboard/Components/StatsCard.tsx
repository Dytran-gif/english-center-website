import { statsData } from "../../../../data/StudentData/DashboardData";

export default function StatCards() {
    return (
        <section className="dashboard-stats">
            <div className="stat-card stat-points">
                <div className="stat-top">
                    <div className="stat-icon">🏅</div>

                    <div>
                        <h2>{statsData.points.value}</h2>
                        <p>Points</p>
                    </div>
                </div>

                <div className="stat-bottom">
                    ↑ {statsData.points.change}% this week
                </div>
            </div>

            <div className="stat-card stat-streak">
                <div className="stat-top">
                    <div className="stat-icon">🔥</div>

                    <div>
                        <h2>{statsData.streak.value}</h2>
                        <p>Streak</p>
                    </div>
                </div>

                <div className="stat-bottom">
                    {statsData.streak.message}
                </div>
            </div>

            <div className="stat-card stat-courses">
                <div className="stat-top">
                    <div className="stat-icon">📚</div>

                    <div>
                        <h2>{statsData.courses.value}</h2>
                        <p>Courses</p>
                    </div>
                </div>

                <div className="stat-bottom">
                    {statsData.courses.message} active
                </div>
            </div>

            <div className="stat-card stat-attendance">
                <div className="stat-top">
                    <div className="stat-icon">✓</div>

                    <div>
                        <h2>{statsData.attendance.value}%</h2>
                        <p>Attendance</p>
                    </div>
                </div>

                <div className="stat-bottom">
                    {statsData.attendance.message}
                </div>
            </div>
        </section>
    );
}