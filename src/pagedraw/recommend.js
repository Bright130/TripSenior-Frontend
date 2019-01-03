// Generated by https://pagedraw.io/pages/15083
import React from 'react';
import Styletag from './styletag';
import './recommend.css';


export default class Recommend extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent pd-onactive-parent recommend">
          { (('default') === "default") ?
              <div className="recommend-default-2">
                  <div className="recommend-0-0-0">
                      <div className="recommend-image_6" style={{"backgroundImage": ("url('"+(this.props.img_src)+"')")}}>
                          <div className="recommend-0-0-0-0-0">
                              <div className="recommend-styletag-7">
                                  <Styletag text={this.props.style} /> 
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="recommend-0-0-1">
                      <div className="recommend-place-1">
                          { this.props.place }
                      </div>
                      <div className="recommend-0-0-1-1">
                          <div className="recommend-0-0-1-1-0">
                              <div className="recommend-province-1">
                                  { this.props.province }
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="recommend-0-0-2">
                      <div className="recommend-rating-4" style={{"backgroundImage": ("url('"+(this.props.img_rate)+"')")}} /> 
                  </div>
              </div>
          : null}
          <div className="pd-onhover recommend-_hover-4">
              <div className="recommend-1-0">
                  <div className="recommend-border-5">
                      <div className="recommend-1-0-0-0">
                          <div className="recommend-image_6-9" style={{"backgroundImage": ("url('"+(this.props.img_src)+"')")}}>
                              <div className="recommend-1-0-0-0-0-0">
                                  <div className="recommend-styletag-4">
                                      <Styletag text={this.props.style} /> 
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="recommend-1-0-0-1">
                          <div className="recommend-place-8">
                              { this.props.place }
                          </div>
                          <div className="recommend-1-0-0-1-1">
                              <div className="recommend-1-0-0-1-1-0">
                                  <div className="recommend-province-6">
                                      { this.props.province }
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="recommend-1-0-0-2">
                          <div className="recommend-rating-0" style={{"backgroundImage": ("url('"+(this.props.img_rate)+"')")}} /> 
                      </div>
                  </div>
              </div>
          </div>
          <div className="pd-onactive recommend-_active-4">
              <div className="recommend-2-0">
                  <div className="recommend-image_6-7" style={{"backgroundImage": ("url('"+(this.props.img_src)+"')")}}>
                      <div className="recommend-2-0-0-0">
                          <div className="recommend-styletag-3">
                              <Styletag text={this.props.style} /> 
                          </div>
                      </div>
                  </div>
              </div>
              <div className="recommend-2-1">
                  <div className="recommend-place-10">
                      { this.props.place }
                  </div>
                  <div className="recommend-2-1-1">
                      <div className="recommend-2-1-1-0">
                          <div className="recommend-province-4">
                              { this.props.province }
                          </div>
                      </div>
                  </div>
              </div>
              <div className="recommend-2-2">
                  <div className="recommend-rating-9" style={{"backgroundImage": ("url('"+(this.props.img_rate)+"')")}} /> 
              </div>
          </div>
      </div>
    );
  }
};