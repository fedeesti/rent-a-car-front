import { Routes, Route } from 'react-router-dom';
import Navbar from './components/nabvar/Navbar';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
