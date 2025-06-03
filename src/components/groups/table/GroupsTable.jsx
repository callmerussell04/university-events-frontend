import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const GroupsTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название группы</th>
                    <th scope="col">Факультет</th>
                    <th scope="col" />
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </Table >
    );
};

GroupsTable.propTypes = {
    children: PropTypes.node,
};

export default GroupsTable;
