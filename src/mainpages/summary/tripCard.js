 
import React from "react";
import Header from "../utility/header";
import Tripname from "../customize/tripname";
import Selecteddate from "./selecteddate";
import Notselectdate from "./notselectdate";
import Dates from "./date";
import Summary from "./summary";
import Maparea from "./maparea";
import "./summarypage.css";
const convertTime = timestamp => {
  console.log(new Date(timestamp));
  var a = new Date(timestamp);

  var hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
  var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();

  var date = hour + ":" + min;
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

export default class TripCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null
    };
  }

  componentDidMount() {
    console.log(this.state);
    getPlace(this.props.each.placeID).then(data => {
      this.setState(
        {
          place: data
        },
        () => {
          console.log(this.state.place);
        }
      );
    });
  }
  componentWillReceiveProps(nextProps) {
    getPlace(nextProps.each.placeID).then(data => {
      this.setState(
        {
          place: data
        },
        () => {
          console.log(this.state.place);
        }
      );
    });
  }
  render() {
    return (
      <div className="summarypage-2-0-3">
        <div className="summarypage-summary_instance-9">
          <Summary
            time1={convertTime(this.props.each.startTime)}
            time2={convertTime(
              this.props.each.startTime + this.props.each.peroidMinute * 60000
            )}
            placename={this.state.place == null ? "" : this.state.place["name"]}
            img_src={
              this.state.place == null ? "" : this.state.place["imgs"][0]
            }
            openTime={""}
            phone={""}
            fee={""}
          />
        </div>
      </div>
    );
  }
}
