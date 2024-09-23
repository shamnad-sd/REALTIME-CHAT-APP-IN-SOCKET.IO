import React, { useState } from 'react';
import './Input.css';
import Sendicon from './Sendicon.png';

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState(''); // Initialize state with an empty string

  const sendMessage = () => {
    if (message.trim() !== '') { // Check if the message is not empty
      addMessage({ message });
      setMessage("");
    }
  };

  return (
    <div>
      <div className='inputtext_container'>
        <textarea
          name="message"
          id="message"
          rows='6'
          placeholder='Enter.....'
          value={message} // Add value prop to textarea
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <img onClick={sendMessage} src={Sendicon} alt="" /> {/* Pass sendMessage function to onClick */}
      </div>
    </div>
  );
};

export default InputText;