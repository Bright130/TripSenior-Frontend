import React from "react";
import "./header.css";
import Sticky from "react-stickynode";
import Signup from "./signup";
import Signin from "./signin";
import { Button, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";



function getBar(reactComponent) {
  if (localStorage.getItem("token") != null)
    return (
      <div className="header-utils-7">
        <div className="header-1-3-0" />
        <div className="header-1-3-1">
          <div className="header-1-3-1-0">
            <div className="header-1-3-1-0-0">
              <div className="header-my_trips_-6" onClick={reactComponent.goMyTrip.bind(reactComponent)}>My Trips</div>
            </div>
          </div>
          <div className="header-line-4" />
          <div className="header-1-3-1-2">
            <div className="header-1-3-1-2-0 ">
              <form onSubmit={reactComponent.handleSubmit}>
                <Button type="submit" value="Logout" data-test="submit">
                  {" "}
                  Logout{" "}
                </Button>
              </form>
            </div>
          </div>
          <div className="header-1-4" />
            <div className="header-1-5">
              <div className="header-1-5-0" />
              <div className="header-1-5-1" onClick={reactComponent.goProfile.bind(reactComponent)}>
                <img
                  src="https://ucarecdn.com/45490e93-6b20-48a6-a0fd-e118f76760dc/"
                  className="header-image_5"
                />
              </div>
              <div className="header-1-5-2" />
            </div>
        </div>
        <div className="header-1-3-2" />
      </div>
    );

  return (
    <div className="header-utils-7">
      <div className="header-1-3-0" />
      <div className="header-1-3-1">
        {/* <div className="header-line-3" /> */}
        <div className="header-1-3-1-2">
          <div className="header-1-3-1-2-0 ">
            <Modal
              trigger={<Button>Sign Up</Button>}
              className="header-sign_up_-5 scrolling"
              basic
            >
              <Signup />
            </Modal>
          </div>
        </div>
        <div className="header-line-4" />
        <div className="header-1-3-1-4">
          <div className="header-1-3-1-4-0">
            <Modal
              trigger={<Button>Sign In</Button>}
              className="header-sign_in_-9 scrolling"
              basic
            >
              <Signin />
            </Modal>
          </div>
        </div>
      </div>
      <div className="header-1-3-2" />
    </div>
  );
}

export default class Header extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };
  changeRoute = () => {
    this.context.router.history.push("/");
  };

  handleSubmit(evt) {
    evt.preventDefault();

    localStorage.removeItem("token");
    window.location.reload();
  }

  goProfile(evt) {
    evt.preventDefault();
    this.context.router.history.push("/myprofile");
  }

  goMyTrip(evt) {
    evt.preventDefault();
    this.context.router.history.push("/mytrip");
  }

  render() {
    return (
      <Sticky>
        <div className="header-header-1">
          <div className="header-0" />
          <div className="header-1">
            <div className="header-1-0" />
            <div className="header-1-1">
              <div className="header-1-1-0" />
              <div className="header-1-1-1">
                <img
                  className="header-tripnotize_-2"
                  onClick={this.changeRoute}
                  src="https://imgur.com/JXHy6wX.png"
                />
              </div>
              <div className="header-1-1-2" />
            </div>
            <div className="header-1-2" />
            {getBar(this)}
            
            <div className="header-1-6" />
          </div>
          <div className="header-2" />
        </div>
      </Sticky>
    );
  }
}
