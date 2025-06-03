import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const FacultiesTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название факультета</th>
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

FacultiesTable.propTypes = {
    children: PropTypes.node,
};

export default FacultiesTable;
