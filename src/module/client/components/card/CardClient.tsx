import { Link } from 'react-router-dom';
import { Client } from '../../types/client';
import Modal from '../modal/Modal';
import useClientModal from '../../hooks/useClientModal';

const client: Client = {
  id: 1,
  name: 'Javier',
  lastname: 'Milei',
  docType: 'DNI',
  docNumber: '12345678',
  nationality: 'Argentina',
  address: 'Av. Libertador 1234, Capital Federal',
  phone: '1122334455',
  email: 'javier.milei@gmail.com',
  birthdate: '01/10/1960',
};

function CardClient() {
  const { showModal, openModal, closeModal } = useClientModal();
  return (
    <div
      className="w-full m-auto max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"
      data-cy="card-client-container"
    >
      <div
        className="flex items-center justify-between mb-4"
        data-cy="card-client-header-container"
      >
        <h5
          className="text-xl font-bold leading-none text-gray-900"
          data-cy="card-client-header-title"
        >
          {client.name} {client.lastname}
        </h5>
        <Link
          to="/client"
          className="text-sm font-medium text-blue-600 hover:underline"
          data-cy="card-client-header-link"
        >
          Go back &rarr;
        </Link>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200"
          data-cy="card-client-details-container"
        >
          <li className="py-3 sm:py-4" data-cy="card-client-doc-container">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p
                  className="inline-flex items-center text-base font-semibold text-gray-900"
                  data-cy="card-client-doc-type"
                >
                  {client.docType}
                </p>
              </div>
              <div
                className="text-base font-medium text-gray-500 truncate"
                data-cy="card-client-doc-number"
              >
                {client.docNumber}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4" data-cy="card-client-birthdate">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="inline-flex items-center text-base font-semibold text-gray-900">
                  Birthdate
                </p>
              </div>
              <div className="text-base font-medium text-gray-500 truncate">{client.birthdate}</div>
            </div>
          </li>
          <li className="py-3 sm:py-4" data-cy="card-client-nationality">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="inline-flex items-center text-base font-semibold text-gray-900">
                  Nationality
                </p>
              </div>
              <div className="text-base font-medium text-gray-500 truncate">
                {client.nationality}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4" data-cy="card-client-phone">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="inline-flex items-center text-base font-semibold text-gray-900">
                  Phone
                </p>
              </div>
              <div className="text-base font-medium text-gray-500 truncate">{client.phone}</div>
            </div>
          </li>
          <li className="py-3 sm:py-4" data-cy="card-client-email">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="inline-flex items-center text-base font-semibold text-gray-900">
                  Email
                </p>
              </div>
              <div className="text-base font-medium text-gray-500 truncate">{client.email}</div>
            </div>
          </li>
          <li className="py-3 sm:py-4" data-cy="card-client-address">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="inline-flex items-center text-base font-semibold text-gray-900">
                  Address
                </p>
              </div>
              <div className="text-base font-medium text-gray-500 truncate">{client.address}</div>
            </div>
          </li>
        </ul>
      </div>
      <div
        className="flex items-center justify-around space-x-4 px-6 pt-8"
        data-cy="card-client-btn-container"
      >
        <button
          type="submit"
          className="text-white bg-dark-green select-none font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-dark-green/20 transition-all hover:shadow-lg hover:shadow-dark-green/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          data-cy="card-client-btn-edit"
        >
          <Link to={`/client/${client.id}/edit`}>Edit client</Link>
        </button>
        <button
          type="button"
          onClick={openModal}
          className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md shadow-red-600/20 transition-all hover:shadow-lg hover:shadow-red-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-cy="card-client-btn-delete"
        >
          <svg
            className="w-5 h-5 mr-1 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Delete
        </button>
      </div>
      {showModal && <Modal fullname={`${client.name} ${client.lastname}`} onClose={closeModal} />}
    </div>
  );
}

export default CardClient;
