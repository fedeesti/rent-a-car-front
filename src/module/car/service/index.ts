import axios, { AxiosResponse } from 'axios';
import { Car } from '../assets/types/car.types';
import { apiToEntity } from '../mapper';

const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;
const BASE_ROUTE = '/cars';

export class CarService {
  async getAll(): Promise<Car[]> {
    try {
      const { data: cars } = await axios.get(`${URL_API_BASE}${BASE_ROUTE}`);

      return cars.map((car: Car) => {
        return apiToEntity(car);
      });
    } catch (error) {
      throw new Error('Failed while fetching cars');
    }
  }

  async getById(id: string | undefined): Promise<Car> {
    try {
      const { data: car } = await axios.get(`${URL_API_BASE}${BASE_ROUTE}/${id}`);

      return apiToEntity(car);
    } catch (error) {
      throw new Error('Failed while fetching the car');
    }
  }

  async create(formData: FormData): Promise<AxiosResponse<Car>> {
    try {
      const response = await axios.post(`${URL_API_BASE}${BASE_ROUTE}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response;
    } catch (error) {
      throw new Error('Error submitting the form');
    }
  }

  async update(id: string, formData: FormData): Promise<AxiosResponse<Car>> {
    try {
      const response = await axios.patch(`${URL_API_BASE}/${id}`, formData);

      return response;
    } catch (error) {
      console.log(error);
      throw new Error('Error in updating the car');
    }
  }

  async delete(id: string) {
    try {
      const response = await axios.delete(`${URL_API_BASE}/${id}`);
      return response;
    } catch (error) {
      throw new Error('Error in deleting  the car');
    }
  }
}
