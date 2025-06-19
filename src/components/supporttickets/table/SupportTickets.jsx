import { Button } from 'react-bootstrap';
import ModalForm from '../../modal/ModalForm.jsx';
import useSupportTicketsFormModal from '../hooks/SupportTicketsFormModalHook.js';
import useSupportTickets from '../hooks/SupportTicketsHook.js';
import SupportTicketsTable from './SupportTicketsTable.jsx';
import SupportTicketsTableRow from './SupportTicketsTableRow.jsx';
import SupportTicketsForm from '../form/SupportTicketsForm.jsx';
import PropTypes from 'prop-types';
import PaginationComponent from '../../pagination/Pagination.jsx';
import usePagination from '../../pagination/PaginationHook.js';


const SupportTickets = () => {
    const {currentPage, handlePageChange} = usePagination();

    const { supporttickets, handleSupportTicketsChange, totalPages } = useSupportTickets({ page: currentPage });

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentSupportTicket,
        handleSupportTicketChange,
        handleFormSubmit,
        handleFormClose,
    } = useSupportTicketsFormModal(handleSupportTicketsChange);

    return (
        <>
            <SupportTicketsTable>
                {
                    supporttickets.map((supportticket) =>
                        <SupportTicketsTableRow key={supportticket.id} supportticket={supportticket}
                            onEdit={() => showFormModal(supportticket.id)}
                        />)
                }
            </SupportTicketsTable>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <SupportTicketsForm supportticket={currentSupportTicket} handleChange={handleSupportTicketChange} />
            </ModalForm>
        </>
    );
};

SupportTickets.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default SupportTickets;
