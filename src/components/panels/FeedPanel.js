import React from 'react';
import Panel, { PanelBody } from './Panel.js'
import Post from '../Post/Post.js'
import POSTS from '../../assets/demo/posts.js'

const FeedPanel = () => {
  return (
  <Panel
    fontAwesomeName='fas fa-align-left'
    title='feed'
    gridColumn='4'
    span='3'
  >
    <PanelBody style={{ overflow: 'scroll' }}>
      {POSTS.map((post, index) => <Post post={post} key={index} />)}
    </PanelBody>
  </Panel>
);
}

export default FeedPanel;
