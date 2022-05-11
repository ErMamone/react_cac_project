import './App.css';
import IndexPage from './Pages/IndexPage';
import Header from "./Pages/Header";

var context;

function App() {
  return (
    <div className="App">
        <Header params={context} className="Heaher-Context"/>
        <IndexPage params={context} className="Body-Context"/>
    </div>
  );
}

export default App;
