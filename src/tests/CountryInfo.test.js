import { act } from 'react';
import ReactDOM from 'react-dom/client';
import CountryInfo from '../screens/CountryInfo';

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

it('renders data', async () => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const countryTipData = {
    country: 'country',
    dining: 'dining',
    transportation: 'transportation',
    accommodation: 'accommodation',
    currency: 'currency',
    thankyou: 'thankyou',
    goodbye: 'goodbye',
  };
  const countryCurrencyData = '2.5';

  await act(async () => {
    ReactDOM.createRoot(container).render(
      <CountryInfo
        countryTipData={countryTipData}
        countryCurrencyData={countryCurrencyData}
      />
    );
  });
  const h2 = container.querySelector('h2');
  const p = container.querySelectorAll('p');
  expect(h2.textContent).toBe('country');
  expect(p[0].textContent).toBe('dining');
  expect(p[1].textContent).toBe('transportation');
  expect(p[2].textContent).toBe('accommodation');
  expect(p[3].textContent).toContain('2.5 currency');
  expect(p[4].textContent).toBe('thankyou');
  expect(p[5].textContent).toBe('goodbye');
});
