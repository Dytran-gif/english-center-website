import { studyTimeData } from "../../../../data/StudentData/DashboardData";

export default function StudyTime() {
    const maxMinutes = 60;

    return (
        <section className="study-time">
            <div className="study-time-header">
                <h2>Study time</h2>

                <span>
                    Goal: {studyTimeData.goal} min
                </span>
            </div>

            <div className="study-time-chart">
                <div className="study-y-axis">
                    <span>60 min</span>
                    <span>50 min</span>
                    <span>40 min</span>
                    <span>30 min</span>
                    <span>20 min</span>
                    <span>10 min</span>
                    <span>0</span>
                </div>

                <div className="chart-area">
                    <div className="chart-grid">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <div
                        className="goal-line"
                        style={{
                            bottom: `${
                                (studyTimeData.goal /
                                    maxMinutes) *
                                100
                            }%`,
                        }}
                    >
                        <span>Goal</span>
                    </div>

                    <div className="study-bars">
                        {studyTimeData.data.map(
                            (item, index) => {
                                const height =
                                    (item.minutes /
                                        maxMinutes) *
                                    100;

                                const isToday =
                                    index ===
                                    studyTimeData.data
                                        .length -
                                        1;

                                return (
                                    <div
                                        className="study-bar-item"
                                        key={item.day}
                                    >
                                        <span className="study-value">
                                            {item.minutes} min
                                        </span>

                                        <div className="study-bar-wrapper">
                                            <div
                                                className={`study-bar ${
                                                    isToday
                                                        ? "today"
                                                        : ""
                                                }`}
                                                style={{
                                                    height: `${height}%`,
                                                }}
                                            />
                                        </div>

                                        <span className="study-day">
                                            {item.day}
                                        </span>
                                    </div>
                                );
                            },
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}