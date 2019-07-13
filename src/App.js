import React from 'react';
import FlyPanel from './components/panels/FlyPanel.js';
import RoostPanel from './components/panels/RoostPanel.js';
import FeedPanel from './components/panels/FeedPanel.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>birdhouse</h1>
      </header>
      <div className='container'>
        <FlyPanel />
        <FeedPanel />
        <RoostPanel />
      </div>
    </div>
  );
}

export default App;
