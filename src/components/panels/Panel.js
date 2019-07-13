import React, { Children, cloneElement } from 'react';
import './Panel.css'

const Panel = ({ fontAwesomeName, title, gridColumn, children, span }) => (
  <div className='panel' style={{ 'gridColumn': `${gridColumn} / span ${span || 1}` }}>
      {children}
  </div>
);

export const PanelBody = ({ children }) => (
  <div className='panel-body'>
    {Children.map(children, child => (
        cloneElement(child, {
          className: child.props.className && child.props.className.length > 0 ?
          child.props.className + ' panel-child' :
          'panel-child'
        }))
      )}
  </div>
);

export default Panel;

