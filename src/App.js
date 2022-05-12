import './App.css';
import IndexPage from './Pages/IndexPage';
import Header from "./Pages/Header";

var context = "hola mundo";

function App() {
  return (
    <div className="App">
        <Header value={context} className="Header-Context"/>
        <IndexPage value={context} className="Body-Context"/>
    </div>
  );
}

export default App;
