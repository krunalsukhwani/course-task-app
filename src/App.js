import React from 'react';
import './App.css';

//arrow function
const App = () => {
  //JSX Code
  //return <h1 title='Professor: Krunal'>Hello Friends, Welcome to COMP229</h1>;

  //React code
  return React.createElement('h1',{title:'Professor: Krunal'},'Hello Friends, Welcome to COMP229');
};

export default App;
