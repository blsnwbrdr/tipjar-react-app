import { act } from 'react';
import ReactDOM from 'react-dom/client';
import ListingsHeader from './ListingsHeader';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders ListingsHeader component', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  await act(async () => {
    ReactDOM.createRoot(container).render(<ListingsHeader />);
  });
});
