import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Car, formData } from '../types/car.types';
import { CarService } from '../service';
import { useNavigate } from 'react-router-dom';

function useCarForm(formState: formData) {
  const [carFormData, setFormCarData] = useState<formData>(formState);
  const navigate = useNavigate();

  const { id } = carFormData;
  let response: Car;
  let status: string;

  useEffect(() => {
    setFormCarData(formState);
  }, [formState]);

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

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<string | undefined> => {
    e.preventDefault();
    try {
      const service = new CarService();
      const formData = new FormData();

      Object.entries(carFormData).forEach(([key, value]) => {
        return formData.append(key, value);
      });

      if (id) {
        const { data } = await service.update(id, formData);
        response = data;
        status = 'updated';
      } else {
        const { data } = await service.create(formData);
        response = data;
        status = 'created';
      }

      if (response) {
        navigate('/car');
        return `The car has been ${status} successfully`;
      }
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
