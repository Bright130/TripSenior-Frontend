// Generated by https://pagedraw.io/pages/15083
import React from 'react';
import './signup.css';
import { Icon, Input, Button, Dropdown } from "semantic-ui-react";
import {DateInput} from 'semantic-ui-calendar-react';

const countryOptions = [
      {
        text: 'Malaysia',
        value: 'Malaysia',
      },
      {
        text: 'Germany',
        value: 'Germany',
      }
    ]

export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
          username: "",
          nationality: "",
          date: "",
          password: "",
          confirm_pass:"",
          error: ""
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleNationChange = this.handleNationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() {
        this.setState({ error: "" });
      }
     
      handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
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
          .then(data =>
            localStorage.setItem("token", JSON.stringify(data["access_token"]))
          ) // JSON-string from `response.json()` call
    
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
                                <Input icon={<Icon name='mail' size='big'/>} className="signup-0-1-0-0-2-1-0" type="text"
                                    placeholder="Email"
                                    value={this.state.username}
                                    onChange={this.handleUserChange}
                                    iconPosition='left'
                                    style={{ color: "black" }}/>
                              </div>
                              <div className="signup-0-1-0-0-2-2" /> 
                          </div>
                          
                          <div className="signup-0-1-0-0-2">
                              <div className="signup-0-1-0-0-2-0" /> 
                              <div className="signup-rectangle_11">
                                <Dropdown icon={<Icon name='address card outline' size='large'/>} className="signup-0-1-0-0-2-1-0 icon" floating labeled button options={countryOptions}
                                    placeholder="Nationality"
                                    name="nationality"
                                    value={this.state.nationality}
                                    onChange={this.handleChange}
                                    iconPosition='left'
                                    style={{ color: "black" }}/>
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
                                    icon={<Icon name='birthday' size='big'/>} 
                                    onChange={this.handleChange}
                                    />
                              </div>
                              <div className="signup-0-1-0-0-2-2" /> 
                          </div>
                          <div className="signup-0-1-0-0-2">
                              <div className="signup-0-1-0-0-2-0" /> 
                              <div className="signup-rectangle_11">
                                <Input icon={<Icon name='key' size='big'/>} className="signup-0-1-0-0-2-1-0" type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handlePassChange}
                                    iconPosition='left'
                                    style={{ color: "black" }}/>
                              </div>
                              <div className="signup-0-1-0-0-2-2" /> 
                          </div>
                          <div className="signup-0-1-0-0-2">
                              <div className="signup-0-1-0-0-2-0" /> 
                              <div className="signup-rectangle_11">
                                <Input icon={<Icon name='key' size='big'/>} className="signup-0-1-0-0-2-1-0" type="password"
                                    placeholder="Confirm Password"
                                    name="confirm_pass"
                                    value={this.state.confirm_pass}
                                    onChange={this.handleChange}
                                    iconPosition='left'
                                    style={{ color: "black" }}/>
                              </div>
                              <div className="signup-0-1-0-0-2-2" /> 
                          </div>
                          <div className="signup-0-1-0-0-7">
                              <div className="signup-0-1-0-0-7-0" />
                              <Button type="submit" className="signin-rectangle_12">
                                <div className="signup-0-1-0-0-7-1-0">
                                    {/* <Button type='submit' >Submit</Button> */}
                                    {/* <input type="submit" value="Log In" data-test="submit" /> */}
                                    <div className="signup-sign_up_-1">Sign in</div>
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
};
