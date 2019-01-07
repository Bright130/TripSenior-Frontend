// Generated by https://pagedraw.io/pages/15083
import React from 'react';
import Header from '../utility/header';
import Gallery from './gallery';
import Detail from './detail';
import Peaktime from './peaktime';
import PlaceMap from './placemap';
import './detailpage.css';


export default class Detailpage extends React.Component {
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
                          <Gallery img_src={"https://ucarecdn.com/8979e71a-454c-406c-8293-5db2dea534df/"} /> 
                      </div>
                  </div>
              </div>
              <div className="detailpage-1-2" /> 
              <div className="detailpage-detail_instance-6">
                  <Detail place={"Watphra kaew rr"} province={"-Songkhla"} rating={"https://ucarecdn.com/1174ec7c-748a-4cd8-813a-276ef70262f4/"} opentime={"8:00 - 16:00"} phone={"+66853753426"} fee={"50 Bath"} description={"This is an area aaaaaaaaaaaaaaaaaaaaaaaaa  ssssss sssssss   qq   qq q q q q q q q  q q q q wwww"} style={"Shopping"} /> 
              </div>
              <div className="detailpage-1-4" /> 
          </div>
          <div className="detailpage-2">
              <div className="detailpage-2-0" /> 
              <div className="detailpage-unnamed_instance-2">
                  {/* <Peaktime />  */}
                  Peak Time Module
              </div>
              <div className="detailpage-2-2" /> 
              <div className="detailpage-component_2_">
                  <PlaceMap latitude={7.0050994} longitude={100.4619507}/> 
              </div>
              <div className="detailpage-2-4" /> 
          </div>
          <div className="detailpage-3" /> 
      </div>
    );
  }
};
