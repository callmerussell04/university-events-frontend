import PropTypes from 'prop-types';
import Select from '../../input/Select.jsx';
import useEvents from '../../events/hooks/EventsHook.js';
import useGroups from '../../groups/hooks/GroupsHook.js';

const GroupInvitationForm = ({ groupInvitation, handleChange }) => {
    const { groups } = useGroups({ noPaging: true });
    const { events } = useEvents({noArgs: true});

    return (
        <>
            <Select values={groups} name='groupId' label='Группа' value={groupInvitation.groupId} onChange={handleChange}
                required />
            <Select values={events} name='eventId' label='Мероприятие' value={groupInvitation.eventId} onChange={handleChange}
                required />
        </>
    );
};

GroupInvitationForm.propTypes = {
    invitation: PropTypes.object,
    handleChange: PropTypes.func,
};

export default GroupInvitationForm;
