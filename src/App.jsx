import { Route, Routes } from 'react-router-dom';
import './App.css';
import CurriculoAmanda from './pages/CurriculoAmanda';
import CurriculoHugo from './pages/CurriculoHugo';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {

  return (
    <Routes >
      <Route path='/' element={ <Home /> } />
      <Route path='/curriculo-amanda' element={ <CurriculoAmanda /> } />
      <Route path='/curriculo-hugo' element={ <CurriculoHugo /> } />
      <Route path='*' element={ <Error />} />
    </Routes>
  )
}

export default App
