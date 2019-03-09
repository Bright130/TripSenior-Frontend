import React from "react";
import "./startpanel.css";
import DestinationDrop from "./components/destination";
import NationDrop from "./components/nationality";
import StylePop from "./components/styleselect";
import DatePop from "./components/datepick";
import PropTypes from "prop-types";
import * as moment from "moment";
// const loadAPI = uri => {
//   return new Promise(function(resolve, reject) {
//     fetch(uri)
//       .then(result => {
//         result
//           .json()
//           .then(json => {
//             resolve(json);
//           })
//           .catch(error => {
//             reject(error);
//           });
//       })

//       .catch(error => {
//         reject(error);
//       });
//   });
// };

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

function convertstyle(styles) {
  let ret = [];
  if (styles["Historic"]) ret.push("Historic");
  if (styles["Sight"]) ret.push("Sight");
  if (styles["Healthy"]) ret.push("Healthy");
  if (styles["Sea"]) ret.push("Sea");
  if (styles["Entertainment"]) ret.push("Entertainment");
  if (styles["Shopping"]) ret.push("Shopping");
  if (styles["Event"]) ret.push("Event");
  if (styles["Mountain"]) ret.push("Mountain");
  if (styles["Military"]) ret.push("Military");
  if (styles["Park"]) ret.push("Park");
  if (styles["Transportation"]) ret.push("Transportation");
  if (styles["Farm"]) ret.push("Farm");
  if (styles["Zoo"]) ret.push("Zoo");
  if (styles["Educational"]) ret.push("Educational sites");
  if (styles["Wildlife"]) ret.push("Wildlife Areas");
  if (styles["Waterfalls"]) ret.push("Waterfalls");
  if (styles["Other"]) ret.push("Other");
  // console.log(ret);
  return ret;
}

