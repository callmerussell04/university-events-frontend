import Locations from "../components/locations/table/Locations";

const LocationsPage = () => {
    return (
        <>
            <div className="container-lg table-responsive">
                <h3>Помещения</h3>
                <Locations />
            </div>
        </>
    );
};

export default LocationsPage;