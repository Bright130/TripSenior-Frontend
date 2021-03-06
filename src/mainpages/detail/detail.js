 
import React from 'react';
import Styletag from './styletag3';
import './detail.css';


export default class Detail extends React.Component {
  render() {
    return (
      <div className="detail-detail-2">
          <div className="detail-0">
              <div className="detail-0-0" /> 
              <div className="detail-detai-4">
                  <div className="detail-0-1-0">
                      <div className="detail-wat_phra_kaew_-2">
                          { this.props.place }
                      </div>
                  </div>
                  <div className="detail-0-1-1">
                      <div className="detail-0-1-1-0" /> 
                      <div className="detail--songkla_-4">
                          { this.props.province }
                      </div>
                      <div className="detail-0-1-1-2" /> 
                      <div className="detail-0-1-1-3">
                          <div className="detail-0-1-1-3-0">
                              <div className="detail-rating-0" style={{"backgroundImage": ("url('"+(this.props.rating)+"')")}} /> 
                          </div>
                      </div>
                      <div className="detail-0-1-1-4" /> 
                  </div>
                  <div className="detail-0-1-2">
                      <div className="detail-0-1-2-0" /> 
                      <div className="detail-open_time_-2">{"Open Time :"}</div>
                      <div className="detail-0-1-2-2" /> 
                      <div className="detail-8">{ this.props.opentime }</div>
                      <div className="detail-0-1-2-4" /> 
                  </div>
                  <div className="detail-0-1-3">
                      <div className="detail-0-1-3-0" /> 
                      <div className="detail-0-1-3-1">
                          <div className="detail-0-1-3-1-0">
                              <div className="detail-tel-2">{"Telephone :"}</div>
                          </div>
                      </div>
                      <div className="detail-0-1-3-2" /> 
                      <div className="detail-0-1-3-3">
                          <div className="detail-0-1-3-3-0">
                              <div className="detail-08">{ this.props.phone }</div>
                          </div>
                      </div>
                      <div className="detail-0-1-3-4" /> 
                  </div>
                  <div className="detail-0-1-4">
                      <div className="detail-0-1-4-0" /> 
                      <div className="detail-fee-2">{"Entry Fee :"}</div>
                      <div className="detail-0-1-4-2" /> 
                      <div className="detail-086">{ this.props.fee }</div>
                      <div className="detail-0-1-4-4" /> 
                  </div>
                  <div className="detail-0-1-5">
                      <div className="detail-styletag_instance-2">
                          <Styletag text={this.props.style==null?this.props.style:this.props.style[0]}/> 
                        
                      </div>
                  </div>
                  <div className="detail-0-1-6">
                      <div className="detail-0-1-6-0" /> 
                      <div className="detail-_wat_phra_kaew_is_lorem_imsup_lorem_imsup_lorem_imsup_lorem_imsup_lorem_imsup_lorem_imsup_lorem_imsup_lorem_imsup_lorem_imsup_lorem_imsuplorem_imsup_-9">
                          { this.props.description }
                      </div>
                      <div className="detail-0-1-6-2" /> 
                  </div>
                  <div className="detail-0-1-7" /> 
              </div>
              <div className="detail-0-2" /> 
          </div>
      </div>
    );
  }
};
