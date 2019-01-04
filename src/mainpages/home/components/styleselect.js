import React from 'react'
import '../startpanel.css';
import { Checkbox, Button, Popup, Grid, Form, Radio, GridColumn } from 'semantic-ui-react'

export default class StylePop extends React.Component {
    state = {
        speed : '',
        Adventure : false,
        Historical : false,
        Sea : false,
        Mountain : false,
        Waterfall : false,
        Shopping : false
      };
    handleChange = (e, { value }) => {
        console.log(value);
        this.setState({
          speed : value
        });
      };
    handleCheck =  (e, { checked,label }) => {
        console.log(checked);
        this.setState({
            [label] : checked
        });
      };

    render() {
    return (
    <Popup trigger={<Button>Styles</Button>} flowing hoverable>
        <Form >
            <Form.Group grouped>
                <label>Travelling Speed</label>
                <Grid columns='three' divided>
                <Grid.Row >
                    <Grid.Column>
                <Radio
                    label='Fast'
                    name='radioGroup'
                    value='Fast'
                    checked={this.state.speed === 'Fast'}
                    onChange={this.handleChange}
                />
                    </Grid.Column>
                    <Grid.Column>
                <Radio
                    label='Moderate'
                    name='radioGroup'
                    value='Moderate'
                    checked={this.state.speed === 'Moderate'}
                    onChange={this.handleChange}
                />
                    </Grid.Column>
                    <Grid.Column>
                <Radio
                    label='Slow'
                    name='radioGroup'
                    value='Slow'
                    checked={this.state.speed === 'Slow'}
                    onChange={this.handleChange}
                />
                    </Grid.Column>
                </Grid.Row >
                </Grid>
            </Form.Group>
            <Form.Group grouped>
            <label>Styles</label>
            <Grid columns='three' divided>
                <Grid.Row >
                    <Grid.Column>
                        <Checkbox 
                            label= 'Adventure'
                            checked={this.state.Adventure}
                            onChange={ this.handleCheck}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Checkbox 
                            label= 'Historical'
                            checked={this.state.Historical}
                            onChange={ this.handleCheck}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Checkbox 
                            label= 'Sea'
                            checked={this.state.Sea}
                            onChange={ this.handleCheck}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Checkbox 
                            label= 'Mountain'
                            checked={this.state.Mountain}
                            onChange={ this.handleCheck}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Checkbox 
                            label= 'Waterfall'
                            checked={this.state.Waterfall}
                            onChange={ this.handleCheck}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Checkbox 
                            label= 'Shopping'
                            checked={this.state.Shopping}
                            onChange={ this.handleCheck}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Form.Group>
    </Form>
  </Popup>
)
}
}
