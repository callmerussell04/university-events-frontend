import { useEffect, useState } from 'react';
import SupportTicketsApiService from '../service/SupportTicketsApiService';

const useSupportTicket = (id) => {
    const emptySupportTicket = {
        id: '',
        userMessage: '',
        operatorReply: '',
        telegramChatId: '',
    };
    
    const [supportticket, setSupportTicket] = useState({ ...emptySupportTicket });

    const getSupportTicketById = async (supportticketId = undefined) => {
        if (supportticketId && supportticketId > 0) {
            const data = await SupportTicketsApiService.get(supportticketId);
            setSupportTicket(data);
        } else {
            setSupportTicket({ ...emptySupportTicket });
        }
    };

    useEffect(() => {
        getSupportTicketById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return {
        supportticket,
        setSupportTicket
    };
};

export default useSupportTicket;
