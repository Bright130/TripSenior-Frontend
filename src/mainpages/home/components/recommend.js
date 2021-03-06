 
import React from 'react';
import Styletag from './styletag';
import './recommend.css';
import { Rating } from 'semantic-ui-react'
import PropTypes from "prop-types";


export default class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.changeRoute=this.changeRoute.bind(this);
      }
    static contextTypes = {
        router: PropTypes.object
      };
    changeRoute(evt) {
        this.context.router.history.push("/place/"+this.props.id);
        // console.log(this.props.id)
      };
  render() {
    console.log(this.props.img_rate)
    return (
      <div className="pd-onhover-parent pd-onactive-parent recommend" onClick={this.changeRoute}>
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
                      <Rating defaultRating={this.props.img_rate} maxRating={5} disabled size='massive'/>
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
                          <div className="recommend-place-1">
                              { this.props.place }
                          </div>
                          <div className="recommend-1-0-0-1-1">
                              <div className="recommend-1-0-0-1-1-0">
                                  <div className="recommend-province-1">
                                      { this.props.province }
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="recommend-1-0-0-2">
                      <Rating defaultRating={this.props.img_rate} maxRating={5} disabled size='massive' /> 
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
                  <div className="recommend-place-1">
                      { this.props.place }
                  </div>
                  <div className="recommend-2-1-1">
                      <div className="recommend-2-1-1-0">
                          <div className="recommend-province-1">
                              { this.props.province }
                          </div>
                      </div>
                  </div>
              </div>
              <div className="recommend-2-2">
              <Rating defaultRating={this.props.img_rate} maxRating={5} disabled size='massive'/>
              </div>
          </div>
      </div>
    );
  }
};
