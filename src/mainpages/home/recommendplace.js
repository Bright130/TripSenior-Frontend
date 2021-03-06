 
import React from "react";
import Recommend from "./components/recommend";
import "./recommendplace.css";

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

const place = reactComponent => {
  let ret = [];
  loadAPI(" http://127.0.0.1:5000/introPlaces").then(result => {
    reactComponent.setState({
      place1: result[0],
      place2: result[1],
      place3: result[2],
      place4: result[3]
    });
  });
};

let a = "s";

export default class Recommendplace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place1: {},
      place2: {},
      place3: {},
      place4: {}
    };
  }

  componentDidMount() {
    place(this);
  }

  render() {
    return (
      <div className="recommendplace-recommendplace-5">
        <div className="recommendplace-0">
          <div className="recommendplace-recommended_places_-1">
            Recommended Places
          </div>
        </div>
        <div className="recommendplace-1">
          <div className="recommendplace-1-0" />
          <div className="recommendplace-recommend-7">
            <Recommend
              id={this.state.place1["_id"]}
              place={this.state.place1["name"]}
              province={this.state.place1["province"]}
              img_src={this.state.place1["img"]}
              style={this.state.place1["style"]}
              img_rate={4}
            />
          </div>
          <div className="recommendplace-1-2" />
          <div className="recommendplace-recommend-5">
            <Recommend
              id={this.state.place2["_id"]}
              place={this.state.place2["name"]}
              province={this.state.place2["province"]}
              img_src={this.state.place2["img"]}
              style={this.state.place2["style"]}
              img_rate={4}
            />
          </div>
          <div className="recommendplace-1-4" />
          <div className="recommendplace-recommend-6">
            <Recommend
              id={this.state.place3["_id"]}
              place={this.state.place3["name"]}
              province={this.state.place3["province"]}
              img_src={this.state.place3["img"]}
              style={this.state.place3["style"]}
              img_rate={4}
            />
          </div>
          <div className="recommendplace-1-6" />
          <div className="recommendplace-recommend-9">
            <Recommend
              id={this.state.place4["_id"]}
              place={this.state.place4["name"]}
              province={this.state.place4["province"]}
              img_src={this.state.place4["img"]}
              style={this.state.place4["style"]}
              img_rate={4}
            />
          </div>
          <div className="recommendplace-1-8" />
        </div>
      </div>
    );
  }
}
