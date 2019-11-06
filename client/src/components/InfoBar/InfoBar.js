import React from 'react';
import './InfoBar.css'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'


const InfoBar = ({room}) => {
  return (
    <div className='info_bar'>
      <div className='left_inner_container'>
        <img className='online_icon' 
          alt='image_icon'
          src={onlineIcon} />
        <h3>{room}</h3>
      </div>
      <div className='right_inner_container'>
        <a href='/'><img src={closeIcon} alt='close icon' /></a>
      </div>
    </div>
  );
}

export default InfoBar;
