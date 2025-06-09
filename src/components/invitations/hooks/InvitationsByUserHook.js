import { useEffect, useState } from 'react';
import InvitationsApiService from '../service/InvitationsApiService';

const useInvitations = (page, userId) => {
    console.log(userId);
    const [invitations, setInvitations] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [invitationsRefresh, setInvitationsRefresh] = useState(false);
    const handleInvitationsChange = () => setInvitationsRefresh(!invitationsRefresh);

    const getInvitations = async () => {
        let expand = `?page=${page}`;;
        const data = await InvitationsApiService.getByUser(userId, expand);
        setInvitations(data.items ?? []);
        setTotalPages(data.totalPages ?? 0);
    };

    useEffect(() => {
        getInvitations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [invitationsRefresh, page]);

    return {
        invitations,
        handleInvitationsChange,
        totalPages
    };
};

export default useInvitations;
