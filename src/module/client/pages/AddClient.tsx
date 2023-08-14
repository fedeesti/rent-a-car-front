import ClientForm from '../components/form/ClientForm';
import { Client } from '../types/client';

const INITIAL_VALUES: Client = {
  name: '',
  lastname: '',
  docType: '',
  docNumber: '',
  nationality: '',
  address: '',
  phone: '',
  email: '',
  birthdate: '',
};

function AddClient() {
  return (
    <main className="sm:ml-56">
      <section className="rounded-lg mt-14 pt-3 sm:p-5 h-screen">
        <div className="p-4 mx-auto max-w-2xl lg:py-16" data-cy="create-client-container">
          <h2 className="mb-4 text-xl font-bold text-gray-900" data-cy="create-client-title">
            Add a new client
          </h2>
          <ClientForm initialState={INITIAL_VALUES} />
        </div>
      </section>
    </main>
  );
}

export default AddClient;
