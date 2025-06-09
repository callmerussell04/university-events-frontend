import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const EventsStudentTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название мероприятия</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Начало</th>
                    <th scope="col">Окончание</th>
                    <th scope="col">Организатор</th>
                    <th scope="col">Помещение</th>
                    <th className='text-center' scope="col">Пройдено</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </Table >
    );
};

EventsStudentTable.propTypes = {
    children: PropTypes.node,
};

export default EventsStudentTable;
