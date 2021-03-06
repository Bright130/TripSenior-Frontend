 
import React from "react";
import "./tripSlot.css";

export default class TripSlot extends React.Component {
  constructor(props) {
    super(props);

    this.goSummary = this.goSummary.bind(this)
    this.goPDF = this.goPDF.bind(this);
  }

  goPDF(evt) {
    window.open(
      "http://localhost:5000/plan-pdf/Trip-" + this.props.tripID
    );
  }

  goSummary(evt) {
    this.props.viewSummary(this.props.tripID)
  }

  render() {
    console.log(this.props)
    return (
      <div className="summary-summary-0">
        <div className="summary-1">
          <div className="summary-1-1">
            <div className="summary-1-1-0">
              <img src={this.props.image} className="summary-image_7" />
            </div>
          </div>
          <div className="summary-1-">
            <div className="summary-1-2-0">
              <div className="summary-place_a_-0">Tripname : {this.props.name}</div>
            </div>
          </div>
          <div className="summary-1-2">
            <div className="summary-1-2-1">
              <div className="summary-open_time_-7">{"Duration :"}</div>
            </div>
            <div className="summary-1-2-2">
              <div className="summary-tel-4">{"Province :"}</div>
            </div>
            <div className="summary-1-2-3">
              <div className="summary-fee-2">{"Date Created :"}</div>
            </div>
          </div>
          <div className="summary-1-2-">
            <div className="summary-1-2-1">
              <div className="summary-8">{this.props.numberofday}</div>
            </div>
            <div className="summary-1-2-2">
              <div className="summary-086">{this.props.numberofprovince}</div>
            </div>
            <div className="summary-1-2-3">
              <div className="summary-086">{this.props.created}</div>
            </div>
          </div>
          <div className="summary-extra"></div>
          <div className="summary-1-3">
            <div className="summarypage-export-7">
              <div className="summarypage-2-2-0-0-2-0-0-1-0">
                <div className="summarypage-rectangle_9" onClick={this.goSummary} >
                  <div className="summarypage-2-2-0-0-2-0-0-1-0-0-0">
                    <div className="summarypage-export_pdf_-8">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary-1-3">
            <div className="summarypage-export-7">
              <div className="summarypage-2-2-0-0-2-0-0-1-0">
                <div className="summarypage-rectangle_9" onClick={this.goPDF}>
                  <div className="summarypage-2-2-0-0-2-0-0-1-0-0-0">
                    <div className="summarypage-export_pdf_-8">
                      Export PDF
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
