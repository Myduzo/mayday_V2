import React, { useContext } from "react";
import Posts from "./Posts";
import Home from "./home/Home";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import Messenger from "./Messenger";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            {user ? <Home /> : <Signup />}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/signup">
            {user ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="/profile/:userId" component={Profile}>
            <Profile />
          </Route>
          <Route path="/messenger" component={Messenger}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
