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

const createDBFormat = (props, state, isCreated) => {
  let trip = {
    tripID: 1,
    tripName: state.tripname,

    lastSavedTime: moment().unix() * 1000,
    startTime: 1507680000,
    endTime: 1507892800,
    styles: ["Sea", "Shopping"],
    speed: "Medium",
    destinations: ["Songkhla"],
    numberOfDay: 4,
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
        ? item["start_time"] * 1000
        : item["start_time"].unix() * 1000;
    let e =
      typeof item["end_time"] == "number"
        ? item["end_time"] * 1000
        : item["end_time"].unix() * 1000;
    trip.detail["" + item.group].push({
      placeID: await searchPlaceID(item["title"]),
      startTime: s,
      peroidMinute: (e - s) / 60000
    });
  });
  return trip;
};

export default class Customize extends React.Component {
  constructor() {
    super();
    this.state = {
      tripname: "MyTrip",
      items: [
        {
          id: 1,
          group: 1,
          title: "Songkhla Lake",
          start_time: moment()
            .startOf("day")
            .add(7, "hour"),
          end_time: moment()
            .startOf("day")
            .add(9, "hour")
        },
        {
          id: 2,
          group: 2,
          title: "Central Hatyai",
          start_time: moment().add(-0.5, "hour"),
          end_time: moment().add(0.5, "hour")
        },
        {
          id: 3,
          group: 1,
          title: "Kim Yong Market",
          start_time: moment()
            .startOf("day")
            .add(13, "hour"),
          end_time: moment()
            .startOf("day")
            .add(16, "hour")
        }
      ],
      basket: ["a", "b", "c"],
      visited: ["Central Hatyai", "ab", "ac"],
      sugguest: [
        {
          place: "Central Hatyai",
          province: "Songkla",
          img_src: "https://ucarecdn.com/ec629618-5d41-4d33-86d5-0cb12ee243ed/",
          style: "Zoo",
          img_main: "https://ucarecdn.com/646c21d3-59ea-4f2e-b8d7-2ef590d80bb6/"
        },
        {
          place: "Place C",
          province: "Songkla",
          img_src: "https://ucarecdn.com/ec629618-5d41-4d33-86d5-0cb12ee243ed/",
          style: "Zoo",
          img_main: "https://ucarecdn.com/646c21d3-59ea-4f2e-b8d7-2ef590d80bb6/"
        }
      ]
    };
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
    console.log(this.state);
    // this.context.router.history.push("/summary/1");
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
                      <div className="customize-route_optimize-9">
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
                name={this.state.basket}
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
            name={this.state.visited}
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
