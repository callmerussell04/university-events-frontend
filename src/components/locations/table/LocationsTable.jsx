import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const LocationsTable = ({ children }) => {
    return (
        <Table className='mt-2' striped responsive hover>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название помещения</th>
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

LocationsTable.propTypes = {
    children: PropTypes.node,
};

export default LocationsTable;
