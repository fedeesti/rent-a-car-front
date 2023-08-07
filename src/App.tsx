import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nabvar/Navbar';
import SideBar from './components/side/SideBar';
import AppRoutes from './components/routes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <SideBar />
      </header>
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
