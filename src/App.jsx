import './App.css';
import './index.css'
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import Store from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <div className='container'>
       <Todo/>
      </div>
    </Provider>
  );
}

export default App;