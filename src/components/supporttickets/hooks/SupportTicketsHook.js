import { useEffect, useState } from 'react';
import SupportTicketsApiService from '../service/SupportTicketsApiService';

const useSupportTickets = ({ page, noPaging = false }) => {
    const [supporttickets, setSupportTickets] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [supportticketsRefresh, setSupportTicketsRefresh] = useState(false);
    const handleSupportTicketsChange = () => setSupportTicketsRefresh(!supportticketsRefresh);

    const getSupportTickets = async () => {
        if (noPaging) {
            const data = await SupportTicketsApiService.getAllNoPages();
            setSupportTickets(data ?? []);
        }
        else {
            let expand = `?page=${page}`;
            const data = await SupportTicketsApiService.getAll(expand);
            setSupportTickets(data.items ?? []);
            setTotalPages(data.totalPages ?? 0);
        }
    };

    useEffect(() => {
        getSupportTickets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [supportticketsRefresh, page]);

    return {
        supporttickets,
        handleSupportTicketsChange,
        totalPages
    };
};

export default useSupportTickets;
