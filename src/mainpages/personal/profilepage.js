import React from "react";
import "./profilepage.css";
import { Icon, Card, Image} from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { loadAPI } from "../home/components/util";
import Header from "../utility/header"

function getData(url = ``, data = {}) {
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

export default class Profilepage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        country: "",
        birthday: "",
        email: "",
        tripAmount: "",
      };
    }

    componentDidMount() {
      let info = {
        accesstoken:
          localStorage.getItem("token") != null
            ? localStorage
                .getItem("token")
                .slice(1, localStorage.getItem("token").length - 1)
            : null,
        id: this.props.match.params.id
      };
      console.log(info);
      getData("http://localhost:5000/getProfile", info).then(plan => {
        console.log(plan);
        this.setState({ 
          name: plan["name"],
          birthday: plan["birthday"],
          email : plan["email"],
          tripAmount: plan["tripAmount"],
          country: plan["nationality"]
         });

      });
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
        <div className="rowC">
          <div className="profile-detail">
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Card.Header>Joined in</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='map' />
                    Trip Created : {this.state.tripAmount}
                  </a>
                </Card.Content>
              </Card>
          </div>
          <div  className="profile-detail">
            <div className="tripname-0 detail-bar">
              <div>
                <Icon circular inverted color='teal' fitted name='user' size='large'/>
              </div>
              <div className="tripname-tripname-10">Name:         {this.state.name}</div>
            </div>
            <div className="tripname-0 detail-bar">
              <div>
                <Icon circular inverted color='teal' fitted name='address card' size='large'/>
              </div>
              <div className="tripname-tripname-10">Email:        {this.state.email}</div>
            </div>
            <div className="tripname-0 detail-bar">
              <div>
                <Icon circular inverted color='teal' fitted name='flag' size='large'/>
              </div>
              <div className="tripname-tripname-10">Home Country: {this.state.country}</div>
            </div>
            <div className="tripname-0 detail-bar">
              <div>
                <Icon circular inverted color='teal' fitted name='calendar alternate outline' size='large'/>
              </div>
              <div className="tripname-tripname-10">Birthday:     {this.state.birthday}</div>
            </div>
            {/* <div className="tripname-0 detail-bar">
              <div>
                <Icon circular inverted color='teal' fitted name='key' size='large'/>
              </div>
              <div className="tripname-tripname-10">Password</div>
            </div>
            <div className="tripname-0 detail-bar">
              <div>
                <Icon circular inverted color='teal' fitted name='key' size='large'/>
              </div>
              <div className="tripname-tripname-10">Confirm Password</div>
            </div> */}
          </div>
        </div>
      </div>
    
    );
  }
}
