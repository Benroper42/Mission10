import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Bowlers/BowlerList';

function App() {
  return (
    <div className="App">
      <Header
        title="Jack and Jills Bowling League"
        description="Learn about the best bowlers this side of the Mississippi"
      />
      <BowlerList />
    </div>
  );
}

export default App;
