import React, { Component } from "react";
import data from "./dataGlasses.json";

export default class Item extends Component {
  state = {
    isShow: false,
    glassesDefault: {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
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
              className="model-left"
              style={{ width: "200px", height: "250px" }}
            >
              <img
                className="img-fluid"
                src="./glassesImage/model.jpg"
                alt=""
              />
              <div
                className="description position-relative"
                style={{
                  backgroundColor: "rgba(243,83,7,0.46",
                  marginTop: "-80px",
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
              className="model-right"
              style={{ width: "200px", height: "250px" }}
            >
              <img
                className="img-fluid"
                src="./glassesImage/model.jpg"
                alt=""
              />
              {this.state.isShow && (
                <div
                  className="description position-relative"
                  style={{
                    backgroundColor: "rgba(243,83,7,0.46",
                    marginTop: "-80px",
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
            className="glasses bg-light"
            style={{ height: "200px", marginTop: "80px" }}
          >
            <div className="row p-3">
              {data.map((value) => {
                return (
                  <div className="col-2" key={value.id}>
                    <img
                      src={value.url}
                      alt=""
                      className="img-fluid mt-4"
                      onClick={() => {
                        this.setState({
                          glassesChange: value,
                          isShow: true,
                        });
                      }}
                    />
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
