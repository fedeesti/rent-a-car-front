import { useParams } from 'react-router-dom';
import CarCard from '../components/card/CarCard';
import useCar from '../hooks/useCar';
import MainLayout from '../../../common/components/layout/MainLayout';

function CarDetails(): JSX.Element {
  const { carId } = useParams();
  const { car } = useCar(carId);

  return (
    <MainLayout>
      <CarCard car={car} />
    </MainLayout>
  );
}

export default CarDetails;
