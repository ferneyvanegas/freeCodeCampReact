import './App.css';
import Testimony from './components/Testimony';

import data from './assets/json/data.json';

function App() {
  return (
    <div className="App">
      <div className='master-container'>
        <h1>Esto es lo que dicen nuestro Alumnos</h1>

        {
          data.map((testimony, index) => (
            <Testimony 
              name={testimony.name}
              country={testimony.country}
              img={testimony.img}
              charge={testimony.charge}
              company={testimony.company}
              testimony={testimony.testimony}
              bold={testimony.bold}
            />
          ))
        }
      </div> 
    </div>
  );
}

export default App;
