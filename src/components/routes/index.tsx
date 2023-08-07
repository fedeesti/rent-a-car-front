import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CarList from '../../pages/CarList';
import AddCar from '../form/AddCar';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car" element={<CarList />} />
      <Route path="/car/create" element={<AddCar />} />
    </Routes>
  );
}

export default AppRoutes;
