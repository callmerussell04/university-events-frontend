import { Button } from 'react-bootstrap';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import useUsersDeleteModal from '../hooks/UsersDeleteModalHook.js';
import useUsersFormModal from '../hooks/UsersFormModalHook.js';
import useUsers from '../hooks/UsersHook.js';
import UsersTable from './UsersTable.jsx';
import UsersTableRow from './UsersTableRow.jsx';
import UsersForm from '../form/UsersForm.jsx';
import PropTypes from 'prop-types';
import PaginationComponent from '../../pagination/Pagination.jsx';
import usePagination from '../../pagination/PaginationHook.js';


const Users = () => {
    const {currentPage, handlePageChange} = usePagination();

    const { users, handleUsersChange, totalPages } = useUsers(currentPage);

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useUsersDeleteModal(handleUsersChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentUser,
        handleUserChange,
        handleFormSubmit,
        handleFormClose,
    } = useUsersFormModal(handleUsersChange);

    return (
        <>
            <UsersTable>
                {
                    users.map((user, index) =>
                        <UsersTableRow key={user.id}
                            index={index} user={user}
                            onDelete={() => showDeleteModal(user.id)}
                            onEdit={() => showFormModal(user.id)}
                        />)
                }
            </UsersTable>
            <div className="d-flex justify-content-center">
                <Button variant='primary' className="fw-bold px-5 mb-5" onClick={() => showFormModal()}>
                    Добавить пользователя
                </Button>
            </div>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <UsersForm user={currentUser} handleChange={handleUserChange} />
            </ModalForm>
        </>
    );
};

Users.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default Users;
