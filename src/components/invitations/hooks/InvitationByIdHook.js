import { useEffect, useState } from 'react';
import InvitationsApiService from '../service/InvitationsApiService';

const useInvitation = (id) => {
    const emptyInvitation = {
        id: '',
        userId: '',
        eventId: '',
        status: 'Не посетил'
    };
    
    const [invitation, setInvitation] = useState({ ...emptyInvitation });

    const getInvitationById = async (invitationId = undefined) => {
        if (invitationId && invitationId > 0) {
            const data = await InvitationsApiService.get(invitationId);
            setInvitation(data);
        } else {
            setInvitation({ ...emptyInvitation });
        }
    };

    useEffect(() => {
        getInvitationById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        invitation,
        setInvitation
    };
};

export default useInvitation;
