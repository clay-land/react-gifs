import React, { Component } from 'react';
import Searchbar from './searchbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <Searchbar handleChange={this.handleChange} />
    );
  }
}

export default App;
