import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.min.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const REACT_VERSION = React.version;

const container = document.getElementById('app');
container.setAttribute('react-version', REACT_VERSION);
const root = createRoot(container);
root.render(<App />);
// registerServiceWorker();
