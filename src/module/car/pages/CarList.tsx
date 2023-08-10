import { Car } from '../types/car.types';
import Header from '../components/table/Header';
import Table from '../components/table/Table';
import useCars from '../hooks/useCars';

function CarList(): JSX.Element {
  const { cars }: { cars: Car[] | undefined } = useCars();
  return (
    <main className="sm:ml-56 h-screen">
      <section className="rounded-lg mt-14 pt-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl lg:px-12">
          <div
            className="bg-white relative shadow-md sm:rounded-lg overflow-hidden"
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
      </section>
    </main>
  );
}

export default CarList;
