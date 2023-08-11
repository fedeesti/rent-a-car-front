import { Car } from '../entities/car';

export function apiToEntity({
  id,
  brand,
  model,
  color,
  img,
  kms,
  passengers,
  price,
  year,
  transmission,
  airConditioner,
}: Car): Car {
  return new Car(
    id,
    brand,
    model,
    color,
    img,
    kms,
    passengers,
    price,
    year,
    transmission,
    airConditioner,
  );
}
