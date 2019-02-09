import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const getPin = (trip, indexx) => {
  let container = [];

  trip[indexx].forEach((each, index) => {
    // console.log(each.placeID);

    container.push(<Marker position = {each} title= {"Place "+ (index+1)}/>);
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
    if (this.props.coor !== undefined)
    console.log(this.props.coor[1]);

    if (this.props.trip !== undefined)
    console.log(this.props.trip[1]);
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {this.props.coor !== undefined ?
          this.props.coor[this.props.selectedDate][0] : ""} 
        defaultZoom = { 9 }
      >
      {/* <Marker position = {this.props.coor !== undefined ?
       this.props.coor[this.props.selectedDate][0] : ""}
       title= {this.props.trip !== undefined ?
        "Place 1" : ""}/>

      <Marker position = {this.props.coor !== undefined ?
       this.props.coor[this.props.selectedDate][1] : ""}
       title= {this.props.trip !== undefined ?
        "Place 2" : ""}/>

      <Marker position = {this.props.coor !== undefined ?
       this.props.coor[this.props.selectedDate][2] : ""}
       title= {this.props.trip !== undefined ?
        "Place 3" : ""}/>

      <Marker position = {this.props.coor !== undefined ?
       this.props.coor[this.props.selectedDate][3] : ""}
       title= {this.props.trip !== undefined ?
        "Place 4" : ""}/>

      <Marker position = {this.props.coor !== undefined ?
       this.props.coor[this.props.selectedDate][4] : ""}
       title= {this.props.trip !== undefined ?
        "Place 5" : ""}/>

      <Marker position = {this.props.coor !== undefined ?
       this.props.coor[this.props.selectedDate][5] : ""}
       title= {this.props.trip !== undefined ?
        "Place 6" : ""}/> */}

      {this.props.coor !== undefined ? getPin(this.props.coor, this.props.selectedDate.toString()) : ""}
      
      
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