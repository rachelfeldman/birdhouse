import React from 'react';
import Panel, { PanelBody } from './Panel.js'

const FeedPanel = () => (
  <Panel
    fontAwesomeName='fas fa-align-left'
    title='feed'
    gridColumn='4'
    span='3'
  >
    <PanelBody />
  </Panel>
);

export default FeedPanel;
