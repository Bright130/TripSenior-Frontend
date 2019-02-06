// Generated by https://pagedraw.io/pages/15083
import React from "react";
import Header from "../utility/header";
import Tripname from "./tripname";
import Component_1 from "./component_1";
import SuggestCustom from "./suggestcustom";
import "./customize.css";
import TimeTable from "./timetable";
import { Icon, Input, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import VisitedPlace from "./visitedPlace";
import moment from "moment";
import Basket from "./basket";
import { loadAPI } from "./util";

async function searchPlaceID(name) {
  return new Promise(async function(resolve) {
    let ret = await loadAPI(
      " http://127.0.0.1:5000/placename?place_id=" + name
    );
    resolve(ret["place_id"]);
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

  return real.unix() * 1000;
};

const createDBFormat = (props, state, isCreated) => {
  let trip = {
    tripName: state.tripname,

    lastSavedTime: moment().unix() * 1000,
    startTime: props.location.state.startTime * 1000,
    endTime: props.location.state.endTime * 1000,
    styles: props.location.state.styles,
    speed: "Medium",
    destinations: [props.location.state.province],
    numberOfDay:
      (props.location.state.endTime - props.location.state.startTime) / 86400 +
      1,
    detail: {},
    removePlaceID: [10, 11, 12]
  };
  if (isCreated == true) trip["createdTime"] = moment().unix() * 1000;
  for (let i = 1; i <= trip.numberOfDay; i++) {
    trip.detail["" + i] = [];
    
  }

  state.items.forEach(async function(item) {
    let s =
      typeof item["start_time"] == "number"
        ? item["start_time"]
        : item["start_time"].unix() * 1000;
    let e =
      typeof item["end_time"] == "number"
        ? item["end_time"]
        : item["end_time"].unix() * 1000;
    trip.detail["" + item.group].push({
      placeID: await searchPlaceID(item["title"]),
      startTime: convertFakeToRealTime(
        s,
        props.location.state.startTime * 1000,
        item["group"]
      ),
      peroidMinute: (e - s) / 60000
    });
  });
  return trip;
};

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
};

export default class Customize extends React.Component {
  constructor() {
    super();
    this.state = {
      tripname: "MyTrip",
      groups: [],

      items: [
        // {
        //   id: 1,
        //   group: 1,
        //   title: "Songkhla Lake",
        //   start_time: moment()
        //     .startOf("day")
        //     .add(7, "hour"),
        //   end_time: moment()
        //     .startOf("day")
        //     .add(9, "hour")
        // },
        // {
        //   id: 2,
        //   group: 2,
        //   title: "Central Hatyai",
        //   start_time: moment().add(-0.5, "hour"),
        //   end_time: moment().add(0.5, "hour")
        // },
        // {
        //   id: 3,
        //   group: 1,
        //   title: "Kim Yong Market",
        //   start_time: moment()
        //     .startOf("day")
        //     .add(13, "hour"),
        //   end_time: moment()
        //     .startOf("day")
        //     .add(16, "hour")
        // }
      ],
      basket: [
        // {
        //   name: "s",
        //   img: "https://ucarecdn.com/e618b2c9-1d4c-4ad6-9fa7-e8538d1f6f74/",
        //   place_id: "3"
        // }
      ],

      visited: [],
      sugguest: [
        // {
        //   place: "Central Hatyai",
        //   province: "Songkla",
        //   img_src: "https://ucarecdn.com/ec629618-5d41-4d33-86d5-0cb12ee243ed/",
        //   style: "Zoo",
        //   img_main: "https://ucarecdn.com/646c21d3-59ea-4f2e-b8d7-2ef590d80bb6/"
        // },
        // {
        //   place: "Place C",
        //   province: "Songkla",
        //   img_src: "https://ucarecdn.com/ec629618-5d41-4d33-86d5-0cb12ee243ed/",
        //   style: "Zoo",
        //   img_main: "https://ucarecdn.com/646c21d3-59ea-4f2e-b8d7-2ef590d80bb6/"
        // }
      ]
    };
  }

  componentDidMount() {
    console.log(this.props.location);
    console.log(this.state.items);
    this.setState({
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

  appendTrip = name => {
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
        start_time: moment()
          .startOf("day")
          .add(5, "hour"),
        end_time: moment()
          .startOf("day")
          .add(7, "hour")
      })
    });
  };

  appendBasket = trip => {
    console.log(trip);
    this.setState({ basket: this.state.basket.concat(trip) });
  };

  static contextTypes = {
    router: PropTypes.object
  };
  changeRoute = () => {
    console.log(createDBFormat(this.props, this.state, true));
    console.log((this.state.items));
    console.log((this.state.groups));
    // this.context.router.history.push("/summary/1");
  };

  routeOptimize = () => {
    let info = {
      items: this.state.items,
      groups: this.state.groups,
      province: this.props.location.state.province
    };
    console.log(JSON.stringify(info))
    postData("http://localhost:5000/optimize", info).then(plan => {
      this.setState({
        items: plan["items"]
      });
    });
  };

  render() {
    return (
      <div className="customize-customize-7">
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
                      <div className="customize-route_optimize-9"
                       onClick={this.routeOptimize}
                      >
                        Route Optimize
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
                      <div className="customize-complete-3">Complete</div>
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
