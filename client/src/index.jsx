import React from 'react';
import { createRoot } from 'react-dom/client';

import MessageForm from './MessageForm.jsx';

const App = () => {
  return (
    <div id="main-container">
      <h1>Chitter Chatter</h1>
      <MessageForm />
    </div>
  )
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>);
