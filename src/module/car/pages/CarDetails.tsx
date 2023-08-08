import { Car } from '../assets/types/car.types';
import CarCard from '../components/card/CarCard';

const car: Car = {
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
};

function CarDetails(): JSX.Element {
  return (
    <main className="p-4 sm:ml-56">
      <section className="p-4 mt-14 mx-auto rounded max-w-2xl lg:py-16">
        <CarCard car={car} />
      </section>
    </main>
  );
}

export default CarDetails;
