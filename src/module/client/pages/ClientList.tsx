import ClientHeader from '../components/table/ClientHeader';
import ClientTable from '../components/table/ClientTable';
import { Client } from '../types/client';
import useClients from '../hooks/useClients';

function ClientList() {
  const { clients }: { clients: Client[] | undefined } = useClients();

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
