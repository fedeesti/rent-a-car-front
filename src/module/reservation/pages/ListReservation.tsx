import MainLayout from '../../../common/components/layout/MainLayout';
import Header from '../components/table/Header';
import ReservationTable from '../components/table/ReservationTable';
import useReservations from '../hooks/useReservations';

function ListReservation(): JSX.Element {
  const { reservations } = useReservations();
  console.log(reservations);
  return (
    <MainLayout>
      <div className="mx-auto max-w-screen-xl lg:px-12 p-4">
        <div
          className="bg-white relative shadow-md rounded-lg overflow-hidden"
          data-cy="reservation-list-container"
        >
          <Header />
          {reservations?.length !== 0 ? (
            <ReservationTable reservations={reservations} />
          ) : (
            <p className="m-4" data-cy="list-message-without-reservations">
              There are no reservations loaded at this time
            </p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default ListReservation;
