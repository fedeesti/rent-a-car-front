import MainLayout from '../../../common/components/layout/MainLayout';
import FormReservation from '../components/form/FormReservation';

function EditReservation() {
  return (
    <MainLayout>
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16" data-cy="create-reservation-container">
        <h2 className="mb-4 text-xl font-bold text-gray-900" data-cy="create-reservation-title">
          Edit a new reservation
        </h2>
        <FormReservation />
      </div>
    </MainLayout>
  );
}

export default EditReservation;
