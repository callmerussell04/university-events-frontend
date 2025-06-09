import Events from "../components/events/table/Events";
import EventsStudentTable from "../components/events/table/EventsStudentTable";
import EventsStudentTableRow from "../components/events/table/EventsStudentTableRow";
import useInvitations from '../components/invitations/hooks/InvitationsByUserHook';
import usePagination from '../components/pagination/PaginationHook';
import PaginationComponent from '../components/pagination/Pagination';
import AuthApiService from "../components/auth/service/AuthApiService";

const EventStudentPage = () => {
    const {currentPage, handlePageChange} = usePagination();

    const { invitations, totalPages } = useInvitations(currentPage, AuthApiService.getCurrentUser().id);

    return (
        <>
            <div className="container-lg">
                <h3>Мероприятия на которые вы приглашены</h3>
                <EventsStudentTable>
                    {
                        invitations.map((invitation, index) =>
                            <EventsStudentTableRow key={invitation.id}
                                                        index={index} invitation={invitation}
                                                    />)
                    }
                </EventsStudentTable>
                <PaginationComponent totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </>
    );
};

export default EventStudentPage;