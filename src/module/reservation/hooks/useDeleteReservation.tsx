import { useLocation, useNavigate } from 'react-router';
import { ReservationService } from '../service';

function useDeleteReservation(id: number | undefined) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onDelete = async () => {
    try {
      const service = new ReservationService();
      await service.delete(id);

      if (pathname.includes('view') || pathname.includes('edit')) {
        navigate('/reservation');
      } else {
        navigate(0);
      }

      return 'The reservation has been deleted successfully';
    } catch (error) {
      console.log('Error deleting a reservation:', error);
    }
  };

  return { onDelete };
}

export default useDeleteReservation;
