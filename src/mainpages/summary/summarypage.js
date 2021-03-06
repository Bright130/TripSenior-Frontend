import React from "react";
import Header from "../utility/header";
import Tripname from "./tripname";
import Selecteddate from "./selecteddate";
import Notselectdate from "./notselectdate";
import { Icon, Input, Button } from "semantic-ui-react";
import Summary from "./summary";
import Maparea from "./maparea";
import Selectedsummary from "./selectedsummary";
import "./summarypage.css";
import { loadAPI } from "./util";
import Sticky from "react-stickynode";

import PropTypes from "prop-types";

// fetch('http://localhost:5000/getTrip/', {
//    method: 'GET',
//    headers: new Headers({
//      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDY4Njg5NTgsIm5iZiI6MTU0Njg2ODk1OCwianRpIjoiNTIwYTBiZWItMTIyNi00NzI5LTg1NjAtODIxNmIyMWIwNmY5IiwiZXhwIjoxNTQ2ODY5ODU4LCJpZGVudGl0eSI6ImEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.gqOfMKEwwYJJhnoaOjgHyaL3c959uk8W3AKUMzwJ2uE',
//      'Content-Type': 'application/json'
//    })
//  }).then(response => console.log(response.json()))
function postData(url = ``, data = {}) {
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

function getTrip(id, reactComponent) {
  return new Promise(async function(resolve) {
    let ret = await loadAPI("http://localhost:5000/getTrip?id=" + id);
    console.log(ret["trips"][0]);
    let data = ret["trips"][0];
    await reactComponent.setState(
      {
        trip: data["detail"],
        startTime: data["startTime"] / 1000,
        endTime: data["endTime"] / 1000,
        tripName: data["tripName"],
        numberOfday: data["numberOfDay"],
        destination: data["destinations"],
        zone: data["destinations"].join(", "),
        provinces: data["destinations"],
        des: data["des"],
        coor: data["coor"],
        res: data["res"]
      },
      resolve()
    );
    await console.log(data["detail"]);
    await console.log(data["res"]);
  });
}

function countPlace(trip, numberOfday) {
  let count = 0;
  if (trip !== undefined) {
    for (let i = 1; i <= numberOfday; i++) {
      count += trip[i].length;
    }

    return String(count);
  }
  return "-";
}

const convertMonth = timestamp => {
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
  var a = new Date(timestamp * 1000);

  var month = months[a.getMonth()];

  return month;
};

const convertButtonDate = timestamp => {
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
  var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  var date = a.getDate() < 10 ? "0" + a.getDate() : a.getDate();

  var day = days[a.getDay()];
  var date = day + " " + date;
  return date;
};

const getMoreDate = reactComponent => {
  var i = 0;
  var container = [];
  for (i = 1; i < reactComponent.state.numberOfday + 1; i++) {
    console.log(i);

    if (reactComponent.state.selectedDate == i) {
      container.push(
        <div className="summarypage-selected_instance-4" key={i}>
          <Selecteddate
            text={convertButtonDate(
              reactComponent.state.startTime + 86400 * (i - 1)
            )}
          />
        </div>
      );
    } else {
      container.push(
        <div className="summarypage-2-0-0-0-0-2" key={i}>
          <div className="summarypage-2-0-0-0-0-2-0">
            <div className="summarypage-notselect_instance1">
              <Notselectdate
                text={convertButtonDate(
                  reactComponent.state.startTime + 86400 * (i - 1)
                )}
                day={i}
                setDay={reactComponent.setDay}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  console.log(container[0]);
  return container;
};

export default class Summarypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 1,
      edit: "Edit"

      // trip: {
      //   "1": [
      //     {
      //       placeID: 1,
      //       startTime: 1507680000,
      //       peroidMinute: 90
      //     }
      //   ]
      // },
      // tripName: "",
      // startTime: 1507680000,
      // numberOfday: 3,
      // endTime: 1507892800,
      // destination: ["Songkhla"]
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.goPDF = this.goPDF.bind(this);
    this.goFB = this.goFB.bind(this);
    this.goEmail = this.goEmail.bind(this);
  }

  componentDidMount() {
    getTrip(this.props.match.params.id, this);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
    console.log(this.state);
  }

  setDay = day => {
    this.setState({ selectedDate: day });
  };
  static contextTypes = {
    router: PropTypes.object
  };

  goPDF(evt) {
    window.open(
      "http://localhost:5000/plan-pdf/Trip-" + this.props.match.params.id
    );
  }

  goEmail(evt) {
    window.open(
      "http://localhost:5000/email/Trip-" + this.props.match.params.id
    );
  }

  goFB(evt) {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=127.0.0.1:8081/summary/" +
        this.props.match.params.id
    );
  }
  handleEdit(evt) {
    evt.preventDefault();
    this.setState({ edit: "Loading.." }, () => {
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
      postData("http://localhost:5000/getPlan", info).then(plan => {
        plan["tripId"] = this.props.match.params.id;
        this.context.router.history.push({
          pathname: "/trip-custom",
          state: plan
        });
      });
    });
  }

  render() {
    return (
      <div className="summarypage-summarypage-7">
        <div className="summarypage-0">
          <div className="summarypage-0-0" />
          <div className="summarypage-header_instance-0">
            <Header />
          </div>
          <div className="summarypage-0-2" />
        </div>
        <div className="summarypage-1">
          <div className="summarypage-tripname_instance-2">
            <Tripname name={this.state.tripName} />
          </div>
        </div>
        <div className="summarypage-2">
          <div className="summarypage-2-0">
            <div className="summarypage-2-0-0">
              <div className="summarypage-rectangle-8">
                <div className="summarypage-2-0-0-0-0">
                  <div className="summarypage-2-0-0-0-0-0">
                    <div className="summarypage-2-0-0-0-0-0-0">
                      <div className="summarypage-dec_-9">
                        {convertMonth(this.state.startTime)}
                      </div>
                    </div>
                  </div>

                  {getMoreDate(this)}
                </div>
              </div>
            </div>
            <div className="summarypage-2-0-1">
              <div className="summarypage-edit-9">
                <div className="summarypage-2-0-1-0-0">
                  <div className="summarypage-rectangle_3">
                    <div className="summarypage-2-0-1-0-0-0-0">
                      <Button>
                        <div
                          className="summarypage-edit_-2"
                          onClick={this.handleEdit}
                        >
                          {this.state.edit}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Selectedsummary
              trip={this.state.trip}
              selectedDate={this.state.selectedDate}
              startTime={this.state.startTime}
              res={this.state.res}
            />
          </div>
          <Sticky top={70}>
            <div className="summarypage-2-1" />
            <div className="summarypage-2-2">
              <div className="summarypage-2-2-0">
                <div className="summarypage-rightside-4">
                  <div className="summarypage-2-2-0-0-0">
                    <div className="summarypage-4">
                      {"Day " + this.state.selectedDate + " , "}
                      {this.state.trip !== undefined
                        ? this.state.trip[this.state.selectedDate].length
                        : ""}
                      {" Places In "}
                      {this.state.des !== undefined
                        ? this.state.des[this.state.selectedDate]
                        : ""}
                    </div>
                  </div>
                  <div className="summarypage-2-2-0-0-1">
                    <div className="summarypage-map_instance-7">
                      <Maparea
                        zone={this.state.zone}
                        places={
                          countPlace(this.state.trip, this.state.numberOfday) +
                          " Places"
                        }
                        fee={"-"}
                        coor={this.state.coor}
                        selectedDate={this.state.selectedDate}
                        trip={this.state.trip}
                      />
                    </div>
                    <div className="summarypage-2-2-0-0-1-1" />
                  </div>
                  <div className="summarypage-2-2-0-0-2">
                    <div className="summarypage-buttons-3">
                      <div className="summarypage-2-2-0-0-2-0-0">
                        <div className="summarypage-sharebutton-9">
                          <div className="summarypage-2-2-0-0-2-0-0-0-0">
                            <div className="summarypage-rectangle_2">
                              <div className="summarypage-2-2-0-0-2-0-0-0-0-0-0">
                                <Button>
                                  <div
                                    className="summarypage-share_-0"
                                    onClick={this.goFB}
                                  >
                                    Share
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="summarypage-export-7">
                          <div className="summarypage-2-2-0-0-2-0-0-1-0">
                            <div className="summarypage-rectangle_9">
                              <div className="summarypage-2-2-0-0-2-0-0-1-0-0-0">
                                <div
                                  className="summarypage-export_pdf_-8"
                                  onClick={this.goPDF}
                                >
                                  Export PDF
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="summarypage-sendmail-9">
                          <div className="summarypage-2-2-0-0-2-0-0-2-0">
                            <div className="summarypage-rectangle_8">
                              <div className="summarypage-2-2-0-0-2-0-0-2-0-0-0">
                                <div
                                  className="summarypage-send_to_email_-7"
                                  onClick={this.goEmail}
                                >
                                  Send to Email
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Sticky>
        </div>
      </div>
    );
  }
}
