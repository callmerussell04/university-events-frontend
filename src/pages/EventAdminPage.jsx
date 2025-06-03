import Events from "../components/events/table/Events";

const EventAdminPage = () => {
    return (
        <>
            <div className="container-lg table-responsive">
                <h3>Мероприятия</h3>
                <Events />
            </div>
        </>
    );
};

export default EventAdminPage;