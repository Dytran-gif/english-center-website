//import { useAuth } from "../../../context/AuthContext";
import "./Dashboard.css"
// Components
import StatCards from "./Components/StatsCard";
import AISuggested from "./Components/AISuggested";
import Performance from "./Components/Performance";
import LearningProcess from "./Components/LearningProcess";
import StudyTime from "./Components/StudyTime";

export default function StudentDashboard() {
  //const { logout } = useAuth();
  return (
    <div className="container">
        <div className="row">
            <div className="col-8">
                <StatCards />
                <AISuggested />
            </div>

            {/* Performance */}
            <div className="col-4">
                <Performance />
            </div>
            <div className="row">{/* Learning Process */}
                <div className="col-6">
                    <LearningProcess />
                </div>

            {/* Study Time */}
                <div className="col-6">
                    <StudyTime />
                </div>
            </div>
        </div>
    </div>
  );
}
