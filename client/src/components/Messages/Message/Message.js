import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {

  let isSentCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentCurrentUser = true;
  }

  return (
    isSentCurrentUser ? 
    (
      <div className='message_container justify_end'>
        <p className='sent_text pr-10'>{trimmedName}</p>
        <div className='message_box background_blue'>
          <p className='message_text color_white'>{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    ) : (
      <div className='message_container justify_start'>
        <div className='message_box background_light'>
          <p className='message_text color_dark'>{text}</p>
        </div>
        <p className='sent_text pl-10'>{user}</p>
      </div>
    )
  );
}

export default Message;
