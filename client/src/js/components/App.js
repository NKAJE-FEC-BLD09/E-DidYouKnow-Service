import React, { Component } from "react";
import ReactDOM from "react-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Did You Know?</h1>
        <p>Content goes here</p>
        <h4>Trivia</h4>
        <p>Content goes here</p>
        <h4>Goofs</h4>
        <p>Content goes here</p>
        <h4>Quotes</h4>
        <p>Content goes here</p>
        <h4>Alternate Versions</h4>
        <p>Content goes here</p>
        <h4>Connections</h4>
        <p>Content goes here</p>
        <h4>Soundtracks</h4>
        <p>Content goes here</p>
      </div>
    );
  }
  
}


ReactDOM.render(
    <App />,
  document.getElementById('app')
);

