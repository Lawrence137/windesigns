
import './App.css';
import { Login } from './Login';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Investment } from './Investment';

function App() {
  return (
    <div className="App">
      <Login />
      <Home />
      <Investment />
      <Navbar />
    </div>
  );
}

export default App;
