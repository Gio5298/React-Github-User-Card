import React from 'react';

const FollowersCard = ({ followers, img}) => {
  return (
    <div className='card'>
      <img src={img} alt='user' />
      <p className='name'>Name: {followers}</p>
    </div>
  )
}

export default FollowersCard;