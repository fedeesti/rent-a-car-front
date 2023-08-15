import { useParams } from 'react-router-dom';
import CarForm from '../components/form/CarForm';
import useCar from '../hooks/useCar';
import { formData } from '../types/car.types';
import transformCarToFormDataType from '../utils/transform';
import { INITIAL_STATE } from '../utils/constants';
import MainLayout from '../../../common/components/layout/MainLayout';

function EditCar() {
  const { carId } = useParams();
  const { car } = useCar(carId);

  const formData: formData = car !== undefined ? transformCarToFormDataType(car) : INITIAL_STATE;

  return (
    <MainLayout>
      <div className="p-4 mx-auto max-w-2xl lg:py-16" data-cy="edit-car-container">
        <h2 className="mb-4 text-xl font-bold text-gray-900" data-cy="edit-car-title">
          Edit a car
        </h2>
        <CarForm initialState={formData} />
      </div>
    </MainLayout>
  );
}

export default EditCar;
