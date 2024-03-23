import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Experties from './components/pages/Experties';
import Portfolio from './components/pages/Portfolio';
import Product from './components/pages/Product';
import Learn from './components/pages/Learn';
import PitchDesk from './components/pages/PitchDesk';
import Company from './components/pages/Company';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Experties' Component={Experties} />
          <Route path='/Portfolio' Component={Portfolio} />
          <Route path='/Product' Component={Product} />
          <Route path='/Learn' Component={Learn} />
          <Route path='/PitchDesk' Component={PitchDesk} />
          <Route path='/Company' Component={Company} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;