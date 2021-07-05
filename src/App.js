import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import LogIn from './components/LogIn/LogIn/LogIn';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/appointment'>
            <Appointment />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
