import { useState } from 'react';
import toast from 'react-hot-toast';
import useModal from '../../modal/ModalHook';
import FacultiesApiService from '../service/FacultiesApiService';

const useFacultiesDeleteModal = (facultiesChangeHandle) => {
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
        await FacultiesApiService.delete(currentId);
        facultiesChangeHandle();
        toast.success('Элемент успешно удален', { id: 'FacultiesTable' });
        onClose();
    };

    return {
        isDeleteModalShow: isModalShow,
        showDeleteModal: showModalDialog,
        handleDeleteConfirm: onDelete,
        handleDeleteCancel: onClose,
    };
};

export default useFacultiesDeleteModal;
