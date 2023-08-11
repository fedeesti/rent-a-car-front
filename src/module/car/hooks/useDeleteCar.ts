import { useNavigate, useLocation } from 'react-router-dom';
import { CarService } from '../service';

function useDeleteCar(id: number) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onDelete = async () => {
    try {
      const service = new CarService();

      await service.delete(id);

      if (pathname.includes('view') || pathname.includes('edit')) {
        navigate('/car');
      } else {
        navigate(0);
      }

      return 'The car has been created successfully';
    } catch (error) {
      console.log('Error deleting a car:', error);
    }
  };

  return { onDelete };
}

export default useDeleteCar;
