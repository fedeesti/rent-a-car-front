export class Car {
  constructor(
    public id: number,
    public brand: string,
    public model: string,
    public color: string,
    public img: string,
    public kms: number,
    public passengers: number,
    public price: number,
    public year: number,
    public transmission: string,
    public airConditioner: boolean,
  ) {}
}
