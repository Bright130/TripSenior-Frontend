import React, { Component } from "react";
import Component_1 from "./component_1";
import "./customize.css";
import { loadAPI } from "./util";
export default class VisitedPlace extends Component {
  constructor(props) {
    super(props);

    this.createPlace = this.createPlace.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sendSchedule = this.sendSchedule.bind(this);
    this.openDetail = this.openDetail.bind(this);
  }

  deleteItem(id) {
    console.log(id);
    let arr = this.props.place;
    let a = arr.splice(0, id);
    let b = arr.splice(1, arr.length);
    this.props.getVisited(a.concat(b));
  }

  sendSchedule(id) {
    console.log(id);
    let arr = this.props.place;
    let a = arr.splice(0, id);
    let b = arr.splice(1, arr.length);
    this.props.getVisited(a.concat(b));

    this.props.appendTrip(arr[0]["name"], arr[0]["place_id"]);
  }
  openDetail(id) {
    window.open(
      "http://127.0.0.1:8081/place/" + this.props.place[id]["place_id"]
    );
  }

  createPlace = (arr, deleteItem, sendSchedule, openDetail) => {
    let ret = [];
    arr.forEach(function(place, index) {
      ret.push(
        <div className="customize-component_1_" key={index}>
          <Component_1
            place={place}
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
      <div className="customize-4-1">
        <div className="customize-4-1-0">
          <div className="customize-rectangle_6">
            <div className="customize-4-1-0-0-0">
              {this.createPlace(
                this.props.place,
                this.deleteItem,
                this.sendSchedule,
                this.openDetail
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
