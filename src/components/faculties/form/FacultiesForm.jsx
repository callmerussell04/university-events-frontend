import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';

const FacultiesForm = ({ faculty, handleChange }) => {
    return (
        <>
            <Input name='name' label='Название' value={faculty.name} onChange={handleChange}
                type='text' required />
        </>
    );
};

FacultiesForm.propTypes = {
    faculty: PropTypes.object,
    handleChange: PropTypes.func,
};

export default FacultiesForm;
