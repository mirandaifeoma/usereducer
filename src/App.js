import React,{useReducer} from 'react';
import Home from './pages/Home'
import {Parent} from './pages/Parent';

function App() {
  return (
    <div className="App">
      
      <Parent />
       <Home />
    </div>
  );
}

export default App;
