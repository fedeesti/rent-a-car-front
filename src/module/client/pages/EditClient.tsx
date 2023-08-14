import ClientForm from '../components/form/ClientForm';
import { Client } from '../types/client';

const client: Client = {
  id: 1,
  name: 'Javier',
  lastname: 'Milei',
  docType: 'DNI',
  docNumber: '12345678',
  nationality: 'Argentina',
  address: 'Av. Libertador 1234, Capital Federal',
  phone: '1122334455',
  email: 'javier.milei@gmail.com',
  birthdate: '01/10/1960',
};

function EditClient() {
  return (
    <main className="sm:ml-56">
      <section className="rounded-lg mt-14 pt-3 sm:p-5 h-screen">
        <div className="p-4 mx-auto max-w-2xl lg:py-16" data-cy="edit-client-container">
          <h2 className="mb-4 text-xl font-bold text-gray-900" data-cy="edit-client-title">
            Edit client
          </h2>
          <ClientForm initialState={client} />
        </div>
      </section>
    </main>
  );
}

export default EditClient;
