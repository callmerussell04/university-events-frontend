import { useState } from 'react';
import toast from 'react-hot-toast';
import useModal from '../../modal/ModalHook';
import SurveysApiService from '../service/SurveysApiService';

//TODO: удалить если не будет управления анкетами, нигде не юзается
const useSurveysDeleteModal = (surveysChangeHandle) => {
    const { isModalShow, showModal, hideModal } = useModal();
    const [currentId, setCurrentId] = useState(0);

    const showModalDialog = (id) => {
        showModal();
        setCurrentId(id);
    };

    const onClose = () => {
        hideModal();
    };

    const onDelete = async () => {
        await SurveysApiService.delete(currentId);
        surveysChangeHandle();
        toast.success('Элемент успешно удален', { id: 'SurveysTable' });
        onClose();
    };

    return {
        isDeleteModalShow: isModalShow,
        showDeleteModal: showModalDialog,
        handleDeleteConfirm: onDelete,
        handleDeleteCancel: onClose,
    };
};

export default useSurveysDeleteModal;
