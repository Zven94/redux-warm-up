import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { ObjectContainer } from './components/ObjectContainer';

function App() {
  return (
    <main className="App">
      <header className="App-header">
         <Navbar   />
         <ObjectContainer />
      </header>
    </main>
  );
}

export default App;
