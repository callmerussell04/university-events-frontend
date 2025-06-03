import { Button } from 'react-bootstrap';
import ModalConfirm from '../../modal/ModalConfirm.jsx';
import ModalForm from '../../modal/ModalForm.jsx';
import useFacultiesDeleteModal from '../hooks/FacultiesDeleteModalHook.js';
import useFacultiesFormModal from '../hooks/FacultiesFormModalHook.js';
import useFaculties from '../hooks/FacultiesHook';
import FacultiesTable from './FacultiesTable.jsx';
import FacultiesTableRow from './FacultiesTableRow.jsx';
import FacultiesForm from '../form/FacultiesForm.jsx';
import PropTypes from 'prop-types';

const Faculties = () => {

    const { faculties, handleFacultiesChange } = useFaculties();

    const {
        isDeleteModalShow,
        showDeleteModal,
        handleDeleteConfirm,
        handleDeleteCancel,
    } = useFacultiesDeleteModal(handleFacultiesChange);

    const {
        isFormModalShow,
        isFormValidated,
        showFormModal,
        currentFaculty,
        handleFacultyChange,
        handleFormSubmit,
        handleFormClose,
    } = useFacultiesFormModal(handleFacultiesChange);

    return (
        <>
            <FacultiesTable>
                {
                    faculties.map((faculty, index) =>
                        <FacultiesTableRow key={faculty.id}
                            index={index} faculty={faculty}
                            onDelete={() => showDeleteModal(faculty.id)}
                            onEdit={() => showFormModal(faculty.id)}
                        />)
                }
            </FacultiesTable>
            <div className="d-flex justify-content-center">
                <Button variant='primary' className="fw-bold px-5 mb-5" onClick={() => showFormModal()}>
                    Добавить факультет
                </Button>
            </div>
            <ModalConfirm show={isDeleteModalShow}
                onConfirm={handleDeleteConfirm} onClose={handleDeleteCancel}
                title='Удаление' message='Удалить элемент?' />
            <ModalForm show={isFormModalShow} validated={isFormValidated}
                onSubmit={handleFormSubmit} onClose={handleFormClose}
                title='Редактирование'>
                <FacultiesForm faculty={currentFaculty} handleChange={handleFacultyChange} />
            </ModalForm>
        </>
    );
};

Faculties.propTypes = {
    handleLinesChange: PropTypes.func,
}

export default Faculties;
