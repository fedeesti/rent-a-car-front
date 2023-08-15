import { ChangeEvent, useEffect, useState } from 'react';
import { Client } from '../types/client';
import { ClientService } from '../service';
import { useNavigate } from 'react-router-dom';

function useClientForm(initialState: Client) {
  const [clientFormData, setClientFormData] = useState<Client>(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    setClientFormData(initialState);
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

      service.create(values);
      navigate('/client');
    } catch (error) {
      console.log('Error submitting the form: ', error);
    }
  };

  return { clientFormData, onChangeInput, onChangeSelect, onSubmitForm };
}

export default useClientForm;
