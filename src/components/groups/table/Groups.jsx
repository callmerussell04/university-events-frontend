import { Button } from 'react-bootstrap';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import useGroupsDeleteModal from '../hooks/GroupsDeleteModalHook.js';
import useGroupsFormModal from '../hooks/GroupsFormModalHook.js';
import useGroups from '../hooks/GroupsHook.js';
import GroupsTable from './GroupsTable.jsx';
import GroupsTableRow from './GroupsTableRow.jsx';
import GroupsForm from '../form/GroupsForm.jsx';
import PropTypes from 'prop-types';

const Groups = () => {

    const { groups, handleGroupsChange } = useGroups();

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useGroupsDeleteModal(handleGroupsChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentGroup,
        handleGroupChange,
        handleFormSubmit,
        handleFormClose,
    } = useGroupsFormModal(handleGroupsChange);

    return (
        <>
            <GroupsTable>
                {
                    groups.map((group, index) =>
                        <GroupsTableRow key={group.id}
                            index={index} group={group}
                            onDelete={() => showDeleteModal(group.id)}
                            onEdit={() => showFormModal(group.id)}
                        />)
                }
            </GroupsTable>
            <div className="d-flex justify-content-center">
                <Button variant='primary' className="fw-bold px-5 mb-5" onClick={() => showFormModal()}>
                    Добавить группу
                </Button>
            </div>
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <GroupsForm group={currentGroup} handleChange={handleGroupChange} />
            </ModalForm>
        </>
    );
};

Groups.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default Groups;
