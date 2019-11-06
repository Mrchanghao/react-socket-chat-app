import React, {useEffect, useState} from 'react';
import './Chat.css'
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'

let socket

const Chat = ({location}) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'https://react-socket-application.herokuapp.com/'

  useEffect(() => {

    const {name ,room} = queryString.parse(location.search)

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    // console.log(socket)
    socket.emit('join', {name, room}, () => {
      // alert(error);

    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }

  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })

    socket.on('roomData', ({users}) => {
      setUsers(users);
    })

    return () => {
      socket.emit('disconnect');

      socket.off();
    }

  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault();
    
    if(message) { 
      socket.emit('sendMessage', message, () => setMessage(''))
    }

  }

  return (
    <div className='outer_container'>
      <div className='container'>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} 
          setMessage={setMessage} sendMessage={sendMessage} />
        
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;
