import React, { Component } from 'react';
import Searchbar from './searchbar';
import GifList from './gif_list';

const API_KEY = "Xp9Lwh44ujN0siP6Bq6sIBhdMyrhvYaL";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifList: []
    };
  }

  searchGif = (query) => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en`;
    fetch(endpoint)
    .then(response => response.json())
    .then((info) => {
        const gifs = info.data.map(gifObj => gifObj.id);
        this.setState({
            gifList: gifs
        })
    });
  }

  render() {
    return (
      <div className="app">
        <Searchbar searchGif={this.searchGif} />
        <GifList gifList={this.state.gifList} />

      </div>
    );
  }
}

export default App;
