import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toggle } from './components/Toggle';
import { Counter } from './components/Counter';
import { Todo } from './components/Todo';

function App() {
    return(
        <div className='container text-center'>
            <div className="row"><h1>My First React App</h1></div>
            
            <Counter />
            <Toggle />
            <Todo />
        </div>
    );
}
export default App;