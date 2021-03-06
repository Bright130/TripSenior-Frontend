 
import React from "react";

import Dates from "./date";

import "./tripname.css";
import "./summarypage.css";
import TripCard from "./tripCard";
import ResCard from "./resCard";

const convertDate1 = timestamp => {
  var a = new Date(timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedesday",
    "Thurday",
    "Friday",
    "Saturday"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
  var hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
  var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
  var day = days[a.getDay()];
  var date = day + " " + date + " " + month + " " + year;
  return day;
};

const convertDate2 = timestamp => {
  var a = new Date(timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedesday",
    "Thurday",
    "Friday",
    "Saturday"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();
  var hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
  var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
  var day = days[a.getDay()];
  var date = date + " " + month + " " + year;
  return date;
};

const getTrip = (trip, indexx) => {
  var i = 0;
  let container = [];
  let cnt = 0;

  trip[indexx].forEach((each, index) => {
    // console.log(each.placeID);

    container.push(<TripCard key={index} each={each} />);
  });
  console.log(indexx);
  return container;
};

const getRes = (res, indexx) => {
  var i = 0;
  let container = [];
  let cnt = 0;

  res[indexx].forEach((each, index) => {
    // console.log(each.placeID);

    container.push(<ResCard key={index + 100} each={each} />);
  });
  console.log(indexx);
  return container;
};

export default class Selectedsummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: [],
      res: [],
      time: null
    };
  }

  componentDidMount() {
    // this.setState({
    //   trip: this.props.trip[],
    //   time: this.props.trip[0].startTime
    // });
    if (this.props.trip !== undefined) {
      this.setState({
        trip: this.props.trip[this.props.selectedDate],
        time: this.props.trip[this.props.selectedDate][0].startTime
      });
      console.log(this.props.trip[this.props.selectedDate]);
    }

    if (this.props.res !== undefined) {
      this.setState({
        res: this.props.res[this.props.selectedDate]
      });
      console.log(this.props.res[this.props.selectedDate]);
    } else {
      console.log("qwqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    }
    console.log(this.props.res);
  }

  render() {
    return (
      <div>
        <div className="summarypage-2-0-2">
          <div className="summarypage-date_instance-7">
            {/* <Dates
              text={convertDate1(this.state.time)}
              text2={convertDate2(this.state.time)}
            /> */}
            {this.props.trip !== undefined ? (
              <Dates
                text={convertDate1(
                  this.props.startTime + 86400 * (this.props.selectedDate - 1)
                )}
                text2={convertDate2(
                  this.props.startTime + 86400 * (this.props.selectedDate - 1)
                )}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        {this.props.trip !== undefined
          ? getTrip(this.props.trip, this.props.selectedDate.toString())
          : ""}
        <div className="tripname-tripname-8x">
          <div className="tripname-0x">
            <div className="tripname-tripname-9x">Recommended Restaurant</div>
          </div>
      </div>
        {this.props.res !== undefined
          ? getRes(this.props.res, this.props.selectedDate.toString())
          : ""}
      </div>
    );
  }
}
