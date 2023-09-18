import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';

import MessageForm from './MessageForm.jsx';

import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const App = () => {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  console.log(messages);
    useEffect(() => {
      socket.on('connect', () => {
        setConnected(true);
    });
    socket.on('recieve-all-messages', (messages) => {
      setMessages(messages);
    });

    socket.on('recieve-message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    }, []);

  return (
    <div id="main-container">
      <h3>{connected ? 'connected' : 'disconnected'}</h3>
      <h1>Chitter Chatter</h1>
      <MessageForm socket={socket}/>
      {messages.map((message) =>
        <h3>{message}</h3>
      )}
    </div>
  )
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
