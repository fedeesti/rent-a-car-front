import { Car, formData as IFormData } from '../types/car.types';

function transformCarToFormDataType(car: Car): IFormData {
  return {
    id: car.id,
    brand: car.brand,
    model: car.model,
    color: car.color,
    img: car.img,
    kms: car.kms.toString(),
    passengers: car.passengers.toString(),
    price: car.price.toString(),
    year: car.year.toString(),
    transmission: car.transmission,
    airConditioner: car.airConditioner.toString(),
  };
}

export default transformCarToFormDataType;
