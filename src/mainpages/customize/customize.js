import React from "react";
import Header from "../utility/header";
import Tripname from "./tripname";
import Component_1 from "./component_1";
import SuggestCustom from "./suggestcustom";
import "./customize.css";
import TimeTable from "./timetable";
import { Icon, Modal, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import VisitedPlace from "./visitedPlace";
import moment from "moment";
import Basket from "./basket";
import { loadAPI } from "./util";
import { black } from "ansi-colors";
import { red } from "@material-ui/core/colors";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function searchPlaceID(name) {
  return new Promise(async function(resolve) {
    let ret = await loadAPI(" http://127.0.0.1:5000/place?place_id=" + name);
    resolve(ret["place_id"]);
  });
}

async function postData1(url = ``, data = {}, callback) {
  return new Promise(async function(resolve, reject) {
    data = await JSON.stringify(data);
    console.log(data);
    fetch(url, {
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
      body: data // body data type must match "Content-Type" header
    })
      .then(result => {
        console.log(result);
        if(result["status"] === 200){
          callback.setState({ openSuccess: true})
          result
            .json()
            .then(async json => {
              await console.log(json);
              await callback.getTrip([]);
              resolve(json);
            })
            .catch(error => {
              reject(error);
            });
        }
        else if(result["status"] === 400){
          callback.setState({ msg: result["msg"],optimizing: "Route Optimize",openFailed: true})
        }
      })

      .catch(error => {
        reject(error);
      });
  });
}

function postData(url = ``, data = {}) {
  return new Promise(function(resolve, reject) {
    console.log(data);
    fetch(url, {
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
      body: data // body data type must match "Content-Type" header
    })
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
}

const convertFakeToRealTime = (faketime, startTime, group) => {
  let hour = moment(faketime).hour();
  let min = moment(faketime).minute();
  let year = moment(startTime).year();
  let month = moment(startTime).month();
  let date = moment(startTime).date();
  let real = moment()
    .year(year)
    .month(month)
    .date(date)
    .hour(hour)
    .minute(min)
    .second(0)
    .millisecond(0)
    .add(parseInt(group) - 1, "days");
  console.log(faketime, real.unix() * 1000 + " " + group);
  return real.unix() * 1000;
};

function createDBFormat(props, state, isCreated) {
  return new Promise(async function(resolve, reject) {
    let trip = {
      accesstoken:
        localStorage.getItem("token") != null
          ? localStorage
              .getItem("token")
              .slice(1, localStorage.getItem("token").length - 1)
          : null,
      tripName: state.tripname,

      lastSavedTime: moment().unix() * 1000,
      startTime: props.location.state.startTime,
      endTime: props.location.state.endTime,
      styles: props.location.state.styles,
      speed: "Medium",
      destinations: props.location.state.provinces,
      numberOfDay:
        (props.location.state.endTime - props.location.state.startTime) /
          86400000 +
        1,
      detail: {},
      removePlaceID: state.removePlaceID
    };
    if (isCreated == true) {
      trip["createdTime"] = moment().unix() * 1000;
    } else {
      trip["createdTime"] = props.location.state.createdTime;
      trip.tripId = props.location.state.tripId;
    }
    let oo = state.items;
    for (let i = 1; i <= trip.numberOfDay; i++) {
      trip.detail["" + i] = [];
    }

    await asyncForEach(oo, async item => {
      let s =
        typeof item["start_time"] == "number"
          ? item["start_time"]
          : item["start_time"].unix() * 1000;
      let e =
        typeof item["end_time"] == "number"
          ? item["end_time"]
          : item["end_time"].unix() * 1000;
      trip["detail"]["" + item.group].push({
        placeID: item["place_id"],
        startTime: convertFakeToRealTime(
          s,
          props.location.state.startTime,
          item["group"]
        ),
        peroidMinute: (e - s) / 60000
      });
    });
    for (let i = 1; i <= trip.numberOfDay; i++) {
      var byDate = trip.detail["" + i].slice(0);
      await byDate.sort(function(a, b) {
        return a.startTime - b.startTime;
      });
      trip.detail["" + i] = byDate;
    }

    // use slice() to copy the array and not just make a reference

    let a = await JSON.stringify(trip);
    resolve(a);
  });
}

export default class Customize extends React.Component {
  constructor() {
    super();
    this.state = {
      tripname: "",
      groups: [],

      items: [],
      basket: [],
      visited: [],
      sugguest: [],
      optimizing: "Route Optimize",
      complete: "Complete",
      removePlaceID: [],
      openSuccess: false,
      openFailed: false,
      closeOnEscape: false,
      closeOnDimmerClick: false,
      msg: ""
    };
  }

  showSuccess = () => {
    this.setState({openSuccess: true, optimizing: "Route Optimize" })
  }
  showFailed = () => {
    this.setState({openFailed: true, optimizing: "Route Optimize" })
  }

  close = () => this.setState({ openSuccess: false, openFailed: false })

  componentDidMount() {
    console.log(this.props.location);
    console.log(
      this.props.location.state.tripName !== undefined
        ? this.props.location.state.tripName
        : "MyTrip"
    );
    this.setState({
      tripname:
        this.props.location.state.tripName !== undefined
          ? this.props.location.state.tripName
          : "MyTrip",
      items: this.props.location.state.items,
      groups: this.props.location.state.groups,
      sugguest: this.props.location.state.suggestedPlace,
      visited: this.props.location.state.visitedPlace
    });
  }

  getName = name => {
    this.setState({ tripname: name });
  };
  getTrip = trip => {
    this.setState({ items: trip });
  };

  getBasket = trip => {
    this.setState({ basket: trip });
  };

  getVisited = trip => {
    this.setState({ visited: trip });
  };

  getSuggest = trip => {
    this.setState({ sugguest: trip });
  };

  appendTrip = (name, pid) => {
    let len =
      this.state.items.length > 0
        ? this.state.items[this.state.items.length - 1].id + 1
        : 1;
    console.log(len);
    this.setState({
      items: this.state.items.concat({
        id: len,
        group: 1,
        title: name,
        start_time:
          moment()
            .add(-7, "hour")
            .startOf("day")
            .add(5, "hour")
            .unix() * 1000,
        end_time:
          moment()
            .add(-7, "hour")
            .startOf("day")
            .add(7, "hour")
            .unix() * 1000,
        place_id: pid
      })
    });
  };

  appendBasket = trip => {
    console.log(trip);
    this.setState({ basket: this.state.basket.concat(trip) });
  };

  removePlace = id => {
    let removeID = this.state.removePlaceID;
    removeID.push(id);
    console.log(id);
    this.setState({ removePlaceID: removeID });
  };

  static contextTypes = {
    router: PropTypes.object
  };
  changeRoute = evt => {
    evt.preventDefault();
    //true if create
    this.setState({ complete: "Loading.." }, () => {
      let isCreate = this.props.location.state.tripId == undefined;
      createDBFormat(this.props, this.state, isCreate).then(info => {
        if (isCreate) {
          console.log("create");
          postData("http://localhost:5000/saveplan", info).then(data => {
            this.context.router.history.push("/summary/" + data["id"]);
          });
        } else {
          console.log("update", this.props.location.state);
          postData("http://localhost:5000/updateplan", info).then(data => {
            this.context.router.history.push("/summary/" + data["id"]);
          });
        }
      });
    });

    // this.context.router.history.push("/summary/1");
  };

  routeOptimize = () => {
    this.setState({ optimizing: "Loading.." }, () => {
      let info = {
        items: this.state.items,
        groups: this.state.groups,
        province: this.props.location.state.province
      };
      let info_string = JSON.stringify(info);
      postData1("http://localhost:5000/optimize", info, this).then(plan => {
        this.setState({
          items: plan["items"],
          optimizing: "Route Optimize"
        });
      });
    });
  };

  render() {

    return (
      <div className="customize-customize-7">
        <Modal size="tiny" className="scrolling modal-popup " style={{height: 200}}
          open={this.state.openSuccess}
          closeOnEscape={this.state.closeOnEscape}
          closeOnDimmerClick={this.state.closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Optimization Success <Icon name="check circle" color="green"/> </Modal.Header>
          <Modal.Content style={{height: 100}}>
            <p>Press OK to continue!</p>
          </Modal.Content >
          <Modal.Actions>
          <div className="customize-1-3-0">
              <div className="customize-rectangle_2">
                <div className="customize-1-3-0-0-0">
                  <div className="customize-routebutton-1">
                    <Button className="customize-1-3-0-0-0-0-0">
                      <div
                        className="customize-route_optimize-9"
                        onClick={this.close}
                      >
                      OK
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Actions>
        </Modal>
        <Modal size="tiny" className="scrolling modal-popup" style={{height: 200}}
          open={this.state.openFailed}
          closeOnEscape={this.state.closeOnEscape}
          closeOnDimmerClick={this.state.closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Optimization Failed <Icon name="remove circle" color="red"/></Modal.Header>
          <Modal.Content style={{height: 100}}>
            <p>Not sufficient time to travel to all places.<br/>Please edit places and time spend before click Route Optimization</p>
          </Modal.Content>
          <Modal.Actions >
          <div className="customize-1-3-0">
              <div className="customize-rectangle_x">
                <div className="customize-1-3-0-0-0">
                  <div className="customize-routebutton-1">
                    <Button className="customize-1-3-0-0-0-0-0">
                      <div
                        className="customize-route_optimize-9"
                        onClick={this.close}
                      >
                      Continue
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Actions>
        </Modal>
        <div className="customize-0">
          <div className="customize-0-0" />
          <div className="customize-header_instance_2">
            <Header />
          </div>
          <div className="customize-0-2" />
        </div>
        <div className="customize-1">
          <div className="customize-1-0">
            <div className="customize-1-0-0">
              <img
                src="https://ucarecdn.com/9e342169-5e36-4b8d-9fee-a71376228ca1/"
                className="customize-image_1"
              />
            </div>
          </div>
          <div className="customize-tripname_instance_2">
            <Tripname name={this.state.tripname} getName={this.getName} />
          </div>
          <div className="customize-1-2" />
          <div className="customize-1-3">
            <div className="customize-1-3-0">
              <div className="customize-rectangle_2">
                <div className="customize-1-3-0-0-0">
                  <div className="customize-routebutton-1">
                    <Button className="customize-1-3-0-0-0-0-0">
                      <div
                        className="customize-route_optimize-9"
                        onClick={this.routeOptimize}
                      >
                        {this.state.optimizing}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="customize-1-4" />
          <div className="customize-1-5">
            <div className="customize-1-5-0">
              <div className="customize-rectangle_2-7">
                <div className="customize-1-5-0-0-0">
                  <div className="customize-completebutton-2">
                    <Button
                      className="customize-1-5-0-0-0-0-0"
                      onClick={this.changeRoute}
                    >
                      <div className="customize-complete-3">
                        {this.state.complete}
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customize-2">
          <div className="customize-rectangle_4">
            <TimeTable
              items={this.state.items}
              getTrip={this.getTrip}
              appendBasket={this.appendBasket}
              groups={this.state.groups}
              removePlace={this.removePlace}
            />
          </div>
        </div>
        <div className="customize-3">
          <div className="customize-buddy_basket_-8">Buddy Basket</div>
          <div className="customize-visited_places_-9">Visited Places</div>
        </div>
        <div className="customize-4">
          <div className="customize-4-0">
            <div className="customize-4-0-0">
              <Basket
                place={this.state.basket}
                appendTrip={this.appendTrip}
                getBasket={this.getBasket}
                removePlace={this.removePlace}
              />
            </div>
            <div className="customize-4-0-1">
              <div className="customize-suggested_places_-1">
                Suggested Places
              </div>
            </div>
          </div>
          <VisitedPlace
            place={this.state.visited}
            appendTrip={this.appendTrip}
            getVisited={this.getVisited}
            removePlace={this.removePlace}
          />
        </div>
        <div className="customize-5">
          <div className="customize-rectangle_7">
            <div className="customize-5-0-0">
              <div className="customize-5-0-0-0">
                <SuggestCustom
                  name={this.state.sugguest}
                  appendTrip={this.appendTrip}
                  getSuggest={this.getSuggest}
                  removePlace={this.removePlace}
                />
              </div>
              <div className="customize-5-0-0-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
