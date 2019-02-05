import React, { Component } from "react";
import Card_suggestion from "./card_suggestion";
import "./suggestcustom.css";
import "./customize.css";
import { loadAPI } from "./util";
export default class SuggestCustom extends Component {
  constructor(props) {
    super(props);

    this.createPlace = this.createPlace.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sendSchedule = this.sendSchedule.bind(this);
    this.openDetail = this.openDetail.bind(this);
  }

  deleteItem(id) {
    console.log(id);
    let arr = this.props.name;
    let a = arr.splice(0, id);
    let b = arr.splice(1, arr.length);
    this.props.getSuggest(a.concat(b));
  }

  sendSchedule(id) {
    console.log(id);
    let arr = this.props.name;
    let a = arr.splice(0, id);
    let b = arr.splice(1, arr.length);
    this.props.getSuggest(a.concat(b));

    this.props.appendTrip(arr[0]["place"]);
  }
  openDetail(id) {
    window.open(
      "http://127.0.0.1:8081/place/" + this.props.name[id]["place_id"]
    );
  }

  createPlace = (arr, deleteItem, sendSchedule, openDetail) => {
    let ret = [];
    arr.forEach(function(name, index) {
      ret.push(
        <div className="customize-component_1_" key={index}>
          <Card_suggestion
            name={name}
            uid={index}
            deleteItem={deleteItem}
            sendSchedule={sendSchedule}
            openDetail={openDetail}
          />
        </div>
      );
    });
    console.log(ret);
    return ret;
  };

  render() {
    return (
      <div className="customize-4-1-0">
        <div className="customize-4-1-0-0-0">
          {this.createPlace(
            this.props.name,
            this.deleteItem,
            this.sendSchedule,
            this.openDetail
          )}
        </div>
      </div>
    );
  }
}
