import { useState } from 'react';
import toast from 'react-hot-toast';
import useModal from '../../modal/ModalHook';
import UsersApiService from '../service/UsersApiService';

const useUsersDeleteModal = (usersChangeHandle) => {
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
        await UsersApiService.delete(currentId);
        usersChangeHandle();
        toast.success('Элемент успешно удален', { id: 'UsersTable' });
        onClose();
    };

    return {
        isDeleteModalShow: isModalShow,
        showDeleteModal: showModalDialog,
        handleDeleteConfirm: onDelete,
        handleDeleteCancel: onClose,
    };
};

export default useUsersDeleteModal;
