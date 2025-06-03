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
            <Select values={faculties} name='facultyId' label='Товары' value={group.facultyId} onChange={handleChange}
                required />
        </>
    );
};

GroupsForm.propTypes = {
    group: PropTypes.object,
    handleChange: PropTypes.func,
};

export default GroupsForm;
