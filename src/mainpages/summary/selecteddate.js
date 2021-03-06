 
import React from "react";
import "./selecteddate.css";

export default class Selecteddate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pd-onhover-parent pd-onactive-parent selecteddate">
        <div className="pd-onhover selecteddate-_hover-2">
          <div className="selecteddate-0-0">
            <div className="selecteddate-oval-9">
              <div className="selecteddate-0-0-0-0">
                <div className="selecteddate-sat2">{this.props.text}</div>
              </div>
            </div>
          </div>
        </div>
        {"default" === "default" ? (
          <div className="selecteddate-default-4">
            <div className="selecteddate-1-0-0">
              <div className="selecteddate-oval-2">
                <div className="selecteddate-1-0-0-0-0">
                  <div className="selecteddate-sat22">{this.props.text}</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="pd-onactive selecteddate-_active-6">
          <div className="selecteddate-2-0">
            <div className="selecteddate-oval-90">
              <div className="selecteddate-2-0-0-0">
                <div className="selecteddate-sat22-1">{this.props.text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
