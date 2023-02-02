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
        <div className='button'>
          <a
            href='https://itunes.apple.com/us/app/tip-jar-guide-to-gratuity/id1321633520?ls=1&amp;mt=8'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={process.env.PUBLIC_URL + '/img/appStore.svg'}
              alt='apple app store icon'
            />
          </a>
        </div>
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
