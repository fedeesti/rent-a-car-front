import Navbar from './common/components/nabvar/Navbar';
import SideBar from './common/components/side/SideBar';
import AppRoutes from './common/routes';
import Footer from './common/components/footer/Footer';
import Header from './common/components/header/Header';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
