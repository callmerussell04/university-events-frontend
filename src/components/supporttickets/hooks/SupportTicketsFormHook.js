import { useState } from 'react';
import toast from 'react-hot-toast';
import useSupportTicket from './SupportTicketByIdHook';
import SupportTicketsApiService from '../service/SupportTicketsApiService';



const useSupportTicketsForm = (id, supportticketsChangeHandle) => {
    const { supportticket, setSupportTicket } = useSupportTicket(id);

    const [validated, setValidated] = useState(false);

    const resetValidity = () => {
        setValidated(false);
    };

    const getSupportTicketObject = (formData) => {
        const userMessage = formData.userMessage;
        const operatorReply = formData.operatorReply;
        const telegramChatId = formData.telegramChatId;
        return {
            userMessage: userMessage,
            operatorReply: operatorReply,
            telegramChatId: telegramChatId,
        };
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setSupportTicket({
            ...supportticket,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const body = getSupportTicketObject(supportticket);
        if (form.checkValidity()) {
            if (id === undefined) {
                await SupportTicketsApiService.create(body);
            } else {
                await SupportTicketsApiService.update(id, body);
            }
            if (supportticketsChangeHandle) supportticketsChangeHandle();
            toast.success('Элемент успешно сохранен', { id: 'SupportTicketsTable' });
            return true;
        }
        setValidated(true);
        return false;
    };

    return {
        supportticket,
        validated,
        handleSubmit,
        handleChange,
        resetValidity,
    };
};

export default useSupportTicketsForm;
