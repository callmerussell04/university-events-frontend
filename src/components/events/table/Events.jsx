import { Button } from 'react-bootstrap';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import useEventsDeleteModal from '../hooks/EventsDeleteModalHook.js';
import useEventsFormModal from '../hooks/EventsFormModalHook.js';
import useEvents from '../hooks/EventsHook.js';
import EventsTable from './EventsTable.jsx';
import EventsTableRow from './EventsTableRow.jsx';
import EventsForm from '../form/EventsForm.jsx';
import PropTypes from 'prop-types';
import PaginationComponent from '../../Pagination.jsx';
import { useState } from 'react';


const Events = () => {
    const [page, setPage] = useState(0);

    const { events, handleEventsChange, totalPages } = useEvents(page);

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useEventsDeleteModal(handleEventsChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentEvent,
        handleEventChange,
        handleFormSubmit,
        handleFormClose,
    } = useEventsFormModal(handleEventsChange);

    return (
        <>
            <EventsTable>
                {
                    events.map((event, index) =>
                        <EventsTableRow key={event.id}
                            index={index} event={event}
                            onDelete={() => showDeleteModal(event.id)}
                            onEdit={() => showFormModal(event.id)}
                        />)
                }
            </EventsTable>
            <div className="d-flex justify-content-center">
                <Button variant='primary' className="fw-bold px-5 mb-5" onClick={() => showFormModal()}>
                    Добавить мероприятие
                </Button>
            </div>
            <PaginationComponent totalPages={totalPages} currentPage={page} handlePageChange={setPage} />
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <EventsForm event={currentEvent} handleChange={handleEventChange} />
            </ModalForm>
        </>
    );
};

Events.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default Events;
