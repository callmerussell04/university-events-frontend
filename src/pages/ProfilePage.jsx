import { Link } from "react-router-dom";
import AuthApiService from "../components/auth/service/AuthApiService";
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/auth/AuthContext';
import useUser from '../components/users/hooks/UserByIdHook';

const ProfilePage = () => {
    const { user, setUser } = useAuth();
    const userRole = user?.roles?.[0] ?? null;

    const navigate = useNavigate();

    const { user: userInfo } = useUser(user?.id);

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
                <h4>{userInfo.name}</h4>
                <p>Логин: {userInfo.username}</p>
                <p>Почта: {userInfo.email}</p>
                <p>Номер телефона: {userInfo.phoneNumber}</p>
                {userRole === 'ROLE_STUDENT' && 
                    <p>Группа: {userInfo.groupName}</p>
                }
                {userRole === 'ROLE_STUDENT' && 
                    <Link to="/profile/survey">Анкеты</Link>
                }
                <Button className="fw-bold mt-3" variant='danger' onClick={() => {AuthApiService.logout(); navigate("/"); setUser(null);}}>Выйти</Button>
            </div>
        </>
    );
};

export default ProfilePage;