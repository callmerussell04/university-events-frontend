import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useGroups from '../../groups/hooks/GroupsHook.js';

const UsersForm = ({ user, handleChange }) => {
    const { groups } = useGroups({ noPaging: true });
    const roles = ["Студент", "Сотрудник", "Администратор"];


    return (
        <>
            <Input name='name' label='Имя' value={user.name} onChange={handleChange}
                type='text' required />
            <Input name='email' label='email' value={user.email} onChange={handleChange}
                type='email' required />
            <Input name='username' label='Логин' value={user.username} onChange={handleChange}
                type='text' required />
            <Input name='phoneNumber' label='Номер телефона' value={user.phoneNumber} onChange={handleChange}
                type='text' required />
            <Select values={roles} name='role' label='Роль' value={user.role} onChange={handleChange}
                required />
            {user.role === "Студент" && (<Select values={groups} name='groupId' label='Группа' value={user.groupId} onChange={handleChange}
                required />)}
        </>
    );
};

UsersForm.propTypes = {
    user: PropTypes.object,
    handleChange: PropTypes.func,
};

export default UsersForm;
