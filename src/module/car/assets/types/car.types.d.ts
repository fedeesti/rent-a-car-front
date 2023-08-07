export interface Car {
  id: number;
  brand: string;
  model: string;
  color: string;
  img: string;
  kms: number;
  passengers: number;
  price: number;
  year: number;
  transmission: string;
  airConditioner: boolean;
}

export interface formData {
  brand: string;
  model: string;
  color: string;
  img: File | null;
  kms: string;
  passengers: string;
  price: string;
  year: string;
  transmission: string;
  airConditioner: string;
}
