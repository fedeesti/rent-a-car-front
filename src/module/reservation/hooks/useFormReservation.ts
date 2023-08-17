import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReservationService } from '../service';
import { Reservation } from '../entities/reservation';
import useClients from '../../client/hooks/useClients';
import useCars from '../../car/hooks/useCars';
import { ReservationFormData } from '../types/reservation';
import formDataToReservationEntity from '../mapper';
import { INITIAL_VALUES } from '../utils/constants';

function useFormReservation() {
  const [formData, setFormData] = useState<ReservationFormData>(INITIAL_VALUES);
  const { clients } = useClients();
  const { cars } = useCars();
  const navigate = useNavigate();
  const service = new ReservationService();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmitForm = async (values: ReservationFormData): Promise<void> => {
    try {
      const reservation: Reservation = formDataToReservationEntity(values);
      service.create(reservation);
      navigate('/reservation');
    } catch (error) {
      console.log('Error al enviar el formulario: ', error);
    }
  };

  return { formData, clients, cars, onChangeInput, onChangeSelect, onSubmitForm };
}

export default useFormReservation;
