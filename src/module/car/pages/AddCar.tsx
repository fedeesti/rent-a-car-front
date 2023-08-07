import CarForm from '../components/form/CarForm';

function AddCar() {
  return (
    <main className="p-4 sm:ml-56">
      <section className="p-4 mt-14 mx-auto rounded max-w-2xl lg:py-16" data-cy="add-car-container">
        <h2 className="mb-4 text-xl font-bold text-gray-900" data-cy="add-car-title">
          Add a new car
        </h2>
        <CarForm />
      </section>
    </main>
  );
}

export default AddCar;
