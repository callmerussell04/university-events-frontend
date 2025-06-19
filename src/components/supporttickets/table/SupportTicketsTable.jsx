import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const SupportTicketsTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Текст</th>
                    <th scope="col">Ответ</th>
                    <th scope="col" />
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody >
        </Table >
    );
};

SupportTicketsTable.propTypes = {
    children: PropTypes.node,
};

export default SupportTicketsTable;
