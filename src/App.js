//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import AppNavbar from './compoent/Navbar';
import Products from './compoent/Products';
import Cart from './compoent/Cart';
import Fav from './compoent/fav';

function App() {

  return (

    <div className="App">
     <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
     </Router>
    
     
    </div>
  );
}

export default App;
