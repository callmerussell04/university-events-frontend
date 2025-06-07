import { Link } from "react-router-dom";
import Surveys from "../components/surveys/list/Surveys";

const FacultyPage = () => {
    return (
        <>
            <div className="container-lg table-responsive">
                <h3>Профиль</h3>
                <Link to="/profile/survey">Анкеты</Link>
            </div>
        </>
    );
};

export default FacultyPage;