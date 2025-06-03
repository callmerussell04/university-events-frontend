import PropTypes from 'prop-types';
import { PencilFill, Trash3 } from 'react-bootstrap-icons';

const GroupsTableRow = ({
    index, group, onDelete, onEdit,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{group.name}</td>
            <td>{group.facultyName}</td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onEdit)}><PencilFill /></a></td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onDelete)}><Trash3 /></a></td>
        </tr>
    );
};

GroupsTableRow.propTypes = {
    index: PropTypes.number,
    group: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditInPage: PropTypes.func,
};

export default GroupsTableRow;
