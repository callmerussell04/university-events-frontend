import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import { useState } from 'react';

const StatsForm = ({ statsDates, handleChange }) => {;

    const [isEndDateInvalid, setIsEndDateInvalid] = useState(false);

    const validateDates = (start, end) => {
        if (start && end) {
            const isInvalid = new Date(end) < new Date(start);
            setIsEndDateInvalid(isInvalid);
        } else {
            setIsEndDateInvalid(false);
        }
    };

    return (
        <>
            <Input name='startDate' label='Начало' value={statsDates.startDate} onChange={handleChange}
                type='date' required />
            <Input name='endDate' label='Окончание' value={statsDates.endDate} onChange={(e) => {
                validateDates(statsDates.startDate, e.target.value);
                handleChange(e);
            }}
                type='date' isInvalid={isEndDateInvalid} required />
        </>
    );
};

StatsForm.propTypes = {
    event: PropTypes.object,
    handleChange: PropTypes.func,
};

export default StatsForm;
