import { act } from 'react';
import ReactDOM from 'react-dom/client';
import Splash from './Splash';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders Splash component', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  await act(async () => {
    ReactDOM.createRoot(container).render(<Splash />);
  });
});
