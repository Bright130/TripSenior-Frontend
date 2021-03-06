 
import React from 'react';
import './bystyle.css';


export default class Bystyle extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent pd-onactive-parent bystyle">
          { (('default') === "default") ?
              <div className="bystyle-default-0">
                  <div className="bystyle-0-0-0">
                      <div className="bystyle-image-0">
                          <div className="bystyle-0-0-0-0-0">
                              <div className="bystyle-curtain-2">
                                  <div className="bystyle-0-0-0-0-0-0-0">
                                      <div className="bystyle-forest_-8">
                                          { this.props.text }
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          : null}
          <div className="pd-onhover bystyle-_hover-3">
              <div className="bystyle-1-0">
                  <div className="bystyle-1-0-0">
                      <img src="https://ucarecdn.com/da53e060-6586-4998-bb39-eee3752ae039/" className="bystyle-image-1" /> 
                      <div className="bystyle-forest_-5">
                          { this.props.text }
                      </div>
                  </div>
              </div>
          </div>
          <div className="pd-onactive bystyle-_active-5">
              <div className="bystyle-2-0">
                  <div className="bystyle-image-4">
                      <div className="bystyle-2-0-0-0">
                          <div className="bystyle-curtain-0" /> 
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
