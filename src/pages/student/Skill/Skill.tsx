import "../General.css"
import SkillOverviewFE from "./Components/SkillOverview";
import YourGoalFE from "./Components/YourGoal";
import SkillDetailsFE from "./Components/SkillDetails";
import RecommendedItemFE from "./Components/Recommended";
import QuickPracticeFE from "./Components/QuickPractice"; 

export default function StudentSkill() {
    return (
        <div className="container">
            <div className="row g-3">
                <div className="col-8">
                    <div className="card">
                       <SkillOverviewFE />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <YourGoalFE />
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-5">
                    <div className="card sd-card">
                       <SkillDetailsFE />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card sd-card">
                        <RecommendedItemFE />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card sd-card-1">
                        <QuickPracticeFE />
                    </div>
                </div>
            </div>
        </div>
    );
}