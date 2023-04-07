import React from 'react';
import './App.css';
import { Greet } from './pages/Greet';
import { LoggedIn } from './State/LoggedIn';
import  Stat  from './State/Stat';
import Fetch from './pages/Fetch';





function App() {
  return (
    <div className="App">

        <Greet name={"richard"} age={2}/>
        <LoggedIn/>
        <Stat status={'loading'}/>
        <Fetch/>


    </div>
  );
}

export default App;
