import React from 'react';
import Panel from './Panel.js';
import './FlyPanel.css'
import avatar from './avatar.jpeg';

const USER = {
  avatar: avatar,
  name: 'Carlos'
};

const FlyPanel = () => {
  return (
    <Panel fontAwesomeName="fas fa-feather-alt" title='fly' gridColumn='2'>
      <div className='flypanel'>
        <div className='avatar'>
          <img className='avatar' src={avatar} alt='avatar' />
          <div className='avatar-name'>
            {USER.name}
          </div>
        </div>
        <textarea className='flypanel' rows="10" />
        <button className='flypanel'>submit</button>
      </div>
    </Panel>
  );
}

export default FlyPanel;
