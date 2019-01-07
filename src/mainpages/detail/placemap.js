// Generated by https://pagedraw.io/pages/15083
import React, { Component } from 'react';
import './placemap.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class PlaceMap extends Component {
  render() {
  const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { { lat: this.props.latitude, lng: this.props.longitude } }
       defaultZoom = { 13 }
     >
      <Marker position={{ lat: this.props.latitude, lng: this.props.longitude }} />
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
export default PlaceMap;