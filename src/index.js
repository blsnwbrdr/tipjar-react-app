import React from 'react';
import ReactDom from 'react-dom/client';
import './styles/index.min.css';
import App from './App';

const container = document.getElementById('app');

// Set React version in app element
const REACT_VERSION = React.version;
container.setAttribute('react-version', REACT_VERSION);

const root = ReactDom.createRoot(container);
root.render(<App />);
