import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useFaculties from '../../faculties/hooks/FacultiesHook.js';

const UsersForm = ({ user, handleChange }) => {
    const { faculties } = useFaculties();

    return (
        <>
            <Input name='name' label='Название' value={user.name} onChange={handleChange}
                type='text' required />
            <Select values={faculties} name='facultyId' label='Факультет' value={user.facultyId} onChange={handleChange}
                required />
        </>
    );
};

UsersForm.propTypes = {
    user: PropTypes.object,
    handleChange: PropTypes.func,
};

export default UsersForm;
