import React from 'react';
import Avatar from '../Avatar/Avatar.js';

const Post = ({ post, className }) => {
  const {
    text,
    user:name,
    user_avatar:avatar,
    created_at:createdAt
  } = post;

  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Avatar user={{ name, avatar }} className={className} />
      <pre
        className={className}
        style={{
          margin: '20px auto auto auto',
          borderRadius: '5px',
          textAlign: 'left',
          backgroundColor: 'white',
          color: 'black',
          overflowX: 'hidden',
          whiteSpace: 'pre-wrap'
        }}
      >
        {text}
      </pre>
    </div>
  );
}

export default Post;
