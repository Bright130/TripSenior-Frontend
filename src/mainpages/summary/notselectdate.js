 
import React from "react";
import "./notselectdate.css";
import { Button, Modal } from "semantic-ui-react";

export default class Notselectdate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, data) {
    console.log(e);
    console.log(data["day"]);
    this.props.setDay(data["day"]);
  }

  render() {
    return (
      <Button
        className="notselectdate-notselectdate-0"
        onClick={this.handleClick}
        day={this.props.day}
      >
        <div className="notselectdate-0">
          <div className="notselectdate-sat2">{this.props.text}</div>
        </div>
      </Button>
    );
  }
}
