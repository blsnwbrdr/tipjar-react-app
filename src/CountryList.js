import React, { Component } from 'react';

// JSON DATA
import countryTipData from './data/countryTipData';

// SORT COUNTRY LIST
function compare(a,b) {
  if (a.country < b.country)
    return -1;
  if (a.country > b.country)
    return 1;
  return 0;
}
countryTipData.sort(compare);

class CountryList extends Component {

  render() {
    return (
      <div className="body">
        <div className="button">
          <a href='https://itunes.apple.com/us/app/tip-jar-guide-to-gratuity/id1321633520?ls=1&amp;mt=8' target='_blank' rel="noopener noreferrer"><img src='img/appStore.svg' alt='apple app store icon' /></a>
        </div>
        <div className="list">
          <ul>
            {countryTipData.map((data, key) => {
              return (
                <li key={key}>
                  <button onClick={ () => this.props.displayCountryInfo(data.country) }>{data.country}</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default CountryList;
