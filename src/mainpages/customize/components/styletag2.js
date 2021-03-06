 
import React from 'react';
import './styletag2.css';


export default class Styletag2 extends React.Component {
  render() {
    return (
      <div className="pd-onactive-parent pd-onhover-parent styletag2">
          { (('default') === "default") ?
              <div className="styletag2-default-0">
                  <div className="styletag2-0-0-0">
                      <div className="styletag2-tag-2">
                          <div className="styletag2-0-0-0-0-0">
                              <div className="styletag2-text-9">{ this.props.text }</div>
                          </div>
                      </div>
                  </div>
              </div>
          : null}
          <div className="pd-onactive styletag2-_active-4">
              <div className="styletag2-1-0">
                  <div className="styletag2-tag-7">
                      <div className="styletag2-1-0-0-0">
                          <div className="styletag2-text-8">{ this.props.text }</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="pd-onhover styletag2-_hover-8">
              <div className="styletag2-2-0">
                  <div className="styletag2-tag-4">
                      <div className="styletag2-2-0-0-0">
                          <div className="styletag2-text-5">{ this.props.text }</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
