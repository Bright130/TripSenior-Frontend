import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { loadAPI } from "./util";
import "./nationality.css";

const nationOptions = () => {
  let ret = [];
  loadAPI(" http://127.0.0.1:5000/static/nationalities").then(result => {
    result.forEach(function(ele) {
      ret.push({
        text: ele,
        value: ele
      });
    });
  });
  // console.log(ret);
  return ret;
};

class NationDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
    this.trigNationality = this.trigNationality.bind(this);
  }

  /**
   * Trig when choose new collection
   * @param {*} event
   */
  trigNationality(event, data) {
    this.props.getNationality(data.value);
    this.setState({ selected: data.value });
  }

  render() {
    return (
      <Dropdown
        placeholder="Nationality"
        search
        selection
        fluid
        options={nationOptions()}
        className="borderless"
        onChange={this.trigNationality}
        text={this.state.selected}
      />
    );
  }
}

export default NationDrop;
