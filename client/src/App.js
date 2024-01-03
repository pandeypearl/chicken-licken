import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Carousel from './components/Carousel';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import { CartProvider } from './pages/Cart/CartContext';

function App() {
  return (
    <CartProvider>
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Carousel />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </>
    </CartProvider>
  );
}

export default App;
