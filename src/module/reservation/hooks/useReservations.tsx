import { useEffect, useState } from 'react';
import { Reservation } from '../types/reservation';
import { ReservationService } from '../service';

function useReservations() {
  const [reservations, setReservations] = useState<Reservation[]>();
  const service = new ReservationService();

  const fetchReservations = async () => {
    try {
      const response: Reservation[] = await service.findAll();
      setReservations(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return { reservations };
}

export default useReservations;
