import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

  return (
    <div className="App">
      <h1>GitHub User Card</h1>
        <UserCard  />
        <Followers />
    </div>
  );
}

export default App;