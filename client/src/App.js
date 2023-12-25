import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Carousel from './components/Carousel';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Carousel />} />
          <Route path='/menu' element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
