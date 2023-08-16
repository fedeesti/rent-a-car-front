export interface Reservation {
  id: number;
  startDate: string;

  finishDate: string;

  pricePerDay: number;

  totalPrice: number;

  paymentMethod: string;

  statusId: boolean;

  car: Car;

  client: Client;
}
