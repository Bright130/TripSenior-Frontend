import React from "react";
import "./profilepage.css";
import { Icon, Input, Button, Dropdown } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { loadAPI } from "../home/components/util";
import Header from "../utility/header"


export default class Profilepage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  render() {
    return (
      <div className="summarypage-summarypage-7">
        <div className="detailpage-0">
          <div className="detailpage-0-0" />
          <div className="detailpage-header_instance_3">
            <Header />
          </div>
          <div className="detailpage-0-2" />
        </div>
        <div className="tripname-tripname-8">
          <div className="tripname-0">
            <div className="tripname-tripname-9">My Profile</div>
          </div>
        </div>
        <div className="tripname-tripname-8">
          <div className="tripname-0">
  <div>
    <Icon circular inverted color='teal' fitted name='user' size='large'/>
  </div>
            <div className="tripname-tripname-10">Name</div>
          </div>
        </div>
          <div className="tripname-0">
  <div>
    <Icon circular inverted color='teal' fitted name='flag' size='large'/>
  </div>
            <div className="tripname-tripname-10">Country</div>
          </div>
          <div className="tripname-0">
  <div>
    <Icon circular inverted color='teal' fitted name='calendar alternate outline' size='large'/>
  </div>
            <div className="tripname-tripname-10">Birthday</div>
          </div>
          <div className="tripname-0">
  <div>
    <Icon circular inverted color='teal' fitted name='address card' size='large'/>
  </div>
            <div className="tripname-tripname-10">Username</div>
          </div>
          <div className="tripname-0">
  <div>
    <Icon circular inverted color='teal' fitted name='key' size='large'/>
  </div>
            <div className="tripname-tripname-10">Password</div>
          </div>
          <div className="tripname-0">
  <div>
    <Icon circular inverted color='teal' fitted name='key' size='large'/>
  </div>
            <div className="tripname-tripname-10">Confirm Password</div>
          </div>
      </div>
    
    );
  }
}
