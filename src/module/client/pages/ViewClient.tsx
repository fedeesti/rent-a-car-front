import { useParams } from 'react-router';
import CardClient from '../components/card/CardClient';
import useClient from '../hooks/useClient';
import { Client } from '../types/client';
import MainLayout from '../../../common/components/layout/MainLayout';

function ViewClient() {
  const { clientId } = useParams();
  const { client }: { client: Client | undefined } = useClient(clientId);

  return (
    <MainLayout>
      <CardClient client={client} />
    </MainLayout>
  );
}

export default ViewClient;
