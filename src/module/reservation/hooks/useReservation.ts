import { useEffect, useState } from 'react';
import { Reservation } from '../types/reservation';
import { ReservationService } from '../service';

function useReservation(id: string | undefined) {
  const [reservation, setReservation] = useState<Reservation>();
  const service = new ReservationService();

  const fetchReservation = async (): Promise<void> => {
    try {
      const response: Reservation = await service.findById(id);
      setReservation(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReservation();
  }, []);

  return { reservation };
}

export default useReservation;
