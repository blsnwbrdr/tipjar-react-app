import React, { Component } from 'react';

class CountryInfo extends Component {

  render() {
    return (
      <button onClick={ () => this.props.displayCountryList('parameter') }>Choose a Location</button>
    )
  }
}

export default CountryInfo;
