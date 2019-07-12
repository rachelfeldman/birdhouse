import React from 'react';
import Panel from './Panel.js';
import './FlyPanel.css'

const FlyPanel = () => {
  return (
    <Panel fontAwesomeName="fas fa-feather-alt" title='fly' gridColumn='2'>
      <div className='flypanel'>
        <textarea className='flypanel' rows="10" />
        <button className='flypanel'>submit</button>
      </div>
    </Panel>
  );
}

export default FlyPanel;
