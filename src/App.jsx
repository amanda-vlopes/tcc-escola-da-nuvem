import { Route, Routes } from 'react-router-dom';
import './App.css';
import CurriculoAlice from './pages/CurriculoAlice';
import CurriculoAmanda from './pages/CurriculoAmanda';
import CurriculoHugo from './pages/CurriculoHugo';
import Home from './pages/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/curriculo-alice' element={ <CurriculoAlice /> } />
      <Route path='/curriculo-amanda' element={ <CurriculoAmanda /> } />
      <Route path='/curriculo-hugo' element={ <CurriculoHugo /> } />
    </Routes>
    </>
  )
}

export default App
