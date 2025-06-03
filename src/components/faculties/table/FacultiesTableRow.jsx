import PropTypes from 'prop-types';
import { PencilFill, Trash3 } from 'react-bootstrap-icons';

const FacultiesTableRow = ({
    index, faculty, onDelete, onEdit,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{faculty.name}</td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onEdit)}><PencilFill /></a></td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onDelete)}><Trash3 /></a></td>
        </tr>
    );
};

FacultiesTableRow.propTypes = {
    index: PropTypes.number,
    faculty: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditInPage: PropTypes.func,
};

export default FacultiesTableRow;
