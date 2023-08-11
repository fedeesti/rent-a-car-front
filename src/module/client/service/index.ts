import axios from 'axios';
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
}
