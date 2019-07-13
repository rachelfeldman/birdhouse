import React from 'react';
import Panel, { PanelBody } from './Panel.js';
import Avatar from '../Avatar/Avatar.js';
import './FlyPanel.css';
import { CURRENT_USER } from '../../assets/demo/users.js';

const FlyPanel = () => (
  <Panel fontAwesomeName='fas fa-feather-alt' title='fly' gridColumn='2'>
    <PanelBody>
      <Avatar user={CURRENT_USER} />
      <textarea className='flypanel' rows="10" />
      <button className='flypanel'>submit</button>
    </PanelBody>
  </Panel>
);

export default FlyPanel;
