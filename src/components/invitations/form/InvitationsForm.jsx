import PropTypes from 'prop-types';
import Input from '../../input/Input.jsx';
import Select from '../../input/Select.jsx';
import useUsers from '../../users/hooks/UsersHook.js';
import useEvents from '../../events/hooks/EventsHook.js';

const InvitationsForm = ({ invitation, handleChange }) => {
    const { users } = useUsers({role: "Студент", noPaging: true});
    const { events } = useEvents({noArgs: true});
    const statuses = ["Посетил", "Не посетил"];

    return (
        <>
            <Select values={users} name='userId' label='Пользователь' value={invitation.userId} onChange={handleChange}
                required />
            <Select values={events} name='eventId' label='Мероприятие' value={invitation.eventId} onChange={handleChange}
                required />
            <Select values={statuses} name='status' label='Статус' value={invitation.status} onChange={handleChange}
                            required />
        </>
    );
};

InvitationsForm.propTypes = {
    invitation: PropTypes.object,
    handleChange: PropTypes.func,
};

export default InvitationsForm;
