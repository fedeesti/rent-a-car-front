import ClientHeader from '../components/table/ClientHeader';
import ClientTable from '../components/table/ClientTable';
import { Client } from '../types/client';

const clients: Client[] = [
  {
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
  },
  {
    id: 2,
    name: 'Horacio',
    lastname: 'Rodriguez Larreta',
    docType: 'DNI',
    docNumber: '12345678',
    nationality: 'Argentina',
    address: 'Av. Maipú, San Isidro',
    phone: '1122334455',
    email: 'sombrillita@hotmail.com',
    birthdate: '10/09/1959',
  },
  {
    id: 3,
    name: 'Carlos',
    lastname: 'Maslatón',
    docType: 'DNI',
    docNumber: '12345678',
    nationality: 'Argentina',
    address: 'Edificio Kavannagh, Retiro',
    phone: '1122334455',
    email: 'proceda.carlos@gmail.com',
    birthdate: '01/10/1955',
  },
];

function ClientList() {
  return (
    <main className="sm:ml-56">
      <section className="rounded-lg mt-14 pt-3 sm:p-5  h-screen">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12" data-cy="client-list-container">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <ClientHeader />
            {clients?.length !== 0 ? (
              <ClientTable clients={clients} />
            ) : (
              <p className="m-4" data-cy="list-message-without-clients">
                There are no clients loaded at this time
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ClientList;
