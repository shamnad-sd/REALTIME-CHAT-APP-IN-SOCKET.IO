import React, { useState } from 'react';
import './UserLogin.css';
import _ from 'lodash';

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState('');

  const handleUser = () => {
    if (!userName) return;
    localStorage.setItem('user', userName);
    setUser(userName);
    localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1, 1000)}/200/300`);
  };

  return (
    <div className='login-section'>
      <div className='login-container'>
        <div className='header'>
          <h1>Chat App</h1>
        </div>
        <div className='login-form'>
          <input
            type="text"
            placeholder='Enter your unique name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleUser}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;