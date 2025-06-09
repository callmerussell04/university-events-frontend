import { useState } from 'react';
import toast from 'react-hot-toast';
import EventsApiService from '../service/EventsApiService';
import useModal from '../../modal/ModalHook';

const useStatsForm = () => {
    const emptyStatsDates = {
        startDate: '',
        endDate: ''
    };
    const [statsDates, setStatsDates] = useState({ ...emptyStatsDates });

    const [validated, setValidated] = useState(false);

    const { isModalShow, showModal, hideModal } = useModal();

    const resetValidity = () => {
        setValidated(false);
    };

    const getStatsDates = (formData) => {
        const startDate = formData.startDate;
        const endDate = formData.endDate;
        return {
            startDate: startDate,
            endDate: endDate,
        };
    };

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setStatsDates({
            ...statsDates,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        const body = getStatsDates(statsDates);
        if(Date.parse(body.startDate) < Date.parse(body.endDate)) {
            if (form.checkValidity()) {
                let expand = `?startDate=${body.startDate}&endDate=${body.endDate}`;
                await EventsApiService.getStats(expand);
                toast.success('Элемент успешно сохранен', { id: 'EventsTable' });
                return true;
            }
            setValidated(true);
        }
        return false;
    };

    const showModalDialog = () => {
        resetValidity();
        showModal();
    };

    const onClose = () => {
        hideModal();
        setStatsDates({ ...emptyStatsDates })
    };

    const onSubmit = async (e) => {
        if (await handleSubmit(e)) {
            onClose();
        }
    };

    return {
        statsDates,
        isStatsFormModalShow: isModalShow,
        isStatsFormValidated: validated,
        showStatsFormModal: showModalDialog,
        handleStatsFormChange: handleChange,
        handleStatsFormSubmit: onSubmit,
        handleStatsFormClose: onClose,
    };
};

export default useStatsForm;
