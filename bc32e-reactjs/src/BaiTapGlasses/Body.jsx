import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <div
        className="container-fuild position-absolute"
        style={{
          height: "500px",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <img
          src="./glassesImage/background.jpg"
          alt=""
          style={{ width: "100%", filter: "brightness(0.7)" }}
        />
      </div>
    );
  }
}
