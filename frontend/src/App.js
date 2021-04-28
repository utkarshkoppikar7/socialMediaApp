import './App.css';
import React from "react";
import Login from './components/loginForm';
import SignUp from './components/signup'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Our Social Media App</h1>
      <Router>
          <Route path="/" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
      </Router>
      
    </div>
  );
}

export default App;
