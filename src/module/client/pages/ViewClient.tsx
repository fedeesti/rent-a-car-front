import { useParams } from 'react-router';
import CardClient from '../components/card/CardClient';
import useClient from '../hooks/useClient';
import { Client } from '../types/client';

function ViewClient() {
  const { clientId } = useParams();
  const { client }: { client: Client | undefined } = useClient(clientId);

  return (
    <main className="sm:ml-56">
      <section className="rounded-lg mt-14 pt-3 sm:p-5  h-screen">
        <CardClient client={client} />
      </section>
    </main>
  );
}

export default ViewClient;
