import { Car } from '../types/car.types';
import Header from '../components/table/Header';
import Table from '../components/table/Table';
import useCars from '../hooks/useCars';
import MainLayout from '../../../common/components/layout/MainLayout';

function CarList(): JSX.Element {
  const { cars }: { cars: Car[] | undefined } = useCars();
  return (
    <MainLayout>
      <div className="mx-auto max-w-screen-xl lg:px-12 p-4">
        <div
          className="bg-white relative shadow-md rounded-lg overflow-hidden"
          data-cy="car-list-container"
        >
          <Header />
          {cars?.length !== 0 ? (
            <Table cars={cars} />
          ) : (
            <p className="m-4" data-cy="car-list-message-without-cars">
              There are no cars loaded at this time
            </p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default CarList;
