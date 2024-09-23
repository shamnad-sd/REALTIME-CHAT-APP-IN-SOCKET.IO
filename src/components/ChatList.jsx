import React from 'react';
import './ChatList.css';

const ChatList = ({ chats }) => {
  const user = localStorage.getItem('user');

  const SenderChat = ({ message, username, avatar }) => (
    <div className="chat-sender">
      <img src={avatar} alt="" />
      <p>
        <strong>{username}</strong><br />
        {message}
      </p>
    </div>
  );

  const ReceiverChat = ({ message, username, avatar }) => (
    <div className="chat-receiver">
      <img src={avatar} alt="" />
      <p>
        <strong>{username}</strong><br />
        {message}
      </p>
    </div>
  );

  return (
    <div className="chats_list">
      {chats.map((chat, index) => (
        chat.user === user ? (
          <SenderChat
            key={index}
            message={chat.message}
            username={chat.user}
            avatar={chat.avatar}
          />
        ) : (
          <ReceiverChat
            key={index}
            message={chat.message}
            username={chat.user}
            avatar={chat.avatar}
          />
        )
      ))}
    </div>
  );
};

export default ChatList;