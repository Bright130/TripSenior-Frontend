// Generated by https://pagedraw.io/pages/15083
import React from 'react';
import './maparea.css';
import Map from './Map'
import Sticky from 'react-stickynode'


export default class Maparea extends React.Component {
  render() {
    return (
      <div className="maparea-maparea-8">
          <div className="maparea-0">
            <Sticky>
              <Map/>
            </Sticky>
          </div>
          <div className="maparea-1">
              <div className="maparea-tra_zone-1">{"Travel Zone :"}</div>
              <div className="maparea-pro-6">{ this.props.zone }</div>
              <div className="maparea-total_pl-1">
                  {"Total places :"}
              </div>
              <div className="maparea-08">{ this.props.places }</div>
              <div className="maparea-total_f-6">{"Total Fee :"}</div>
              <div className="maparea-086">{ this.props.fee }</div>
          </div>
      </div>
    );
  }
};