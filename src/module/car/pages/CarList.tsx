import { Car } from '../assets/types/car.types';
import Header from '../components/table/Header';
import Pagination from '../components/table/Pagination';
import Table from '../components/table/Table';

const cars: Car[] = [
  {
    id: 1,
    brand: 'Chevrolet',
    model: 'Corsa',
    color: 'Gris',
    img: '/src/module/car/assets/images/chevrolet-corsa.jpg',
    kms: 40000,
    passengers: 5,
    price: 8000,
    year: 2010,
    transmission: 'manual',
    airConditioner: true,
  },
  {
    id: 2,
    brand: 'Fiat',
    model: 'Cronos',
    color: 'Gris oscuro',
    img: '/src/module/car/assets/images/fiat-cronos.jpg',
    kms: 5000,
    passengers: 5,
    price: 12000,
    year: 2021,
    transmission: 'manual',
    airConditioner: true,
  },
  {
    id: 3,
    brand: 'Nissan',
    model: 'March',
    color: 'Verde oscuro',
    img: '/src/module/car/assets/images/nissan-march.jpg',
    kms: 1000,
    passengers: 5,
    price: 10000,
    year: 2017,
    transmission: 'manual',
    airConditioner: true,
  },
];

function CarList(): JSX.Element {
  return (
    <main className="sm:ml-56 h-screen">
      <section className="rounded-lg mt-14 pt-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl lg:px-12">
          <div
            className="bg-white relative shadow-md sm:rounded-lg overflow-hidden"
            data-cy="car-list-container"
          >
            <Header />
            <Table cars={cars} />
            <Pagination total={cars.length} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CarList;
