import React from 'react';
import ReactDOM from 'react-dom/client';
import FeedbackContextProvider from 'components/context/FeedbackContext/FeedbackContext';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeedbackContextProvider>
      <App />
    </FeedbackContextProvider>
  </React.StrictMode>
);
