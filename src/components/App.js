import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSeacrhSubmit = async key => {
    const respose = await unsplash.get("/search/photos", {
      params: { query: key, per_page: 50 }
    });

    this.setState({ images: respose.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onEnter={this.onSeacrhSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
