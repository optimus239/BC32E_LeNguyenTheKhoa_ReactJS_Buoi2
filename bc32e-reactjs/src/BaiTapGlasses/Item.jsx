import React, { Component } from "react";
import data from "./dataGlasses.json";

export default class Item extends Component {
  state = {
    isShow: false,
    glassesDefault: {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    glassesChange: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  render() {
    return (
      <div>
        <div
          className="item bg-transparent position-relative"
          style={{ height: "700px", margin: "100px" }}
        >
          <div
            className="model d-flex justify-content-around"
            style={{ height: "200px" }}
          >
            <div
              className="model-left position-relative"
              style={{ width: "200px", height: "250px" }}
            >
              <img
                className="img-fluid"
                src="./glassesImage/model.jpg"
                alt=""
              />
              <img
                className="position-absolute"
                src={this.state.glassesDefault.url}
                alt=""
                style={{
                  opacity: "0.7",
                  top: "62px",
                  left: "48px",
                  width: "104px",
                }}
              />
              <div
                className="description position-absolute"
                style={{
                  backgroundColor: "rgba(243,83,7,0.46",
                  bottom: "0",
                  height: "80px",
                }}
              >
                <span className="text-primary font-weight-bold">
                  {this.state.glassesDefault.name}
                </span>
                <p
                  className="text-light font-weight-bold"
                  style={{ fontSize: "10px" }}
                >
                  {this.state.glassesDefault.desc}
                </p>
              </div>
            </div>
            <div
              className="model-right position-relative"
              style={{ width: "200px", height: "250px" }}
            >
              <img
                className="img-fluid"
                src="./glassesImage/model.jpg"
                alt=""
              />

              {this.state.isShow && (
                <img
                  className="position-absolute"
                  src={this.state.glassesChange.url}
                  alt=""
                  style={{
                    opacity: "0.7",
                    top: "62px",
                    left: "48px",
                    width: "104px",
                  }}
                />
              )}

              {this.state.isShow && (
                <div
                  className="description position-absolute"
                  style={{
                    backgroundColor: "rgba(243,83,7,0.46",
                    bottom: "0",
                    height: "80px",
                  }}
                >
                  <span className="text-primary font-weight-bold">
                    {this.state.glassesChange.name}
                  </span>
                  <p
                    className="text-light font-weight-bold"
                    style={{ fontSize: "10px" }}
                  >
                    {this.state.glassesChange.desc}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className="glasses bg-light px-3"
            style={{ height: "206px", marginTop: "80px" }}
          >
            <div className="row p-3">
              {data.map((value) => {
                return (
                  <div className="col-2" key={value.id}>
                    <button className="mt-4">
                      <img
                        src={value.url}
                        alt=""
                        className="img-fluid"
                        onClick={() => {
                          this.setState({
                            glassesChange: value,
                            isShow: true,
                          });
                        }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
