import { act } from 'react';
import ReactDOM from 'react-dom/client';
import ListingsBody from './ListingsBody';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders ListingsBody component', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  await act(async () => {
    ReactDOM.createRoot(container).render(<ListingsBody />);
  });
});
