import { useEffect, useState } from 'react';
import { ClientService } from '../service';
import { Client } from '../types/client';

function useClient(clientId: string | undefined) {
  const [client, setClient] = useState<Client>();

  const service = new ClientService();

  const fetchClient = async (): Promise<void> => {
    try {
      const res = await service.getById(clientId);
      setClient(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return { client };
}

export default useClient;
