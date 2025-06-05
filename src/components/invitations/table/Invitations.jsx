import { Button } from 'react-bootstrap';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import useInvitationsDeleteModal from '../hooks/InvitationsDeleteModalHook.js';
import useInvitationsFormModal from '../hooks/InvitationsFormModalHook.js';
import useInvitations from '../hooks/InvitationsHook.js';
import InvitationsTable from './InvitationsTable.jsx';
import InvitationsTableRow from './InvitationsTableRow.jsx';
import InvitationsForm from '../form/InvitationsForm.jsx';
import PropTypes from 'prop-types';
import PaginationComponent from '../../pagination/Pagination.jsx';
import usePagination from '../../pagination/PaginationHook.js';
import Select from '../../input/Select.jsx';
import useEventFilter from '../hooks/InvitationsFilterHook.js';


const Invitations = () => {
    const {currentPage, handlePageChange} = usePagination();

    const { events, currentEventFilter, handleEventFilterChange } = useEventFilter();

    const { invitations, handleInvitationsChange, totalPages } = useInvitations(currentPage, currentEventFilter);

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useInvitationsDeleteModal(handleInvitationsChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentInvitation,
        handleInvitationChange,
        handleFormSubmit,
        handleFormClose,
    } = useInvitationsFormModal(handleInvitationsChange);

    return (
        <>
            <Select className='mt-2' values={events} label='Фильтр по статусу'
                    value={currentEventFilter} onChange={handleEventFilterChange} />
            <InvitationsTable>
                {
                    invitations.map((invitation, index) =>
                        <InvitationsTableRow key={invitation.id}
                            index={index} invitation={invitation}
                            onDelete={() => showDeleteModal(invitation.id)}
                            onEdit={() => showFormModal(invitation.id)}
                        />)
                }
            </InvitationsTable>
            <div className="d-flex justify-content-center">
                <Button variant='primary' className="fw-bold px-5 mb-5" onClick={() => showFormModal()}>
                    Пригласить студента
                </Button>
            </div>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <InvitationsForm invitation={currentInvitation} handleChange={handleInvitationChange} />
            </ModalForm>
        </>
    );
};

Invitations.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default Invitations;
