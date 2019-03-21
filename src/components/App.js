import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSeacrhSubmit = key => {
    console.log(key);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onEnter={this.onSeacrhSubmit} />
      </div>
    );
  }
}

export default App;
