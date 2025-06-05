import { useEffect, useState } from 'react';
import InvitationsApiService from '../service/InvitationsApiService';

const useInvitations = (page, eventFilter) => {
    const [invitations, setInvitations] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [invitationsRefresh, setInvitationsRefresh] = useState(false);
    const handleInvitationsChange = () => setInvitationsRefresh(!invitationsRefresh);

    const getInvitations = async () => {
        let expand = `?page=${page}`;
        if (eventFilter) expand = `${expand}&eventId=${eventFilter}`;
        const data = await InvitationsApiService.getAll(expand);
        setInvitations(data.items ?? []);
        setTotalPages(data.totalPages ?? 0);
    };

    useEffect(() => {
        getInvitations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invitationsRefresh, page, eventFilter]);

    return {
        invitations,
        handleInvitationsChange,
        totalPages
    };
};

export default useInvitations;
