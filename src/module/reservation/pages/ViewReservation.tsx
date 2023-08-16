import { useParams } from 'react-router-dom';
import MainLayout from '../../../common/components/layout/MainLayout';
import ReservationCard from '../components/card/ReservationCard';
import useReservation from '../hooks/useReservation';
import { Reservation } from '../types/reservation';

function ViewReservation() {
  const { reservationId } = useParams();
  const { reservation }: { reservation: Reservation | undefined } = useReservation(reservationId);
  return (
    <MainLayout>
      <ReservationCard reservation={reservation} />
    </MainLayout>
  );
}

export default ViewReservation;
