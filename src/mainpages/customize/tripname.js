 
import React from "react";
import "./tripname.css";
import EditableLabel from "react-editable-label";

export default class Tripname extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tripname-tripname-8">
        <div className="tripname-0">
          <div className="tripname-tripname-9">
            {this.props.name == "" ? (
              ""
            ) : (
              <EditableLabel
                initialValue={this.props.name}
                save={value => this.props.getName(value)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
