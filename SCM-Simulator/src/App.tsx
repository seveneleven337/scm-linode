import { Route } from 'react-router';
import './App.css';
import Navigation from './Navigation';
import Truck from './pages/Truck';
import Location from './pages/Location';
import About from './pages/About';

function App() {
  return (
    <div>
    <Navigation/>
          <Route path="/Truck">
            <Truck/>
          </Route>
          <Route path="/Location">
            <Location/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
    </div>
  ); 
}

export default App;
