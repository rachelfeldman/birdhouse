import React from 'react';
import FlyPanel from './FlyPanel.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>birdhouse</h1>
      </header>
      <div className='container'>
        <FlyPanel />
        <div className='panel' style={{ 'gridColumn': '4 / span 1' }}>
          <div className='panel-title'>
            <i style={{ marginTop: '3%', marginRight: '5%' }} className="fas fa-align-left"></i>
            <h2 style={{ color: 'white', margin: 0 }}>feed</h2>
          </div>
        </div>
        <div className='panel' style={{ 'gridColumn': '6 / span 1' }}>
          <div className='panel-title'>
            <i style={{ marginTop: '3%', marginRight: '5%' }} className="fas fa-comments"></i>
            <h2 style={{ color: 'white', margin: 0 }}>chirp</h2>
          </div>
        </div>
        <div className='panel' style={{ 'gridColumn': '8 / span 1' }}>
          <div className='panel-title'>
            <i style={{ marginTop: '3%', marginRight: '5%' }} className="fas fa-broadcast-tower"></i>
            <h2 style={{ color: 'white', margin: 0 }}>roost</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;