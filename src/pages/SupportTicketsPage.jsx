import Groups from "../components/groups/table/Groups";
import SupportTickets from "../components/supporttickets/table/SupportTickets";

const SupportTicketsPage = () => {
    return (
        <>
            <div className="container-lg table-responsive">
                <h3>Заявки</h3>
                <SupportTickets />
            </div>
        </>
    );
};

export default SupportTicketsPage;