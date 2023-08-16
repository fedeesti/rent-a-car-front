import { Reservation } from '../../types/reservation';
import ReservationRow from './ReservationRow';

interface IProps {
  reservations: Reservation[];
}

function ReservationTable({ reservations }: IProps): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500" data-cy="reservation-table">
        <thead
          className="text-xs text-gray-700 uppercase bg-gray-50"
          data-cy="reservation-thead-container"
        >
          <tr>
            <th scope="col" className="px-6 py-3" data-cy="reservation-thead-client">
              Client
            </th>
            <th scope="col" className="px-6 py-3" data-cy="reservation-thead-car">
              Car
            </th>
            <th scope="col" className="px-6 py-3" data-cy="reservation-thead-status">
              Status
            </th>
            <th scope="col" className="px-6 py-3" data-cy="reservation-thead-action">
              Action
            </th>
          </tr>
        </thead>
        <tbody data-cy="reservation-tbody-container">
          {reservations?.map((reservation) => (
            <ReservationRow key={reservation.id} reservation={reservation} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationTable;
