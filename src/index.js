import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChatBoxContextProvider } from './context/ChatBoxContext';
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from './serviceWorker';

function Root() {
  return (
    <ChatBoxContextProvider>
      <App />
    </ChatBoxContextProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register(); 