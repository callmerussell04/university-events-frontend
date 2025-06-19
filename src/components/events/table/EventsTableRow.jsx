import PropTypes from 'prop-types';
import { PencilFill, Trash3 } from 'react-bootstrap-icons';

const EventsTableRow = ({
    index, event, onDelete, onEdit,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{event.name}</td>
            <td>{event.status}</td>
            <td>{event.startDateTime}</td>
            <td>{event.endDateTime}</td>
            <td>{event.organizer}</td>
            <td>{event.locationName}</td>
            <td>{event.status !== "Завершено" && <a href="#" onClick={(event) => handleAnchorClick(event, onEdit)}><PencilFill /></a>}</td>
            <td><a href="#" onClick={(event) => handleAnchorClick(event, onDelete)}><Trash3 /></a></td>
        </tr>
    );
};

EventsTableRow.propTypes = {
    index: PropTypes.number,
    event: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditInPage: PropTypes.func,
};

export default EventsTableRow;