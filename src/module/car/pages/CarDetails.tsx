import { useParams } from 'react-router-dom';
import CarCard from '../components/card/CarCard';
import useCar from '../hooks/useCar';

function CarDetails(): JSX.Element {
  const { carId } = useParams();
  const { car } = useCar(carId);

  return (
    <main className="p-4 sm:ml-56">
      <section className="p-4 mt-14 mx-auto rounded max-w-2xl lg:py-16">
        <CarCard car={car} />
      </section>
    </main>
  );
}

export default CarDetails;
