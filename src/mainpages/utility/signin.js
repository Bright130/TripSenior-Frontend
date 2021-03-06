 
import React from "react";
import "./signin.css";
import { Icon, Input, Button } from "semantic-ui-react";

function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
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
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json()); // parses response to JSON
}

export default class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      error: ""
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: "" });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: "Username is required" });
    }

    if (!this.state.password) {
      return this.setState({ error: "Password is required" });
    }

    const email = this.state.username;
    const password = this.state.password;

    postData("http://localhost:5000/login", {
      email: email,
      password: password
    })
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

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return (
      <div className="signin-signin-3">
        <div className="signin-0">
          <div className="signin-0-0" />
          <div className="signin-rectangle_10">
            <div className="signin-0-1-0">
              <div className="signin-0-1-0-0" />
              <div className="signin-hello_friend_-7">Hello,Friend</div>
              <div className="signin-0-1-0-2" />
            </div>
            <div className="signin-0-1-1">
              <div className="signin-0-1-1-0" />
              <div className="signin-please_sign_up_to_use_all_our_features_-3">
                Please sign up to use all our features
              </div>
              <div className="signin-0-1-1-2" />
            </div>
            <div className="signin-0-1-2">
              <div className="signin-0-1-2-0" />
              <div className="signin-rectangle_1">
                <div className="signin-0-1-2-1-0">
                  <div className="signin-sign_up_-0">Sign up</div>
                </div>
              </div>
              <div className="signin-0-1-2-2" />
            </div>
            <div className="signin-0-1-3" />
          </div>
          <div className="signin-0-2" />
          <div className="signin-rectangle_13">
            <form onSubmit={this.handleSubmit}>
              {this.state.error && (
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              )}
              <div className="signin-0-3-0">
                <div className="signin-0-3-0-0" />
                <div className="signin-sign_in_-8">Sign in</div>
                <div className="signin-0-3-0-2" />
              </div>
              <div className="signin-0-3-1">
                <div className="signin-0-3-1-0" />
                <div className="signin-rectangle_11">
                  <Input
                    icon={<Icon name="mail" size="big" />}
                    className="signin-0-3-1-1-0"
                    type="text"
                    placeholder="Email"
                    value={this.state.username}
                    onChange={this.handleUserChange}
                    iconPosition="left"
                    style={{ color: "black" }}
                  />
                </div>
                <div className="signin-0-3-1-2" />
              </div>
              <div className="signin-0-3-2">
                <div className="signin-0-3-2-0" />
                <div className="signin-rectangle_11-1">
                  <Input
                    icon={<Icon name="key" size="big" />}
                    className="signin-0-3-1-1-0"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePassChange}
                    iconPosition="left"
                    style={{ color: "black" }}
                  />
                </div>
                <div className="signin-0-3-2-2" />
              </div>
              <div className="signin-0-3-3">
                <div className="signin-0-3-3-0" />
                <Button type="submit" className="signin-rectangle_12">
                  <div className="signin-0-3-3-1-0">
                    {/* <Button type='submit' >Submit</Button> */}
                    {/* <input type="submit" value="Log In" data-test="submit" /> */}
                    <div className="signin-sign_in_-5">Sign in</div>
                  </div>
                </Button>
                <div className="signin-0-3-3-2" />
              </div>
              <div className="signin-0-3-4" />
            </form>
          </div>
          <div className="signin-0-4" />
        </div>
      </div>
    );
  }
}
