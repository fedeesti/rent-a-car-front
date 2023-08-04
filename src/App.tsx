import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nabvar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import SideBar from './components/side/SideBar';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <SideBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
