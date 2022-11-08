//import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Ubicacion } from './components/Ubicacion';
import { Horarios } from './components/Horarios';
import { IniciarSesion } from './components/IniciarSesion';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
       
        <Routes>
          <Route exact path="/" element={<Menu/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/ubicacion" element={<Ubicacion/>}/>
          <Route exact path="/horarios" element={<Horarios/>}/>
          <Route exact path="/iniciarsesion" element={<IniciarSesion/>}/>
          <Route exact path="*" element={<ErrorNotFound/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
