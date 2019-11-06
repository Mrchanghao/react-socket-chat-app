import React from 'react';
import './Input.css';

const Input = ({setMessage, sendMessage, message}) => {
  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault();
      sendMessage(e);
    }}>
      <input 
        className='input'
        type='text' value={message}  
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key==='Enter' ? sendMessage(e) : null}
          />

      <button className='send_button' type='submit'>Submit</button>
    </form>
  );
}

export default Input;
