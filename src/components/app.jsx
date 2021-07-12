/* eslint-disable react/destructuring-assignment */
/* eslint-disable indent */
import React, { Component } from 'react';
import Searchbar from './searchbar';
import GifList from './gif_list';
import Gif from './gif';

const API_KEY = "Xp9Lwh44ujN0siP6Bq6sIBhdMyrhvYaL";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifList: [],
      selectedGifID: "Nx0rz3jtxtEre"
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
            });
        });
    }

    selectGif = (id) => {
        this.setState({
            selectedGifID: id
        });
    }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar searchGif={this.searchGif} />
          <div className="selected-gif">
            <Gif gifID={this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifList={this.state.gifList} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
