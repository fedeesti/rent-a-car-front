import { useLocation, useNavigate } from 'react-router';
import { ClientService } from '../service';

function useDeleteClient(id: number | undefined) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onDelete = async () => {
    try {
      const service = new ClientService();
      await service.delete(id);

      if (pathname.includes('view') || pathname.includes('edit')) {
        navigate('/client');
      } else {
        navigate(0);
      }

      return 'The client has been deleted successfully';
    } catch (error) {
      console.log('Error deleting a client:', error);
    }
  };

  return { onDelete };
}

export default useDeleteClient;
