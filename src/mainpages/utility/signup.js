 
import React from "react";
import "./signup.css";
import { Icon, Input, Button, Dropdown } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { loadAPI } from "../home/components/util";
const countryOptions = [
  {
    text: "Malaysia",
    value: "Malaysia"
  },
  {
    text: "Germany",
    value: "Germany"
  }
];

const nationOptions = () => {
  let ret = [];
  loadAPI(" http://127.0.0.1:5000/static/nationalities").then(result => {
    result.forEach(function(ele) {
      ret.push({
        text: ele,
        value: ele
      });
    });
  });
  // console.log(ret);
  return ret;
};

function postData(url = ``, data = {}) {
  return new Promise(function(resolve, reject) {
    console.log(data);
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: data // body data type must match "Content-Type" header
    })
      .then(result => {
        result
          .json()
          .then(json => {
            resolve(json);
          })
          .catch(error => {
            reject(error);
          });
      })

      .catch(error => {
        reject(error);
      });
  });
}

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      nationality: "",
      date: "",
      password: "",
      confirm_pass: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNationChange = this.handleNationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    console.log(name + "  " + value);
  };

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    const info = {
      email: this.state.username,
      password: this.state.password,
      name: this.state.name,
      birthday: this.state.date,
      nationality: this.state.nationality
    };

    console.log(info);
    postData("http://localhost:5000/user", JSON.stringify(info))
      .then(data => {
        localStorage.setItem("token", JSON.stringify(data["access_token"]));
        window.location.reload();
      }) // JSON-string from `response.json()` call

      .catch(error => console.error(error));
    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value
    });
  }

  handleNameChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  handleNationChange(evt) {
    this.setState({
      nationality: evt.target.value
    });
  }
  render() {
    return (
      <div className="signup-signup-8">
        <div className="signup-0">
          <div className="signup-0-0" />
          <div className="signup-0-1">
            <div className="signup-0-1-0">
              <div className="signup-rectangle_14">
                <div className="signup-0-1-0-0-0">
                  <div className="signup-0-1-0-0-0-0" />
                  <div className="signup-sign_up_-9">Sign up</div>
                  <div className="signup-0-1-0-0-0-2" />
                </div>
                <div className="signup-0-1-0-0-2">
                  <div className="signup-0-1-0-0-2-0" />
                  <div className="signup-rectangle_11">
                    <Input
                      icon={<Icon name="user" size="big" />}
                      className="signup-0-1-0-0-2-1-0"
                      type="text"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                      iconPosition="left"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="signup-0-1-0-0-2-2" />
                </div>

                <div className="signup-0-1-0-0-2">
                  <div className="signup-0-1-0-0-2-0" />
                  <div className="signup-rectangle_11">
                    <Input
                      icon={<Icon name="mail" size="big" />}
                      className="signup-0-1-0-0-2-1-0"
                      type="text"
                      placeholder="Email"
                      value={this.state.username}
                      onChange={this.handleUserChange}
                      iconPosition="left"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="signup-0-1-0-0-2-2" />
                </div>

                <div className="signup-0-1-0-0-2">
                  <div className="signup-0-1-0-0-2-0" />
                  <div className="signup-rectangle_11">
                    <Dropdown
                      text={this.state.nationality}
                      icon={<Icon name="address card outline" size="large" />}
                      className="signup-0-1-0-0-2-1-0 icon"
                      floating
                      labeled
                      button
                      search
                      options={nationOptions()}
                      placeholder="Home Country"
                      name="nationality"
                      value={this.state.nationality}
                      onChange={this.handleChange}
                      iconPosition="left"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="signup-0-1-0-0-2-2" />
                </div>
                <div className="signup-0-1-0-0-2">
                  <div className="signup-0-1-0-0-2-0" />
                  <div className="signup-rectangle_11">
                    <DateInput
                      name="date"
                      placeholder="Date of Birth"
                      value={this.state.date}
                      iconPosition="left"
                      icon={<Icon name="birthday" size="big" />}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="signup-0-1-0-0-2-2" />
                </div>
                <div className="signup-0-1-0-0-2">
                  <div className="signup-0-1-0-0-2-0" />
                  <div className="signup-rectangle_11">
                    <Input
                      icon={<Icon name="key" size="big" />}
                      className="signup-0-1-0-0-2-1-0"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlePassChange}
                      iconPosition="left"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="signup-0-1-0-0-2-2" />
                </div>
                <div className="signup-0-1-0-0-2">
                  <div className="signup-0-1-0-0-2-0" />
                  <div className="signup-rectangle_11">
                    <Input
                      icon={<Icon name="key" size="big" />}
                      className="signup-0-1-0-0-2-1-0"
                      type="password"
                      placeholder="Confirm Password"
                      name="confirm_pass"
                      value={this.state.confirm_pass}
                      onChange={this.handleChange}
                      iconPosition="left"
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="signup-0-1-0-0-2-2" />
                </div>
                <div className="signup-0-1-0-0-7">
                  <div className="signup-0-1-0-0-7-0" />
                  <Button type="submit" className="signin-rectangle_12">
                    <div className="signup-0-1-0-0-7-1-0">
                      {/* <Button type='submit' >Submit</Button> */}
                      {/* <input type="submit" value="Log In" data-test="submit" /> */}
                      <div
                        className="signup-sign_up_-1"
                        onClick={this.handleSubmit}
                      >
                        Sign Up
                      </div>
                    </div>
                  </Button>
                  <div className="signup-0-1-0-0-7-2" />
                </div>
                <div className="signup-0-1-0-0-8" />
              </div>
            </div>
          </div>
          <div className="signup-0-2" />
          <div className="signup-rectangle_10">
            <div className="signup-0-3-0">
              <div className="signup-0-3-0-0" />
              <div className="signup-welcome_back_-1">Welcome Back!</div>
              <div className="signup-0-3-0-2" />
            </div>
            <div className="signup-0-3-1">
              <div className="signup-0-3-1-0" />
              <div className="signup-please_sign_in_to_keep_connect_with_us_-2">
                Please sign in to keep connect with us
              </div>
              <div className="signup-0-3-1-2" />
            </div>
            <div className="signup-0-3-2">
              <div className="signup-0-3-2-0" />
              <div className="signup-rectangle_12-0">
                <div className="signup-0-3-2-1-0">
                  <div className="signup-sign_in_-1">Sign in</div>
                </div>
              </div>
              <div className="signup-0-3-2-2" />
            </div>
            <div className="signup-0-3-3" />
          </div>
          <div className="signup-0-4" />
        </div>
      </div>
    );
  }
}
