import { aiSuggestedData } from "../../../../data/StudentData/DashboardData";

export default function AISuggested() {
    return (
        <section className="ai-suggested">
            <div className="ai-header">
                <h2>AI suggested learning</h2>

                <div className="ai-navigation">
                    <button type="button">‹</button>
                    <span>Today</span>
                    <button type="button">›</button>
                </div>
            </div>

            <div className="ai-cards">
                {aiSuggestedData.map((item) => (
                    <div className="ai-card" key={item.id}>
                        <span className="ai-type">
                            {item.type}
                        </span>

                        <h3>{item.title}</h3>

                        <p>{item.subtitle}</p>

                        {item.progress !== null && (
                            <div className="ai-progress">
                                <div className="ai-progress-bar">
                                    <div
                                        className="ai-progress-fill"
                                        style={{
                                            width: `${item.progress}%`,
                                        }}
                                    />
                                </div>

                                <span>{item.progress}%</span>
                            </div>
                        )}

                        <button
                            type="button"
                            className="ai-action"
                        >
                            {item.action}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}