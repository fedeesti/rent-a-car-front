import { useEffect, useState } from 'react';
import { Client } from '../types/client';
import { ClientService } from '../service';

function useClients() {
  const [clients, setClients] = useState<Client[]>();
  const service = new ClientService();

  const fetchClients = async () => {
    try {
      const response: Client[] = await service.getAll();
      setClients(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return { clients };
}

export default useClients;
