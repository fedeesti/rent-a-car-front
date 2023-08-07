import { Link } from 'react-router-dom';
import { Car } from '../../assets/types/car.types';

function Table({ cars }: { cars: Car[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500" data-cy="cars-table-container">
        <thead className="text-xs text-black uppercase bg-gray-100" data-cy="cars-table-header">
          <tr data-cy="cars-table-header-row">
            <th scope="col" className="px-4 py-3">
              Brand
            </th>
            <th scope="col" className="px-4 py-3">
              Model
            </th>
            <th scope="col" className="px-4 py-3">
              Year
            </th>
            <th scope="col" className="px-4 py-3">
              KMS
            </th>
            <th scope="col" className="px-1 py-3">
              Price per day
            </th>
            <th scope="col" className="px-1 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody data-cy="cars-table-body">
          {cars.map((car: Car) => (
            <tr className="border-b dark:border-gray-700" key={car.id}>
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {car.brand}
              </th>
              <td className="px-4 py-3">{car.model}</td>
              <td className="px-4 py-3">{car.year}</td>
              <td className="px-4 py-3">{car.kms}</td>
              <td className="px-2 py-3">${car.price}</td>
              <td className="px-1 py-3 flex items-center">
                <div className="flex item-center justify-center">
                  <div className="w-4 mr-2 hover:text-dark-green hover:scale-125">
                    <Link to={`/car/${car.id}`}>
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
                    <Link to={`/car/${car.id}/edit`} data-cy="row-actions-mobile-icons-edit">
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
                    <button className="w-4 h-4" data-cy="row-actions-mobile-icons-delete">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
