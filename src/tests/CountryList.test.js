import { act } from 'react';
import ReactDOM from 'react-dom/client';
import CountryList from '../screens/CountryList';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders CountryList component', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  await act(async () => {
    ReactDOM.createRoot(container).render(<CountryList />);
  });
});
