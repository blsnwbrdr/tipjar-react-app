import { act } from 'react';
import ReactDOM from 'react-dom/client';
import CountryInfo from './CountryInfo';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

it('renders CountryInfo component', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const countryTipData = '';
  const countryCurrencyData = '';

  await act(async () => {
    ReactDOM.createRoot(container).render(
      <CountryInfo
        countryTipData={countryTipData}
        countryCurrencyData={countryCurrencyData}
      />
    );
  });
});
