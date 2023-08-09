import { ChangeEvent, FormEvent, useState } from 'react';
import { formData } from '../assets/types/car.types';
import { CarService } from '../service';
import { useNavigate } from 'react-router-dom';

function useCarForm(formState: formData) {
  const [carFormData, setFormCarData] = useState<formData>(formState);
  const navigate = useNavigate();

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

      const { data } = await service.create(formData);

      if (data) {
        navigate('/car');
        return 'The car has been created successfully';
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
