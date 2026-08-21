import { learningProcessData } from "../../../../data/StudentData/DashboardData";

export default function LearningProcess() {
    const { overview, skills, message } =
        learningProcessData;

    return (
        <section className="learning-process">
            <div className="learning-header">
                <h2>Learning process</h2>
            </div>

            <div className="learning-content">
                <div className="learning-overview">
                    <h3>{overview.title}</h3>

                    <span className="learning-date">
                        From: {overview.fromDate}
                    </span>

                    <p>{overview.description}</p>

                    <div className="learning-stats">
                        <div className="learning-stat">
                            <strong>
                                {overview.modules}
                            </strong>
                            <span>Modules</span>
                        </div>

                        <div className="learning-stat">
                            <strong>
                                {overview.lessons}
                            </strong>
                            <span>Lessons</span>
                        </div>

                        <div className="learning-stat">
                            <strong>
                                {overview.hours}
                            </strong>
                            <span>Hours</span>
                        </div>

                        <div className="learning-stat">
                            <strong>
                                {overview.weeklyHours}
                            </strong>
                            <span>Hours</span>
                        </div>
                    </div>
                </div>

                <div className="learning-skills">
                    {skills.map((skill) => (
                        <div
                            className="skill-progress"
                            key={skill.name}
                        >
                            <div className="skill-progress-top">
                                <span>
                                    {skill.name}:
                                </span>

                                <strong>
                                    {skill.progress}%
                                </strong>
                            </div>

                            <div className="skill-progress-bar">
                                <div
                                    className={`skill-progress-fill ${skill.color}`}
                                    style={{
                                        width: `${Math.min(
                                            Math.max(
                                                skill.progress,
                                                0,
                                            ),
                                            100,
                                        )}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}

                    <div className="great-job">
                        <div className="great-job-icon">
                            ✨
                        </div>

                        <div>
                            <h4>{message.title}</h4>
                            <p>{message.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}