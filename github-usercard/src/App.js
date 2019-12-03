import React from 'react';
import './App.css';
import User from './components/user';
import Followers from './components/followers';

function App() {

  return (
    <div className="App">
      <h1>GitHub User Card</h1>
        <User />
        <Followers />
    </div>
  );
}

export default App;