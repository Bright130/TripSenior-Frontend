import React from "react";
import "./trippage.css";
import Header from "../utility/header"
import TripSlot from "./tripSlot"

export default class Trippage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="summarypage-summarypage-7">
        <div className="detailpage-0">
          <div className="detailpage-0-0" />
          <div className="detailpage-header_instance_3">
            <Header />
          </div>
          <div className="detailpage-0-2" />
        </div>
        <div className="tripname-tripname-8">
          <div className="tripname-0">
            <div className="tripname-tripname-9">My Trips</div>
          </div>
          <div className="slot-list">
            <TripSlot/>
            <TripSlot/>
          </div>
        </div>
      </div>
    );
  }
}
