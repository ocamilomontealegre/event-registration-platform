// Importing necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM.createRoot for rendering
import { BrowserRouter as Router } from 'react-router-dom'; // Importing BrowserRouter for routing
import { App } from './App.jsx'; // Importing the root component of the application
import './index.css'; // Importing CSS file for styling

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the entire application with Router for enabling routing
  <Router>
    {/* Wrapping the application with React.StrictMode for additional development mode checks */}
    <React.StrictMode>
      {/* Rendering the root component of the application */}
      <App />
    </React.StrictMode>
  </Router>
);