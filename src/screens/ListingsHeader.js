import React, { Component } from 'react';

class ListingsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadow: ''
    }
  }

  scrolling = () => {
    if (window.pageYOffset === 0) {
      this.setState({
        shadow: ''
      })
    } else if (window.pageYOffset > 0) {
      this.setState({
        shadow: 'shadow'
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling);
  }
  componentWillUnmount() {
    window.addEventListener('scroll', this.scrolling);
  }

  render() {
    return (
      <div className={`header fadeIn ${this.state.shadow}`}>
        <nav className='nav'></nav>
        <h1>TIP JAR</h1>
        <p>A globetrotting guide to gratuity</p>
      </div>
    )
  }
}

export default ListingsHeader;
