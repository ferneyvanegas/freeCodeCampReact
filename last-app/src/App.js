import './App.css';
import logo from './assets/img/logo.png';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='task-app'>
      <div className='logo-container'>
        <img 
          src={logo}
          className='logo'
        />
      </div>

      <div className='task-main-list'>
        <h1>Mis Tareas</h1>
          <TaskList />
      </div>
    </div>
  );
}

export default App;
