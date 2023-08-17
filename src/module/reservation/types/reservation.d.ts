export interface Reservation {
  id?: number;
  startDate: string;
  finishDate: string;
  pricePerDay: number;
  totalPrice: number;
  paymentMethod: string;
  statusId: boolean;
  car: Car;
  user: Client;
}

export interface ReservationFormData {
  car: string;
  user: string;
  finishDate: string;
  paymentMethod: string;
  pricePerDay: string;
  startDate: string;
  statusId: string;
  totalPrice: string;
}
