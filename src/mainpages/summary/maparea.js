import React from "react";
import "./maparea.css";
import Map from "./components/Map";

export default class Maparea extends React.Component {
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
    // if (this.props.coor !== undefined)
    // console.log(this.props.coor[1]);
    return (
      // <Sticky top={50}>
      <div className="maparea-maparea-8">
        <div className="maparea-0">
          <Map
            coor={this.props.coor}
            selectedDate={this.props.selectedDate}
            trip={this.props.trip}
          />
        </div>
        <div className="maparea-1">
          <div className="maparea-tra_zone-1">{"Travel Zone :"}</div>
          <div className="maparea-pro-6">{this.props.zone}</div>
        </div>
        <div className="maparea-2">
          <div className="maparea-total_pl-1">{"Total places :"}</div>
          <div className="maparea-08">{this.props.places}</div>
          <div className="maparea-total_f-6">{"Total Fee :"}</div>
          <div className="maparea-086">{this.props.fee}</div>
        </div>
      </div>
      // </Sticky>
    );
  }
}
