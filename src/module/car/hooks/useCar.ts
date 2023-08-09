import { useEffect, useState } from 'react';
import { CarService } from '../service';
import { Car } from '../assets/types/car.types';

function useCar(carId: string | undefined): { car: Car | undefined } {
  const [car, setCar] = useState<Car | undefined>();

  const service = new CarService();

  const fetchCar = async (): Promise<void> => {
    try {
      const res: Car = await service.getById(carId);
      setCar(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  return { car };
}

export default useCar;
