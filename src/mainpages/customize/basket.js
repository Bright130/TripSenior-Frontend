import React, { Component } from "react";
import CardBasket from "./cardBasket";
import "./customize.css";
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
  }

  deleteItem(id) {
    console.log(id);
    let arr = this.props.name;
    let a = arr.splice(0, id);
    let b = arr.splice(1, arr.length);
    this.props.getBasket(a.concat(b));
  }

  sendSchedule(id) {
    console.log(id);
    let arr = this.props.name;
    let a = arr.splice(0, id);
    let b = arr.splice(1, arr.length);
    this.props.getBasket(a.concat(b));

    this.props.appendTrip(arr[0]);
  }

  createPlace = (arr, deleteItem, sendSchedule) => {
    let ret = [];

    arr.forEach(function(name, index) {
      ret.push(
        <div className="customize-component_1_" key={index}>
          <CardBasket
            name={name}
            uid={index}
            deleteItem={deleteItem}
            sendSchedule={sendSchedule}
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
                this.props.name,
                this.deleteItem,
                this.sendSchedule
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
