import MainLayout from '../../../common/components/layout/MainLayout';
import CarForm from '../components/form/CarForm';
import { INITIAL_STATE } from '../utils/constants';

function AddCar() {
  return (
    <MainLayout>
      <div className="p-4 mx-auto max-w-2xl lg:py-16" data-cy="add-car-container">
        <h2 className="mb-4 text-xl font-bold text-gray-900" data-cy="add-car-title">
          Add a new car
        </h2>
        <CarForm initialState={INITIAL_STATE} />
      </div>
    </MainLayout>
  );
}

export default AddCar;
