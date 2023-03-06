import React, { Component } from "react";
import io from "socket.io-client";
import "./App.css";
class App extends Component {
  componentDidMount() {
    this.socket = io(); // 1. Handshake with the server
  }
  onForwardPress = (event) => {
    event.stopPropagation();
    this.socket.emit("direction", "forward"); // 2. Start rotation
  };

  onBackwardPress = (event) => {
    event.stopPropagation();
    this.socket.emit("direction", "backward"); // 2. Start rotation
  };
  onRelease = (event) => {
    event.stopPropagation();
    this.socket.emit("direction", "stop"); // 3. Stop rotation
  };
  render() {
    return (
      <div className="App">
        <button
          className="btn btn-up"
          onTouchStart={this.onForwardPress}
          onTouchEnd={this.onRelease}
          onTouchCancel={this.onRelease}
        >
          &#9651;
        </button>
        <button
          className="btn btn-down"
          onTouchStart={this.onBackwardPress}
          onTouchEnd={this.onRelease}
          onTouchCancel={this.onRelease}
        >
          &#9661;
        </button>
      </div>
    );
  }
}
export default App;
