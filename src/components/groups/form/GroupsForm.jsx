import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useFaculties from '../../faculties/hooks/FacultiesHook.js';

const GroupsForm = ({ group, handleChange }) => {
    const { faculties } = useFaculties();

    return (
        <>
            <Input name='name' label='Название' value={group.name} onChange={handleChange}
                type='text' required />
            <Input name='course' label='Курс' value={group.course} onChange={handleChange}
                type='number' min='1' max='6' step='1' required />
            <Select values={faculties} name='facultyId' label='Факультет' value={group.facultyId} onChange={handleChange}
                required />
        </>
    );
};

GroupsForm.propTypes = {
    group: PropTypes.object,
    handleChange: PropTypes.func,
};

export default GroupsForm;
