import { Form, Button } from 'react-bootstrap';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import useEventsDeleteModal from '../hooks/EventsDeleteModalHook.js';
import useEventsFormModal from '../hooks/EventsFormModalHook.js';
import useEvents from '../hooks/EventsHook.js';
import EventsTable from './EventsTable.jsx';
import EventsTableRow from './EventsTableRow.jsx';
import EventsForm from '../form/EventsForm.jsx';
import PropTypes from 'prop-types';
import PaginationComponent from '../../pagination/Pagination.jsx';
import {useNameFilter, useStatusFilter, useLocationFilter, useDateFilter, useResetSearchParams } from '../hooks/EventsFilterHook.js';
import Select from '../../input/Select.jsx';
import usePagination from '../../pagination/PaginationHook.js';
import { useState } from 'react';
import Input from '../../input/Input.jsx';


const Events = () => {
    const {currentPage, handlePageChange} = usePagination();

    const {currentNameFilter, handleNameFilterChange} = useNameFilter();

    const [searchInput, setSearchInput] = useState(currentNameFilter);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const {currentStatusFilter, handleStatusFilterChange} = useStatusFilter();

    const statuses = ["Запланировано", "В процессе", "Завершено", "Отменено"];

    const { locations, currentLocationFilter, handleLocationFilterChange } = useLocationFilter();

    const { currentStartDateFilter, currentEndDateFilter, handleDateFilterChange } = useDateFilter();

    const [startDateInput, setStartDateInput] = useState(currentStartDateFilter);

    const handleStartDateInputChange = (event) => {
        setStartDateInput(event.target.value);
    };

    const [endDateInput, setEndDateInput] = useState(currentEndDateFilter);

    const handleEndDateInputChange = (event) => {
        setEndDateInput(event.target.value);
    };

    const { events, handleEventsChange, totalPages, clearFilters } = useEvents(currentPage, currentNameFilter, currentStatusFilter, currentLocationFilter, currentStartDateFilter, currentEndDateFilter);

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

    const resetSearchParams = useResetSearchParams();

    return (
        <>
            <div className='d-flex'>
                <Form.Control type="text" name='name' value={searchInput} onChange={handleSearchInputChange} placeholder="Поиск" />
                <Button variant='primary' className='m-0 ms-2' onClick={() => handleNameFilterChange(searchInput)}>Найти</Button>
            </div>
            <Select className='mt-2' values={statuses} label='Фильтр по статусу'
                    value={currentStatusFilter} onChange={handleStatusFilterChange} />
            <Select className='mt-2' values={locations} label='Фильтр по помещению'
                    value={currentLocationFilter} onChange={handleLocationFilterChange} />
            <div className='d-flex flex-column col-4'>
                <div className='d-flex justify-content-between'>
                    <Input name='startDateFilter' label='С' value={startDateInput} onChange={handleStartDateInputChange}
                                    type='datetime-local' required />
                    <Input name='endDateFilter' label='До' value={endDateInput} onChange={handleEndDateInputChange}
                                    type='datetime-local' required />
                </div>
                <Button variant='primary' className='m-0' onClick={() => handleDateFilterChange(startDateInput, endDateInput)}>Применить</Button>
            </div>
            <div className='d-flex justify-content-end'>
                <Button variant='danger' className='my-2' onClick={() => {
                        clearFilters();
                        setSearchInput('');
                        resetSearchParams();}}>Очистить фильтры</Button>
            </div>
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
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
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
