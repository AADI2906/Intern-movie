
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Movies } from './components/Movies';
import {BrowserRouter as Router,Route, Link ,Routes, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      

      <Route exact path="/" index element={<div className='container'>
      <Home/>
      </div>} />

      <Route exact path="/Movies" index element={<Movies/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
