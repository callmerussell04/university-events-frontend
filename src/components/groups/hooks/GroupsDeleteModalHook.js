import { useState } from 'react';
import toast from 'react-hot-toast';
import useModal from '../../modal/ModalHook';
import GroupsApiService from '../service/GroupsApiService';

const useGroupsDeleteModal = (groupsChangeHandle) => {
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
        await GroupsApiService.delete(currentId);
        groupsChangeHandle();
        toast.success('Элемент успешно удален', { id: 'GroupsTable' });
        onClose();
    };

    return {
        isDeleteModalShow: isModalShow,
        showDeleteModal: showModalDialog,
        handleDeleteConfirm: onDelete,
        handleDeleteCancel: onClose,
    };
};

export default useGroupsDeleteModal;
