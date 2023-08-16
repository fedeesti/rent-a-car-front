export interface Reservation {
  id: number;
  startDate: Date;

  finishDate: Date;

  pricePerDay: number;

  totalPrice: number;

  paymentMethod: string;

  statusId: boolean;

  car: Car;

  client: Client;
}
