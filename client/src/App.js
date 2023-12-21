import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Carousel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
