 
import React from 'react';
import './styletag.css';


export default class Styletag extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent pd-onactive-parent styletag">
          <div className="pd-onhover styletag-_hover-0">
              <div className="styletag-1-0-0">
                  <div className="styletag-tag-4re">
                      <div className="styletag-0-0-0-0">
                          <div className="styletag-text-3">{ this.props.text }</div>
                      </div>
                  </div>
              </div>
          </div>
          { (('default') === "default") ?
              <div className="styletag-default-5">
                  <div className="styletag-1-0-0">
                      <div className="styletag-tag-2re">
                          <div className="styletag-1-0-0-0-0">
                              <div className="styletag-text-4">{ this.props.text }</div>
                          </div>
                      </div>
                  </div>
               </div>
          : null}
          <div className="pd-onactive styletag-_active-5">
              <div className="styletag-2-0">
                  <div className="styletag-tag-8re">
                      <div className="styletag-2-0-0-0">
                          <div className="styletag-text-7">{ this.props.text }</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
