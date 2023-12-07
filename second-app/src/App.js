import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from './img/logo.jpg';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logo}
          alt='logo bonito'
        />
      </div>
    
      <div className='main-container'>
        <Counter numClicks={numClicks} />

        <Button 
          text='Click'
          esBotondeClick={true}
          manejarClick={manejarClick}/>

        <Button 
          text='Reload'
          esBotondeClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
