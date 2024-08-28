import React, { Component } from 'react';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTipData: [],
    };
  }

  componentDidMount() {
    fetch('https://brandonscode.herokuapp.com/tipjar/tip-data')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          countryTipData: result,
        });
      });
  }

  render() {
    return (
      <div className='body fadeIn'>
        <div className='list'>
          <ul>
            {this.state.countryTipData.map((data, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={() => this.props.displayCountryInfo(data.country)}
                  >
                    {data.country}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CountryList;
