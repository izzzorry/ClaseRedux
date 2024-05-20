import './App.css';
import Mercadona from './components/mercadona';
import { Provider } from 'react-redux';
import store from './store';
//import Carritodelmercado from './components/carritodelmercado';

function App() {
  return (
    <Provider store ={store}>
      <div>
        {/* <Carritodelmercado /> era pa entender los reducers*/}
        <Mercadona/>
      </div>
    </Provider>
  );
}

export default App;

