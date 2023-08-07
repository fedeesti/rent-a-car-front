import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CarList from '../../module/car/pages/CarList';
import AddCar from '../../module/car//pages/AddCar';

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
