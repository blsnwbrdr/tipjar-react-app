import { act } from 'react';
import ReactDOM from 'react-dom/client';
import ListingsFooter from '../screens/ListingsFooter';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders ListingsFooter component', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  await act(async () => {
    ReactDOM.createRoot(container).render(<ListingsFooter />);
  });
});
