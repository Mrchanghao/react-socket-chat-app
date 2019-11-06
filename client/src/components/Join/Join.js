import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css'

const Join = () => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className='join_outer_container'>
      <div className='join_inner_container'>
        <h1 className='heading'>Join</h1>
        <div>
          <input placeholder='Name' 
            room={name}
            onChange={(e) => setName(e.target.value)}
            className='join_input' type='text' />
        </div>

        <div>
          <input placeholder='Room' 
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className='join_input mt-20' type='text' />
        </div>
        <Link 
          onClick={e => (!name || !room) ? e.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}>
          <button className='button mt-20' type='submit'>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
