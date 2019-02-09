import React, { Component } from "react";
import "../startpanel.css";
import {
  Checkbox,
  Button,
  Popup,
  Grid,
  Form,
  Radio,
  GridColumn
} from "semantic-ui-react";

export default class StylePop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: "",
      Historic: false,
      Sight: false,
      Healthy: false,
      Sea: false,
      Religion: false,
      Entertainment: false,
      Shopping: false,
      Event: false,
      Mountain: false,
      Military: false,
      Park: false,
      Transportation: false,
      Farm: false,
      Zoo: false,
      Educational: false,
      Wildlife: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.styles !== this.state) {
      this.props.getStyle(this.state);
    }
  }

  handleChange = (e, { value }) => {
    console.log(value);
    this.setState({
      speed: value
    });
  };
  handleCheck = (e, { checked, label }) => {
    console.log(checked);
    this.setState({
      [label]: checked
    });
  };

  render() {
    return (
      <Popup trigger={<Button>Styles</Button>} flowing hoverable>
        <Form>
          <Form.Group grouped>
            <label>Travelling Speed</label>
            <Grid columns="three" divided>
              <Grid.Row>
                <Grid.Column>
                  <Radio
                    label="Fast"
                    name="radioGroup"
                    value="Fast"
                    checked={this.state.speed === "Fast"}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Radio
                    label="Moderate"
                    name="radioGroup"
                    value="Moderate"
                    checked={this.state.speed === "Moderate"}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Radio
                    label="Slow"
                    name="radioGroup"
                    value="Slow"
                    checked={this.state.speed === "Slow"}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Group>
          <Form.Group grouped>
            <label>Styles</label>
            <Grid columns="three" divided>
              <Grid.Row>
                <Grid.Column>
                  <Checkbox
                    label="Historic"
                    checked={this.state.Historic}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Sight"
                    checked={this.state.Sight}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Healthy"
                    checked={this.state.Healthy}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Sea"
                    checked={this.state.Sea}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Religion"
                    checked={this.state.Religion}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Entertainment"
                    checked={this.state.Entertainment}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Shopping"
                    checked={this.state.Shopping}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Event"
                    checked={this.state.Event}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Mountain"
                    checked={this.state.Mountain}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Military"
                    checked={this.state.Military}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Park"
                    checked={this.state.Park}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Transportation"
                    checked={this.state.Transportation}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Farm"
                    checked={this.state.Farm}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Zoo"
                    checked={this.state.Zoo}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Educational"
                    checked={this.state.Educational}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Checkbox
                    label="Wildlife"
                    checked={this.state.Wildlife}
                    onChange={this.handleCheck}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Group>
        </Form>
      </Popup>
    );
  }
}
