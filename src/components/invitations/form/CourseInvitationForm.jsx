import PropTypes from 'prop-types';
import Select from '../../input/Select.jsx';
import Input from '../../input/Input.jsx';
import useEvents from '../../events/hooks/EventsHook.js';
import useFaculties from '../../faculties/hooks/FacultiesHook.js';

const CourseInvitationForm = ({ courseInvitation, handleChange }) => {
    const { faculties } = useFaculties();
    const { events } = useEvents({noArgs: true});

    return (
        <>
            <Select values={faculties} name='facultyId' label='Группа' value={courseInvitation.facultyId} onChange={handleChange}
                required />
            <Input name='course' label='Курс' value={courseInvitation.course} onChange={handleChange}
                            type='number' min='1' max='6' step='1' required />
            <Select values={events} name='eventId' label='Мероприятие' value={courseInvitation.eventId} onChange={handleChange}
                required />
        </>
    );
};

CourseInvitationForm.propTypes = {
    invitation: PropTypes.object,
    handleChange: PropTypes.func,
};

export default CourseInvitationForm;
