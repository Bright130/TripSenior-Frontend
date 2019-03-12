import React from "react";
import Header from "../utility/header";
import Mainimage from "./mainimage";
import Startpanel from "./startpanel";
import Startpanel2 from "./startpanel2";
import Description from "./description";
import Recommendplace from "./recommendplace";
import Explore from "./explore";
import "./homepage.css";
import {
  Label,
  Segment,
  Radio
} from "semantic-ui-react";

export default class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      triptype: ""
    };
  }

  componentDidMount(prevProps, prevState) {
    this.setState({
      triptype: "Single Destination"
    })
  }

  handleChange = (e, { value }) => {
    console.log(value);
    this.setState({
      triptype: value
    });
  };

  render() {
    return (
      <div className="homepage-homepage-1">
        <div className="homepage-0">
          <div className="homepage-0-0" />
          <div className="homepage-header-8">
            <Header />
          </div>
          <div className="homepage-0-2" />
        </div>
        <div className="homepage-1">
          <div className="homepage-1-0" />
          <div className="homepage-image_instance-5">
            <Mainimage />
          </div>
          <div className="homepage-1-2" />
        </div>
        <div className="homepage-2">
          <div className="homepage-2-0" />
          <div className="homepage-startpanel_instance-3">
            
            {/* <Segment compact textAlign={'center'}> */}
              <Label>Trip Types:
              <Radio defaultChecked
                className='pad-custom'
                label="Single Destination"
                name="radioGroup"
                value="Single Destination"
                checked={this.state.triptype === "Single Destination"}
                onChange={this.handleChange}
              /> 
              <Radio 
                className='pad-custom'
                label="One-way Road Trip"
                name="radioGroup"
                value="Road Trip"
                checked={this.state.triptype === "Road Trip"}
                onChange={this.handleChange}
              />  
              </Label>        
            {/* </Segment> */}
            {this.state.triptype == "Single Destination" ? <Startpanel/> : <Startpanel2/>}
          </div>
          <div className="homepage-2-2" />
        </div>
        <div className="homepage-3">
          <div className="homepage-3-0" />
          <div className="homepage-description_instance-1">
            <Description />
          </div>
          <div className="homepage-3-2" />
        </div>
        <div className="homepage-4">
          <div className="homepage-4-0" />
          <div className="homepage-recommend_instance-8">
            <Recommendplace />
          </div>
          <div className="homepage-4-2" />
        </div>
        <div className="homepage-5">
          <div className="homepage-5-0" />
          <div className="homepage-explore_instance-9">
            <Explore />
          </div>
          <div className="homepage-5-2" />
        </div>
      </div>
    );
  }
}
