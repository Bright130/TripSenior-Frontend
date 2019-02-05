import React, { Component } from "react";
import CardBasket from "./cardBasket";
import "./customize.css";
import "./card_basket.css";
import { loadAPI } from "./util";
// const deleteItem = id => {
//   console.log(id);
//   // let arr = this.props.items;
//   // let a = arr.splice(0, this.state.rightClickId);
//   // let b = arr.splice(1, arr.length);
//   // this.props.getTrip(a.concat(b));
// };

// const sendSchedule = id => {
//   console.log(id);
//   // let arr = this.props.items;
//   // let a = arr.splice(0, this.state.rightClickId);
//   // let b = arr.splice(1, arr.length);
//   // this.props.getTrip(a.concat(b));

//   // this.props.appendBasket([arr[0].title]);
// };

export default class Basket extends Component {
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
    this.props.getBasket(a.concat(b));
  }

  sendSchedule(id) {
    console.log(id);
    let arr = this.props.place;
    let a = arr.splice(0, id);
    let b = arr.splice(1, arr.length);
    this.props.getBasket(a.concat(b));

    this.props.appendTrip(arr[0]["name"]);
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
          <CardBasket
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
      <div className="customize-4-1" style={{ width: "100%" }}>
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
