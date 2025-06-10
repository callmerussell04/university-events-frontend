import PropTypes from 'prop-types';
import { PencilFill, Trash3 } from 'react-bootstrap-icons';
import { useAuth } from '../../auth/AuthContext.jsx';

const UsersTableRow = ({
    index, userObj, onDelete, onEdit,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    const { user } = useAuth();
    const userRole = user?.roles?.[0] ?? null;

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{userObj.name}</td>
            <td>{userObj.email}</td>
            <td>{userObj.username}</td>
            <td>{userObj.phoneNumber}</td>
            {userRole === 'ROLE_ADMIN' && 
            <>
            <td>{userObj.role}</td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onEdit)}><PencilFill /></a></td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onDelete)}><Trash3 /></a></td>
            </>}
        </tr>
    );
};

UsersTableRow.propTypes = {
    index: PropTypes.number,
    user: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditInPage: PropTypes.func,
};

export default UsersTableRow;
