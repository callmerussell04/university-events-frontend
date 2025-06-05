import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const InvitationsTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Мероприятие</th>
                    <th scope="col">Студент</th>
                    <th scope="col">Посещение</th>
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

InvitationsTable.propTypes = {
    children: PropTypes.node,
};

export default InvitationsTable;
