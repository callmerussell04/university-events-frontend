import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { useAuth } from '../../auth/AuthContext.jsx';

const UsersTable = ({ children }) => {
    const { user } = useAuth();
    const userRole = user?.roles?.[0] ?? null;
    
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Email</th>
                    <th scope="col">Логин</th>
                    <th scope="col">Номер телефона</th>
                    {userRole === 'ROLE_ADMIN' && 
                    <>
                    <th scope="col">Роль</th>
                    <th scope="col" />
                    <th scope="col" />
                    </>}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </Table >
    );
};

UsersTable.propTypes = {
    children: PropTypes.node,
};

export default UsersTable;
