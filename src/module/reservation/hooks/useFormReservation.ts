import { useState } from 'react';

const INITIAL_VALUES = {
  startDate: '',
  finishDate: '',
  pricePerDay: '',
  totalPrice: '',
  paymentMethod: '',
  statusId: '',
  car: '',
  client: '',
};

function useFormReservation() {
  const [formData, setFormData] = useState(INITIAL_VALUES);

  const onSubmitForm = async (values: any) => {
    try {
      console.log(values);
    } catch (error) {
      console.log('Error al enviar el formulario: ', error);
    }
  };

  return { formData, onSubmitForm };
}

export default useFormReservation;
