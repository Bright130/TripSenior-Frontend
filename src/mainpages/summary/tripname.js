 
import React from "react";
import "./tripname.css";

export default class Tripname extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tripname-tripname-8">
        <div className="tripname-0">
          <div className="tripname-tripname-9">{this.props.name}</div>
        </div>
      </div>
    );
  }
}
