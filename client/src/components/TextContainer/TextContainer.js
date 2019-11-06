import React from 'react';
import './TextContainer.css'
import onlineIcon from '../../icons/closeIcon.png'

const TextContainer = ({users}) => {
  return (
    <div className='text_container'>
      <div>
        <h1>
          Realtime Chat Application <span role="img" aria-label="emoji">💬</span>
        </h1>
      </div>
      {
        users ?
        (
          <div>
            <div className='active_container'>
              <h2>
                {users.map(({name}) => (
                <div key={name} className='active_item'>
                  {name}
                  <img alt='online icon' src={onlineIcon} />
                </div>
              ))}
              </h2>
            </div>
          </div>
        ) :
        (
          null
        )
      }
    </div>
  );
}

export default TextContainer;
