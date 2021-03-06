import React from "react";
import "./summary.css";

export default class Summary extends React.Component {
  render() {
    return (
      <div className="summary-summary-0">
        <div className="summary-0">
          <div className="summary-0-0">
            <div className="summary-0-0-0">
              <div className="summary-oval_2" />
            </div>
          </div>
          <div className="summary-08">{this.props.time1}</div>
        </div>
        <div className="summary-1">
          <div className="summary-1-0">
            <div className="summary-1-0-0">
              <div className="summary-line_2" />
            </div>
          </div>
          <div className="summary-1-1">
            <div className="summary-1-1-0">
              <img src={this.props.img_src} className="summary-image_7" />
            </div>
          </div>
          <div className="summary-1-2">
            <div className="summary-1-2-0">
              <div className="summary-place_a_-0">{this.props.placename}</div>
            </div>
            <div className="summary-1-2-1">
              <div className="summary-open_time_-7">
                {"Open Time : 9:00 - 17.00"}
              </div>
            </div>
          </div>
          <div className="summary-1-3">
            <div className="summary-1-3-0">
              <div className="summary-8">{}</div>
            </div>
            <div className="summary-1-3-1">
              <div className="summary-086">{}</div>
            </div>
            <div className="summary-1-3-2">
              <div className="summary-086">{}</div>
            </div>
          </div>
        </div>
        <div className="summary-2">
          <div className="summary-2-0">
            <div className="summary-2-0-0">
              <div className="summary-oval_3" />
            </div>
          </div>
          <div className="summary-10">{this.props.time2}</div>
        </div>
      </div>
    );
  }
}
