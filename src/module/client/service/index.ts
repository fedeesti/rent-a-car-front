import axios, { AxiosResponse } from 'axios';
import { Client } from '../types/client';

const URL_API_BASE = import.meta.env.VITE_URL_API_BASE;
const BASE_ROUTE = '/user';

export class ClientService {
  async getAll(): Promise<Client[]> {
    try {
      const { data } = await axios.get(`${URL_API_BASE}${BASE_ROUTE}`);

      return data;
    } catch (error) {
      throw new Error('Failed while fetching clients');
    }
  }

  async getById(id: string | undefined): Promise<Client> {
    try {
      const { data } = await axios.get(`${URL_API_BASE}${BASE_ROUTE}/${id}`);

      return data;
    } catch (error) {
      throw new Error('Failed while fetching clients');
    }
  }

  async delete(id: number | undefined): Promise<AxiosResponse<any, any>> {
    try {
      const response: AxiosResponse<any, any> = await axios.delete(
        `${URL_API_BASE}${BASE_ROUTE}/${id}`,
      );
      return response;
    } catch (error) {
      throw new Error('Error in deleting the client');
    }
  }
}
