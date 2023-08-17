export class Reservation {
  constructor(
    public car: number,
    public user: number,
    public finishDate: string,
    public paymentMethod: string,
    public pricePerDay: number,
    public startDate: string,
    public statusId: string,
    public totalPrice: number,
  ) {}
}
