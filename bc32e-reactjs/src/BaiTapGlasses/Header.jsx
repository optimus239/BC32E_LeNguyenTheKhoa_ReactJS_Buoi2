import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div
          className="container-fluid text-light position-relative"
          style={{
            height: "85px",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: "2",
          }}
        >
          <h3
            className="position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <strong>TRY GLASSES APP ONLINE</strong>
          </h3>
        </div>
      </div>
    );
  }
}
