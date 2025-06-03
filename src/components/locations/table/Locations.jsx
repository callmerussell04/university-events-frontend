import { Button } from 'react-bootstrap';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import useLocationsDeleteModal from '../hooks/LocationsDeleteModalHook.js';
import useLocationsFormModal from '../hooks/LocationsFormModalHook.js';
import useLocations from '../hooks/LocationsHook.js';
import LocationsTable from './LocationsTable.jsx';
import LocationsTableRow from './LocationsTableRow.jsx';
import LocationsForm from '../form/LocationsForm.jsx';
import PropTypes from 'prop-types';

const Locations = () => {

    const { locations, handleLocationsChange } = useLocations();

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useLocationsDeleteModal(handleLocationsChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentLocation,
        handleLocationChange,
        handleFormSubmit,
        handleFormClose,
    } = useLocationsFormModal(handleLocationsChange);

    return (
        <>
            <LocationsTable>
                {
                    locations.map((location, index) =>
                        <LocationsTableRow key={location.id}
                            index={index} location={location}
                            onDelete={() => showDeleteModal(location.id)}
                            onEdit={() => showFormModal(location.id)}
                        />)
                }
            </LocationsTable>
            <div className="d-flex justify-content-center">
                <Button variant='primary' className="fw-bold px-5 mb-5" onClick={() => showFormModal()}>
                    Добавить помещение
                </Button>
            </div>
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <LocationsForm location={currentLocation} handleChange={handleLocationChange} />
            </ModalForm>
        </>
    );
};

Locations.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default Locations;
