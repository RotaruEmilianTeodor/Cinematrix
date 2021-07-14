import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App2 from './App2'

import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
    <div className="App">
      <App2></App2>
    </div>
    </GlobalProvider>
  );
}

export default App;
