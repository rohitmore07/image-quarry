import React from "react";
import unsplash from '../api/unsplash';
import "./App.css";
import SearchBar from "./srchbar";
import ImageList from "./imglist";

class App extends React.Component {
    //initialize state
    state = { images: [] };
  // function that uses axios to request photos from the Unsplash API.
   onSearchSubmit = async (term) => {
    const response = await unsplash
      .get("/search/photos", {
        params: {
          query: term,
          per_page: 15,
        },
        
      });
      this.setState({images: response.data.results});
    }

  // search bar runs onSearchSubmit function when term is submitted.
  // Images from Imagebox are displayed
  render() {
    return (
        <div className="app">
      <div className="ui container app-container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images} />
      </div>
      </div>
    );
  }
}

// export App to be used throughout application
export default App;