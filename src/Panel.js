import React from 'react';
import './Panel.css'

const Panel = ({ fontAwesomeName, title, gridColumn, children }) => (
  <div className='panel' style={{ 'gridColumn': `${gridColumn} / span 1` }}>
    <div className='panel-title'>
      <i className={`${fontAwesomeName} panel-icon`}></i>
      <h2 className='panel-title'>{title}</h2>
    </div>
      {children}
  </div>
);

export default Panel;

