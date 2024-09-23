import React, { useEffect, useState } from 'react';
import './ChatContainer.css';
import ChatList from './ChatList';
import InputText from './InputText';
import UserLogin from './UserLogin';
import socketIOClient from 'socket.io-client';

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const socketIO = socketIOClient('http://localhost:3002');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socketIO.on('chat', (chats) => {
      setChats(chats);
    });
  }, [socketIO]);

  const sendToSocket = (chat) => {
    socketIO.emit('chat', chat);
  };

  const addMessage = (chat) => {
    const newChat = { ...chat, user: localStorage.getItem('user'), avatar: localStorage.getItem('avatar') };
    setChats((prevChats) => [...prevChats, newChat]);
    sendToSocket([...chats, newChat]);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('avatar');
    setUser('');
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="chats_header">
            <h4>Username : {user}</h4>
            <div>
              <button onClick={logout} className="chats_header_button">
                Logout
              </button>
            </div>
          </div>
          <ChatList chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;