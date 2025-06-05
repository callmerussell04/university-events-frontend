import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const UsersTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Email</th>
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

UsersTable.propTypes = {
    children: PropTypes.node,
};

export default UsersTable;
