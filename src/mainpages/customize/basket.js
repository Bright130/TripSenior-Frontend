import React, { Component } from "react";
import Component_1 from "./component_1";
import "./customize.css";
export default class Basket extends Component {
  constructor(props) {
    super(props);

    this.createPlace = this.createPlace.bind(this);
  }

  createPlace = arr => {
    let ret = [];

    arr.forEach(function(name, index) {
      ret.push(
        <div className="customize-component_1_" key={index}>
          <Component_1 name={name} />
        </div>
      );
    });
    console.log(ret);
    return ret;
  };

  render() {
    return (
      <div className="customize-4-1" style={{ width: "100%" }}>
        <div className="customize-4-1-0">
          <div className="customize-rectangle_6">
            <div className="customize-4-1-0-0-0">
              {this.createPlace(this.props.name)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
