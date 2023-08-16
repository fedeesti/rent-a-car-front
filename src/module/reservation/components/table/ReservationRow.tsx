import { Link } from 'react-router-dom';
import { Reservation } from '../../types/reservation';
import Modal from '../modal/Modal';
import useModalReservation from '../../hooks/useModalReservation';

interface IProps {
  reservation: Reservation;
}

function ReservationRow({ reservation }: IProps): JSX.Element {
  const { showModal, openModal, closeModal } = useModalReservation();

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
        data-cy="tbody-row-container"
      >
        <div>
          <div className="text-base font-semibold" data-cy="tbody-row-client-name">
            {reservation.client.name} {reservation.client.lastname}
          </div>
          <div className="font-normal text-gray-500" data-cy="tbody-row-client-email">
            {reservation.client.email}
          </div>
        </div>
      </th>
      <td className="px-6 py-4" data-cy="tbody-row-car">
        {reservation.car.brand} {reservation.car.model}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center" data-cy="tbody-row-status">
          <div
            className={`h-2.5 w-2.5 rounded-full mr-2 ${
              reservation.statusId ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
          {reservation.statusId ? 'Paid' : 'Pending'}
        </div>
      </td>
      <td className="px-6 py-4" data-cy="reservation-tbody-actions-container">
        <div className="flex item-center justify-center" data-cy="tbody-row-actions-container">
          <div className="w-4 mr-2 hover:text-dark-green hover:scale-125">
            <Link to={`/reservation/${reservation.id}/view`} data-cy="tbody-row-actions-view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </Link>
          </div>
          <div className="w-4 mr-2 hover:text-dark-green hover:scale-125">
            <Link to={`/reservation/${reservation.id}/edit`} data-cy="tbody-row-actions-edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </Link>
          </div>
          <div className="w-4 mr-2 hover:text-red-500 hover:scale-125">
            <button className="w-4 h-4" data-cy="tbody-row-actions-delete" onClick={openModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {showModal && <Modal id={reservation.id} onClose={closeModal} />}
      </td>
    </tr>
  );
}

export default ReservationRow;
