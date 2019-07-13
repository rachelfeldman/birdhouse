import React from 'react';
import './Avatar.css';

const AvatarBody = ({ user, className }) => (
  <div className={`avatar${className ? ` ${className}` : ''}`}>
    <div className='avatar-container'>
      <img className='avatar' src={user.avatar} alt='avatar' />
    </div>
    <div className='avatar-name'>
      <h3>{user.name}</h3>
    </div>
  </div>
);

const Avatar = ({ user, className, clickable }) => (
  clickable ? (
    <a href='#' className={`avatar${className ? ` ${className}` : ''}`}>
      <AvatarBody user={user} />
    </a>
  ) : (
    <AvatarBody className={className} user={user} />
  )
);

export default Avatar
