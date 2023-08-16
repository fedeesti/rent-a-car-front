import axios, { AxiosResponse } from 'axios';
import { Reservation } from '../types/reservation';

const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;
const BASE_ROUTE = '/reservation';

export class ReservationService {
  async findAll(): Promise<Reservation[]> {
    try {
      const { data } = await axios.get(`${URL_API_BASE}${BASE_ROUTE}`);

      return data;
    } catch (error) {
      throw new Error('Failed while fetching reservations');
    }
  }

  async findById(id: string | undefined): Promise<Reservation> {
    try {
      const { data } = await axios.get(`${URL_API_BASE}${BASE_ROUTE}/${id}`);
      return data;
    } catch (error) {
      throw new Error('Failed while fetching reservation');
    }
  }

  async delete(id: number | undefined): Promise<AxiosResponse<any, any>> {
    try {
      const response: AxiosResponse<any, any> = await axios.delete(
        `${URL_API_BASE}${BASE_ROUTE}/${id}`,
      );
      return response;
    } catch (error) {
      throw new Error('Error in deleting the reservation');
    }
  }
}