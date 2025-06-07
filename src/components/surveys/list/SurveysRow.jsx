import PropTypes from 'prop-types';
import { PencilFill, Trash3 } from 'react-bootstrap-icons';

const SurveysRow = ({
    survey, onClick,
}) => {
    const handleAnchorClick = (event, action) => {
        event.preventDefault();
        action();
    };

    return (
        <div>
            <p><a href="#" onClick={(event) => handleAnchorClick(event, onClick)}>{survey.name}</a></p>
        </div>
    );
};

SurveysRow.propTypes = {
    index: PropTypes.number,
    survey: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditInPage: PropTypes.func,
};

export default SurveysRow;
