import './App.css';
import Logo from './components/Logo';
import Button from './components/Button';
import Screen from './components/Screen';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    if(isNaN(val) && isNaN(input.charAt(input.length - 1))) {
      setInput((input.slice(0, - 1) + val));
    }
    else{
      setInput(input + val);
    }
  };

  const calculate = () => {
    try {
      setInput(`${evaluate(input)}`);
    } catch (error) {
      console.log(error);  
    }
    
  };

  return (
    <div className="App">
      <Logo />

      <div className='calc-container'>
        <Screen 
          input = {input}
        />
        <div className='row'>
          <Button handlerClick= {addInput}>1</Button>
          <Button handlerClick= {addInput}>2</Button>
          <Button handlerClick= {addInput}>3</Button>
          <Button handlerClick= {addInput}>+</Button>
        </div>

        <div className='row'>
          <Button handlerClick= {addInput}>4</Button>
          <Button handlerClick= {addInput}>5</Button>
          <Button handlerClick= {addInput}>6</Button>
          <Button handlerClick= {addInput}>-</Button>
        </div>
          
        <div className='row'>
          <Button handlerClick= {addInput}>7</Button>
          <Button handlerClick= {addInput}>8</Button>
          <Button handlerClick= {addInput}>9</Button>
          <Button handlerClick= {addInput}>*</Button>
        </div>
          
        <div className='row'>
          <Button handlerClick= {calculate}>=</Button>
          <Button handlerClick= {addInput}>0</Button>
          <Button handlerClick= {addInput}>.</Button>
          <Button handlerClick= {addInput}>/</Button>
        </div>

        <div className='row'>
          <Clear handlerClear = {() => setInput('')}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;