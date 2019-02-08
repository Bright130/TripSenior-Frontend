import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
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
    if (this.props.coor !== undefined)
    console.log(this.props.coor[1]);
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {this.props.coor !== undefined ?
          this.props.coor[this.props.selectedDate][0] : ""} 
        defaultZoom = { 13 }
      >
      <Marker position = {this.props.coor !== undefined ?
       this.props.coor[this.props.selectedDate][0] : ""}
       title= {this.props.trip !== undefined ?
        this.props.trip[this.props.selectedDate][0].toString() : ""}/>
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `384px`, width: '607px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;