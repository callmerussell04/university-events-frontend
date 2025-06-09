import { Link } from "react-router-dom";
import AuthApiService from "../components/auth/service/AuthApiService";
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/auth/AuthContext';

const FacultyPage = () => {
    const { setUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthApiService.getCurrentUser();
        if (!user) {
            navigate("/login");
        }
    }, [navigate]);
    if(AuthApiService.getCurrentUser())
    return (
        <>
            <div className="container-lg d-flex flex-column align-items-start">
                <h3>Профиль</h3>
                <Link to="/profile/survey">Анкеты</Link>
                <Button className="fw-bold mt-3" variant='danger' onClick={() => {AuthApiService.logout(); navigate("/"); setUser(null);}}>Выйти</Button>
            </div>
        </>
    );
};

export default FacultyPage;