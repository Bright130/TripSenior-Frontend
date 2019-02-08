// Generated by https://pagedraw.io/pages/15083
import React from "react";
import Header from "../utility/header";
import Tripname from "../customize/tripname";
import Selecteddate from "./selecteddate";
import Notselectdate from "./notselectdate";
import Dates from "./date";
import Summary from "./summary";
import Maparea from "./maparea";
import "./summarypage.css";
import TripCard from "./tripCard";

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

const loadAPI = uri => {
  return new Promise(function(resolve, reject) {
    fetch(uri)
      .then(result => {
        result
          .json()
          .then(json => {
            resolve(json);
          })
          .catch(error => {
            reject(error);
          });
      })

      .catch(error => {
        reject(error);
      });
  });
};

const getPlace = id => {
  return new Promise(function(resolve) {
    loadAPI(" http://127.0.0.1:5000/place?place_id=" + id).then(data => {
      resolve(data);
    });
  });
};

const getCard = each => {
  return new Promise(function(resolve) {
    console.log(each);
    getPlace(each.placeID).then(place => {
      resolve();
    });
  });
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

export default class Selectedsummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: [],
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
                  this.props.trip[this.props.selectedDate.toString()][0]
                    .startTime / 1000
                )}
                text2={convertDate2(
                  this.props.trip[this.props.selectedDate.toString()][0]
                    .startTime / 1000
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
      </div>
    );
  }
}
