import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { formData } from '../assets/types/car.types';

function useCarForm(formState: formData) {
  const [carFormData, setFormCarData] = useState<formData>(formState);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormCarData({ ...carFormData, [name]: value });
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormCarData({ ...carFormData, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setFormCarData({ ...carFormData, img: file });
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(carFormData);

      const formData = new FormData();

      Object.entries(carFormData).forEach(([key, value]) => {
        return formData.append(key, value);
      });

      const response = await axios.post('http://localhost:3000/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log('Error submitting the form: ', error);
    }
  };

  return {
    carFormData,
    onChangeInput,
    onChangeSelect,
    handleImageChange,
    onSubmitForm,
  };
}

export default useCarForm;
