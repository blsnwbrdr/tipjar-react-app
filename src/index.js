import { createRoot } from 'react-dom/client';
import './styles/index.min.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
// registerServiceWorker();
