import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/appointment'>
          <Appointment />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
