 
import React from "react";
import Header from "../utility/header";
import Tripname from "../customize/tripname";
import Selecteddate from "./selecteddate";
import Notselectdate from "./notselectdate";
import Dates from "./date";
import Summary from "./summary";
import Maparea from "./maparea";
import "./summarypage.css";

export default class ResCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null
    };
  }

  render() {
    return (
      <div className="summarypage-2-0-3">
        <div className="summarypage-summary_instance-9">
          <Summary
            time1={" "}
            time2={" "}
            placename={
              this.props.each.name + "  (" + this.props.each.province + ")"
            }
            img_src={this.props.each.imgs}
            openTime={""}
            phone={this.props.each.phone}
            fee={""}
          />
        </div>
      </div>
    );
  }
}
