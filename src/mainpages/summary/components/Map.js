import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker,Polyline, MarkerWithLabel } from "react-google-maps";

const getPin = (trip, indexx) => {
  let container = [];

  trip[indexx].forEach((each, index) => {
    // console.log(each.placeID);
    
    container.push(<Marker key={index} position={each} title={"Place " + (index + 1)}/>);
  });
  console.log(indexx);
  return container;
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coor: []
    };
  }

  componentDidMount() {
    // this.setState({
    //   trip: this.props.trip[],
    //   time: this.props.trip[0].startTime
    // });
    // this.setState({
    //   coor: this.props.coor
    // });
    // console.log(this.props.coor[this.props.selectedDate]);
  }
  render() {

    if (this.props.coor !== undefined) {
      console.log(this.props.coor[this.props.selectedDate]);
    }

    if (this.props.trip !== undefined) console.log(this.props.trip[1]);


    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={
          this.props.coor !== undefined
            ? this.props.coor[this.props.selectedDate][0]
            : ""
        }
        defaultZoom={9}
      >
        <Polyline /*path={this.props.coor !== undefined ? this.props.coor[this.props.selectedDate] : ""}*/ geodesic={true} options={{strokeColor: '#FF0000',strokeWeight: 6}}/>
        {this.props.coor !== undefined
          ? getPin(this.props.coor, this.props.selectedDate.toString())
          : ""}
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `384px`, width: "607px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Map;
