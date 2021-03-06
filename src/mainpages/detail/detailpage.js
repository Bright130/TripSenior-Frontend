 
import React from "react";
import Header from "../utility/header";
import Gallery from "./gallery";
import Detail from "./detail";
import Peaktime from "./peaktime";
import PlaceMap from "./placemap";
import "./detailpage.css";

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

const imgGenerator = reactComponent => {
  let container = [];
  // console.log(reactComponent);
  // for (var key in reactComponent) {
  //   container.push({
  //     original: element[key],
  //     thumbnail: element[key]
  //   });
  // }
  console.log(reactComponent);
  // return container;
  return reactComponent[0];
};

export default class Detailpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { placeInfo: "" };
  }

  componentDidMount() {
    loadAPI(
      " http://127.0.0.1:5000/place?place_id=" + this.props.match.params.id
    ).then(data => {
      this.setState({
        placeInfo: data,
        img: [
          {
            original: data.imgs[0],
            thumbnail: data.imgs[0]
          }
        ]
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="detailpage-detailpage-0">
        <div className="detailpage-0">
          <div className="detailpage-0-0" />
          <div className="detailpage-header_instance_3">
            <Header />
          </div>
          <div className="detailpage-0-2" />
        </div>
        <div className="detailpage-1">
          <div className="detailpage-1-0" />
          <div className="detailpage-1-1">
            <div className="detailpage-1-1-0">
              <div className="detailpage-component_2">
                <Gallery img_src={this.state.img} />
              </div>
            </div>
          </div>
          <div className="detailpage-1-2" />
          <div className="detailpage-detail_instance-6">
            <Detail
              place={this.state.placeInfo["name"]}
              province={"-" + this.state.placeInfo["province"]}
              rating={this.state.placeInfo["avg_rank"]}
              opentime={"8:00 - 16:00"}
              phone={"+66853753426"}
              fee={"50 Bath"}
              description={"This is " + this.state.placeInfo["name"]}
              style={this.state.placeInfo["styles"]}
            />
          </div>
          <div className="detailpage-1-4" />
        </div>
        <div className="detailpage-2">
          <div className="detailpage-2-0" />
          <div className="detailpage-unnamed_instance-2">
            {/* <Peaktime />  */}
            Images Powered by TripAdvisor
            <img className="tripad central" src="https://developer-tripadvisor.s3.amazonaws.com/uploads/tripadvisor-horz-rgb_newcolor_(1)_(1).svg"/>
          </div>
          <div className="detailpage-2-2" />
          <div className="detailpage-component_2_">
            <PlaceMap
              latitude={this.state.placeInfo["lat"]}
              longitude={this.state.placeInfo["long"]}
            />
          </div>
          <div className="detailpage-2-4" />
        </div>
        <div className="detailpage-3" />
      </div>
    );
  }
}
