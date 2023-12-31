import { useEffect, useState } from 'react';
import { CarService } from '../service';
import { Car } from '../types/car.types';

function useCars(): { cars: Car[] | undefined } {
  const [cars, setCars] = useState<Car[] | undefined>();

  const service = new CarService();

  const fetchCars = async (): Promise<void> => {
    try {
      const res: Car[] = await service.getAll();
      setCars(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return { cars };
}

export default useCars;
