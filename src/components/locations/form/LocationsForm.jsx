import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';

const LocationsForm = ({ location, handleChange }) => {
    return (
        <>
            <Input name='name' label='Название' value={location.name} onChange={handleChange}
                type='text' required />
        </>
    );
};

LocationsForm.propTypes = {
    location: PropTypes.object,
    handleChange: PropTypes.func,
};

export default LocationsForm;
