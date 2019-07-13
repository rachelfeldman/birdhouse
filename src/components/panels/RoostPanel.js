import React from 'react';
import Panel, { PanelBody } from './Panel.js';
import Avatar from '../Avatar/Avatar.js';
import { CURRENT_USER } from '../../assets/demo/users.js'

const RoostPanel = () => (
  <Panel fontAwesomeName='fas fa-broadcast-tower' title='roost' gridColumn='8'>
    <PanelBody>
      {CURRENT_USER.friends.map((friend, index) => (
        <Avatar user={friend} key={index} clickable />
      ))}
    </PanelBody>
  </Panel>
);

export default RoostPanel;
