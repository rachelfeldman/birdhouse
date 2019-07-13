import React from 'react';
import Panel, { PanelBody } from './Panel.js';
import './FlyPanel.css'
import avatar from './avatar.jpeg';

const USER = {
  avatar: avatar,
  name: 'Carlos'
};

const FlyPanel = () => (
  <Panel fontAwesomeName="fas fa-feather-alt" title='fly' gridColumn='2'>
    <PanelBody>
      <div className='avatar'>
        <img className='avatar' src={avatar} alt='avatar' />
        <div className='avatar-name'>
          <h3>{USER.name}</h3>
        </div>
      </div>
      <textarea className='flypanel' rows="10" />
      <button className='flypanel'>submit</button>
    </PanelBody>
  </Panel>
);

export default FlyPanel;
