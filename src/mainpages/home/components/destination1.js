import React, { Component } from "react";
import { loadAPI } from "./util";
import { Dropdown } from "semantic-ui-react";
import "./nationality.css";

const provinceOptions = () => {
  let ret = [];

  ["Bangkok", "Chachoengsao", "Chonburi", "Rayong"].forEach(function(ele) {
    ret.push({
      text: ele,
      value: ele
    });
  });

  // console.log(ret);
  return ret;
};

class DestinationDrop1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
    this.trigDestination = this.trigDestination.bind(this);
  }

  /**
   * Trig when choose new collection
   * @param {*} event
   */
  trigDestination(event, data) {
    this.props.getDestination(data.value);
    this.setState({ selected: data.value });
  }

  render() {
    return (
      <Dropdown
        placeholder={this.props.placeholder}
        search
        selection
        fluid
        options={provinceOptions()}
        className="borderless"
        onChange={this.trigDestination}
        text={this.state.selected}
      />
    );
  }
}
export default DestinationDrop1;
