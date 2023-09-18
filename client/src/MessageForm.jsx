import React, { useRef } from "react";

const MessageForm = ({socket}) => {
  const messageElement = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    let message = messageElement.current.value;
    if (message.length < 1) {
      alert('Please input a message');
      return;
    }
    socket.emit('message', message);
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