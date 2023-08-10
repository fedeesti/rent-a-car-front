import { Car } from '../../types/car.types';
import CarRow from './CarRow';

function Table({ cars }: { cars: Car[] | undefined }): JSX.Element {
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
          {cars?.map((car: Car) => <CarRow key={car.id} car={car} />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
