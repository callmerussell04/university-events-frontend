import PropTypes from 'prop-types';
import { PencilFill } from 'react-bootstrap-icons';

const SupportTicketsTableRow = ({
    supportticket, onEdit,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const MAX_LENGTH = 50;

    return (
        <tr>
            <th scope="row">{supportticket.id}</th>
            <td title={supportticket.userMessage}>{truncateText(supportticket.userMessage, MAX_LENGTH)}</td>
            <td title={supportticket.operatorReply}>{truncateText(supportticket.operatorReply, MAX_LENGTH)}</td>
            <td>{supportticket.operatorReply === null && <a href="#" onClick={(event) => handleAnchorClick(event, onEdit)}><PencilFill /></a>}</td>
        </tr>
    );
};

SupportTicketsTableRow.propTypes = {
    supportticket: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default SupportTicketsTableRow;