import React from "react";
import "./trippage.css";
import Header from "../utility/header"
import TripSlot from "./tripSlot"
import PropTypes from "prop-types";

function getData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json()); // parses response to JSON
}

const convertTime = timestamp => {
  console.log(new Date(timestamp));
  var a = new Date(timestamp);

  var hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
  var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();

  var date = hour + ":" + min;
  return date;
};

const makeTripRow = reactComponent => {
  var container = [];
  reactComponent.state.trips.forEach(function(trip, index) {
    container.push(
      <TripSlot image={reactComponent.state.images[index]} viewSummary={reactComponent.viewSummary} tripID={trip["tripID"]} name={trip["tripName"]} created={convertTime(trip["createdTime"])} numberofday={trip["numberOfDay"]} numberofprovince={trip["destinations"].length} />
    );
  });
  console.log(container);
  return container;
};

export default class Trippage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      trips : [],
      images : []
    }
    this.viewSummary = this.viewSummary.bind(this);
  }

  componentDidMount() {
    let info = {
      accesstoken:
        localStorage.getItem("token") != null
          ? localStorage
              .getItem("token")
              .slice(1, localStorage.getItem("token").length - 1)
          : null,
      id: this.props.match.params.id
    };
    console.log(info);
    getData("http://localhost:5000/getMyTrip", info).then(plan => {
      this.setState({
        trips : plan["myTrips"],
        images : plan["images"]
      })  
      console.log( plan["myTrips"]);              
    });
    
  }

  static contextTypes = {
    router: PropTypes.object
  };
  viewSummary = tripID => {
    console.log(tripID );
    this.context.router.history.push("/summary/" + tripID );
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
            {makeTripRow(this)}
          </div>
        </div>
      </div>
    );
  }
}
