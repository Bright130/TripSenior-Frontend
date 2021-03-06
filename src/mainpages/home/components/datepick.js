import React from "react";
import DateRangePicker from "react-daterange-picker";
import "../startpanel.css";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import {
  Checkbox,
  Button,
  Popup,
  Grid,
  Form,
  Radio,
  GridColumn
} from "semantic-ui-react";
const moment = extendMoment(originalMoment);

class DatePop extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: true,
      value: moment.range(today.clone().subtract(2, "days"), today.clone())
    };
  }

  componentDidMount() {
    this.props.getStartTime(this.state.value.start.unix());
    this.props.getEndTime(this.state.value.end.unix());
  }

  onSelect = (value, states) => {
    console.log(value);
    this.props.getStartTime(value.start.unix());
    this.props.getEndTime(value.end.unix());
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {
    // this.props.getStartTime(this.state.value.start);
    return (
      <div className="datebutton">
        {this.state.value.start.format("DD-MM-YYYY")}
        {" - "}
        {this.state.value.end.format("DD-MM-YYYY")}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Popup
          trigger={<Button>{this.renderSelectionValue()}</Button>}
          flowing
          hoverable
        >
          {/* <div>{this.renderSelectionValue()}</div> */}

          {this.state.isOpen && (
            <DateRangePicker
              value={this.state.value}
              onSelect={this.onSelect}
              singleDateRange={true}
            />
          )}
        </Popup>
      </div>
    );
  }
}

export default DatePop;
