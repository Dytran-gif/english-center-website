import { performanceData } from "../../../../data/StudentData/DashboardData";

const radarCenter = {
    x: 150,
    y: 130,
};

const radarRadius = 92;

function getRadarPoint(
    value: number,
    index: number,
) {
    const total = 5;

    const angle =
        -Math.PI / 2 +
        (index * 2 * Math.PI) / total;

    const radius =
        (value / 100) * radarRadius;

    return {
        x:
            radarCenter.x +
            Math.cos(angle) * radius,

        y:
            radarCenter.y +
            Math.sin(angle) * radius,
    };
}

function getRadarPoints(values: number[]) {
    return values
        .map((value, index) => {
            const point = getRadarPoint(
                value,
                index,
            );

            return `${point.x},${point.y}`;
        })
        .join(" ");
}

export default function Performance() {
    const performanceValues = [
        performanceData.pronunciation,
        performanceData.fluency,
        performanceData.intonation,
        performanceData.grammar,
        performanceData.vocabulary,
    ];

    const performancePoints =
        getRadarPoints(performanceValues);

    return (
        <section className="performance-card">
            <div className="performance-header">
                <h2>Performance</h2>
            </div>

            <div className="performance-radar">
                <div className="performance-label label-top">
                    <span>Pronunciation</span>
                    <strong>
                        {performanceData.pronunciation}%
                    </strong>
                </div>

                <div className="performance-label label-left">
                    <span>Vocabulary</span>
                    <strong>
                        {performanceData.vocabulary}%
                    </strong>
                </div>

                <div className="performance-label label-right">
                    <span>Fluency</span>
                    <strong>
                        {performanceData.fluency}%
                    </strong>
                </div>

                <div className="performance-label label-bottom-left">
                    <span>Grammar</span>
                    <strong>
                        {performanceData.grammar}%
                    </strong>
                </div>

                <div className="performance-label label-bottom-right">
                    <span>Intonation</span>
                    <strong>
                        {performanceData.intonation}%
                    </strong>
                </div>

                <svg
                    className="performance-svg"
                    viewBox="0 0 300 240"
                >
                    <polygon
                        points={getRadarPoints([
                            100,
                            100,
                            100,
                            100,
                            100,
                        ])}
                        className="radar-grid radar-grid-outer"
                    />

                    <polygon
                        points={getRadarPoints([
                            80,
                            80,
                            80,
                            80,
                            80,
                        ])}
                        className="radar-grid"
                    />

                    <polygon
                        points={getRadarPoints([
                            60,
                            60,
                            60,
                            60,
                            60,
                        ])}
                        className="radar-grid"
                    />

                    <polygon
                        points={getRadarPoints([
                            40,
                            40,
                            40,
                            40,
                            40,
                        ])}
                        className="radar-grid"
                    />

                    <polygon
                        points={getRadarPoints([
                            20,
                            20,
                            20,
                            20,
                            20,
                        ])}
                        className="radar-grid"
                    />

                    {[0, 1, 2, 3, 4].map(
                        (index) => {
                            const point =
                                getRadarPoint(
                                    100,
                                    index,
                                );

                            return (
                                <line
                                    key={index}
                                    x1={
                                        radarCenter.x
                                    }
                                    y1={
                                        radarCenter.y
                                    }
                                    x2={point.x}
                                    y2={point.y}
                                    className="radar-axis"
                                />
                            );
                        },
                    )}

                    <polygon
                        points={performancePoints}
                        className="radar-data"
                    />

                    {performanceValues.map(
                        (value, index) => {
                            const point =
                                getRadarPoint(
                                    value,
                                    index,
                                );

                            return (
                                <circle
                                    key={index}
                                    cx={point.x}
                                    cy={point.y}
                                    r="4"
                                    className="radar-dot"
                                />
                            );
                        },
                    )}

                    <text
                        x="150"
                        y="136"
                        textAnchor="middle"
                        className="radar-score"
                    >
                        {performanceData.overall}%
                    </text>
                </svg>
            </div>

            <div className="performance-dots">
                <span className="active" />
                <span />
                <span />
                <span />
            </div>

            <button
                type="button"
                className="performance-next"
            >
                View next skill
                <span>→</span>
            </button>
        </section>
    );
}