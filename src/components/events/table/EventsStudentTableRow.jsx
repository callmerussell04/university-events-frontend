import PropTypes from 'prop-types';
import { useState } from 'react';
import InvitationsApiService from '../../invitations/service/InvitationsApiService';


const EventsStudentTableRow = ({
    index, invitation,
}) => {
    const [invitationStatus, setInvitationStatus] = useState(invitation.status === "Посетил");
    
    const handleInvitationStatus = async () => {
        setInvitationStatus(!invitationStatus)
        if(invitation.status === "Не посетил") invitation.status = "Посетил"
        else invitation.status = "Не посетил"
        await InvitationsApiService.update(invitation.id, {
            userId: invitation.userId,
            eventId: invitation.event.id,
            status: invitation.status
        });
    };

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{invitation.event.name}</td>
            <td>{invitation.event.status}</td>
            <td>{invitation.event.startDateTime}</td>
            <td>{invitation.event.endDateTime}</td>
            <td>{invitation.event.organizer}</td>
            <td>{invitation.event.locationName}</td>
            <td>{(invitation.event.status === "В процессе" || invitation.event.status === "Завершено") && (<div className='d-flex justify-content-center'><input type="checkbox" onChange={handleInvitationStatus} checked={invitationStatus} /></div>)}</td>
        </tr>
    );
};

EventsStudentTableRow.propTypes = {
    index: PropTypes.number,
    event: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditInPage: PropTypes.func,
};

export default EventsStudentTableRow;