function converttime(time) {
  let ret = [];
  ret.push(moment(time * 1000).format("MMM"));
  // console.log(ret);
  return ret;
}
export default class Startpanel2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: "",
      styles: {
        speed: "",
        Historic: false,
        Sight: false,
        Healthy: false,
        Sea: false,
        Religion: false,
        Entertainment: false,
        Shopping: false,
        Event: false,
        Mountain: false,
        Military: false,
        Park: false,
        Transportation: false,
        Farm: false,
        Zoo: false,
        Educational: false,
        Wildlife: false,
        Waterfalls: false,
        Other: false,
        "New Experience": false
      },
      starttime: 0,
      endtime: 0,
      nationality: "",
      startplan: "Start Plan",
      startLocation: "",
      endLocation: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Callback
   * @param {string}
   */
  getStartLocation = startLocation => {
    this.setState({ startLocation: startLocation }, console.log(startLocation));
  };

  getEndLocation = endLocation => {
    this.setState({ endLocation: endLocation }, console.log(endLocation));
  };

  getNationality = nationality => {
    this.setState({ nationality: nationality }, console.log(nationality));
  };

  getStartTime = time => {
    this.setState({ starttime: time }, console.log(time));
  };

  getEndTime = time => {
    this.setState({ endtime: time }, console.log(time));
  };

  getStyle = style => {
    this.setState({ styles: style }, console.log(this.state.styles));
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  static contextTypes = {
    router: PropTypes.object
  };

  // componentDidMount() {
  //   loadAPI(" http://127.0.0.1:5000/component/startpanel").then(result => {
  //     this.setState({
  //       destinations: result["provinces"],
  //       styles: result["styles"]
  //     });
  //   });
  // }

  changeRoute = () => {};

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.styles["New Experience"]);
    this.setState({ startplan: "Loading.." }, () => {
      let info = {
        accesstoken:
          localStorage.getItem("token") != null
            ? localStorage
                .getItem("token")
                .slice(1, localStorage.getItem("token").length - 1)
            : null,
        style: convertstyle(this.state.styles),
        seasons: converttime(this.state.starttime),
        nationality:
          this.state.nationality == "" ? "Thailand" : this.state.nationality,
        startprovince:
          this.state.startLocation == "" ? "Bangkok" : this.state.startLocation,
        endprovince:
          this.state.endLocation == "" ? "Rayong" : this.state.endLocation,
        startTime: this.state.starttime,
        endTime: this.state.endtime,
        isNewEXP: this.state.styles["New Experience"] ? 1 : 0
      };
      console.log(JSON.stringify(info));
      postData("http://localhost:5000/planRoad", info).then(plan => {
        plan["styles"] = convertstyle(this.state.styles);
        plan["startTime"] = this.state.starttime * 1000;
        plan["endTime"] = this.state.endtime * 1000;
        (plan["nationality"] =
          this.state.nationality == "" ? "Thailand" : this.state.nationality),
          (plan["startprovince"] =
            this.state.startLocation == ""
              ? "Bangkok"
              : this.state.startLocation),
              (plan["endprovince"] =
              this.state.endLocation == ""
                ? "Rayong"
                : this.state.endLocation);
        this.context.router.history.push({
          pathname: "/trip-custom",
          state: plan
        });
      });
    });
  }

  render() {
    return (
      <div className="startpanel-startpanel-6">
        <div className="startpanel-0">
          <div className="startpanel-0-0" />
          <div className="startpanel-startpannel-3">
            <div className="startpanel-0-1-0">
              <div className="startpanel-0-1-0-0" />
              <div className="startpanel-0-1-0-1">
                <div className="startpanel-0-1-0-1-0" />
                <div className="startpanel-0-1-0-1-1">
                  <div className="startpanel-destinationbutton-5">
                    <div className="startpanel-0-1-0-1-1-0-0">
                      <img
                        src="https://ucarecdn.com/dcc965e3-b3be-4456-902b-e48a1b41f7f8/"
                        className="startpanel-location-0"
                      />
                      <div className="startpanel-0-1-0-1-1-0-0-1">
                        <div className="startpanel-destination_-8">
                          <DestinationDrop
                            getDestination={this.getStartLocation}
                            placeholder= 'Start Location'
                          />
                        </div>
                      </div>
                      <div className="startpanel-0-1-0-1-1-0-0-1">
                        <div className="startpanel-destination_-8">
                          <DestinationDrop
                            getDestination={this.getEndLocation}
                            placeholder= 'End Location'
                          />
                        </div>
                      </div>
                      <div className="startpanel-0-1-0-1-1-0-0-2">
                        <div className="startpanel-0-1-0-1-1-0-0-2-0">
                          {/* <img src="https://ucarecdn.com/9201e6b7-db8e-40a6-ad57-aff951b52626/" className="startpanel-drop-1" />  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="startpanel-0-1-0-1-2" />
              </div>
              <div className="startpanel-0-1-0-2" />
              <div className="startpanel-0-1-0-3">
                <div className="startpanel-0-1-0-3-0" />
                <div className="startpanel-0-1-0-3-1">
                  <div className="startpanel-line1" />
                </div>
                <div className="startpanel-0-1-0-3-2" />
              </div>
              <div className="startpanel-0-1-0-4" />
              <div className="startpanel-0-1-0-5">
                <div className="startpanel-0-1-0-5-0" />
                <div className="startpanel-0-1-0-5-1">
                  <div className="startpanel-startend-1">
                    <div className="startpanel-0-1-0-5-1-0-0">
                      <img
                        src="https://ucarecdn.com/74ce9628-8729-4324-bc57-0eada5e9f21b/"
                        className="startpanel-calender-3"
                      />
                      <div className="startpanel-0-1-0-5-1-0-0-1">
                        <div className="startpanel-0-1-0-5-1-0-0-1-0">
                          <DatePop
                            getStartTime={this.getStartTime}
                            getEndTime={this.getEndTime}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="startpanel-0-1-0-5-2" />
              </div>
              <div className="startpanel-0-1-0-6" />
              <div className="startpanel-0-1-0-7">
                <div className="startpanel-0-1-0-7-0" />
                <div className="startpanel-0-1-0-7-1">
                  <div className="startpanel-line2" />
                </div>
                <div className="startpanel-0-1-0-7-2" />
              </div>
              <div className="startpanel-0-1-0-8" />
              <div className="startpanel-0-1-0-9">
                <div className="startpanel-0-1-0-9-0" />
                <div className="startpanel-0-1-0-9-1">
                  <div className="startpanel-nationalbutton-0">
                    <div className="startpanel-0-1-0-9-1-0-0">
                      <img
                        src="https://ucarecdn.com/32c03395-56b6-48d6-a88d-b893b9f3c7ee/"
                        className="startpanel-people-1"
                      />
                      <div className="startpanel-0-1-0-9-1-0-0-1">
                        <div className="startpanel-0-1-0-9-1-0-0-1-0">
                          <div className="startpanel-nationality_-0">
                            <NationDrop getNationality={this.getNationality} />
                          </div>
                        </div>
                      </div>
                      <div className="startpanel-0-1-0-9-1-0-0-2">
                        <div className="startpanel-0-1-0-9-1-0-0-2-0">
                          {/* <img src="https://ucarecdn.com/9201e6b7-db8e-40a6-ad57-aff951b52626/" className="startpanel-drop-10" />  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="startpanel-0-1-0-9-2" />
              </div>
              <div className="startpanel-0-1-0-10" />
              <div className="startpanel-0-1-0-11">
                <div className="startpanel-0-1-0-11-0" />
                <div className="startpanel-0-1-0-11-1">
                  <div className="startpanel-line3" />
                </div>
                <div className="startpanel-0-1-0-11-2" />
              </div>
              <div className="startpanel-0-1-0-12" />
              <div className="startpanel-0-1-0-13">
                <div className="startpanel-0-1-0-13-0" />
                <div className="startpanel-0-1-0-13-1">
                  <div className="startpanel-style-1">
                    <div className="startpanel-0-1-0-13-1-0-0">
                      <img
                        src="https://ucarecdn.com/00ab33f9-5c02-4cd8-bab0-b23b02af3688/"
                        className="startpanel-list-2"
                      />
                      <div className="startpanel-0-1-0-13-1-0-0-1">
                        <div className="startpanel-0-1-0-13-1-0-0-1-0">
                          <StylePop
                            className="startpanel-style_-2"
                            getStyle={this.getStyle}
                            styles={this.state.styles}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="startpanel-0-1-0-13-2" />
              </div>
              <div className="startpanel-0-1-0-14" />
              <div className="startpanel-0-1-0-15">
                <div className="startpanel-0-1-0-15-0" />
                <div className="startpanel-0-1-0-15-1">
                  <div
                    className="startpanel-startbutton-0"
                    onClick={this.handleSubmit}
                  >
                    <div className="startpanel-0-1-0-15-1-0-0">
                      <div className="startpanel-start_plan_-2">
                        {this.state.startplan}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="startpanel-0-1-0-15-2" />
              </div>
            </div>
          </div>
          <div className="startpanel-0-2" />
        </div>
      </div>
    );
  }
}
