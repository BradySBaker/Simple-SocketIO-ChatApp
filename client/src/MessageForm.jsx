import React, { useRef } from "react";
import { io } from 'socket.io-client';


const socket = io('http://localhost:3000');

const MessageForm = () => {
  const messageElement = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    let message = messageElement.current.value;
    if (message.length < 1) {
      alert('Please input a message');
      return;
    }
    console.log();
  }

  return (
    <form>
      <label htmlFor="message">Message: </label>
      <input ref={messageElement} placeholder="Message Here..." type="text" name="message" id="message"/>
      <button onClick={handleSend}>Send</button>
    </form>
  )
};

export default MessageForm;