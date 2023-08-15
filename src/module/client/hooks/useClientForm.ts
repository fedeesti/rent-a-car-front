import { ChangeEvent, useEffect, useState } from 'react';
import { Client } from '../types/client';
import { ClientService } from '../service';
import { useNavigate } from 'react-router-dom';

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

function useClientForm(id: string | undefined) {
  const [clientFormData, setClientFormData] = useState<Client>(INITIAL_VALUES);
  const navigate = useNavigate();

  const getClient = async () => {
    if (id) {
      const service = new ClientService();
      const response = await service.getById(id);
      setClientFormData(response);
    }
  };

  useEffect(() => {
    getClient();
  }, []);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setClientFormData({ ...clientFormData, [name]: value });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setClientFormData({ ...clientFormData, [name]: value });
  };

  const onSubmitForm = async (values: Client): Promise<void> => {
    try {
      const service = new ClientService();

      id ? service.update(values) : service.create(values);
      navigate('/client');
    } catch (error) {
      console.log('Error submitting the form: ', error);
    }
  };

  return { clientFormData, onChangeInput, onChangeSelect, onSubmitForm };
}

export default useClientForm;
