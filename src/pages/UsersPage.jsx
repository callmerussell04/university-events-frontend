import Users from "../components/users/table/Users";
import { useAuth } from '../components/auth/AuthContext';

const UsersPage = () => {
    const { user } = useAuth();
    const userRole = user?.roles?.[0] ?? null;

    return (
        <>
            <div className="container-lg table-responsive">
                {userRole === 'ROLE_ADMIN' ? (
                        <h3>Пользователи</h3>
                    ) : (
                        <h3>Студенты</h3>
                    )}
                <Users />
            </div>
        </>
    );
};

export default UsersPage;