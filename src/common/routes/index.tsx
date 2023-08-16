import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CarList from '../../module/car/pages/CarList';
import AddCar from '../../module/car//pages/AddCar';
import CarDetails from '../../module/car/pages/CarDetails';
import EditCar from '../../module/car/pages/EditCar';
import ClientList from '../../module/client/pages/ClientList';
import AddClient from '../../module/client/pages/AddClient';
import EditClient from '../../module/client/pages/EditClient';
import ViewClient from '../../module/client/pages/ViewClient';
import ReservationList from '../../module/reservation/pages/ReservationList';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car" element={<CarList />} />
      <Route path="/car/:carId/view" element={<CarDetails />} />
      <Route path="/car/:carId/edit" element={<EditCar />} />
      <Route path="/car/create" element={<AddCar />} />
      <Route path="/client">
        <Route index element={<ClientList />} />
        <Route path="create" element={<AddClient />} />
        <Route path=":clientId/view" element={<ViewClient />} />
        <Route path=":clientId/edit" element={<EditClient />} />
      </Route>
      <Route path="/reservation">
        <Route index element={<ReservationList />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
