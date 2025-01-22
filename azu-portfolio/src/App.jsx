import './styles/App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar />
      <main className="nx-3">
        <Outlet />
      </main>
      <><Footer></Footer></>
    </>
  );
}

export default App;
