 
import React from "react";
import "./component_1.css";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import { contextMenu } from "react-contexify";
const menuId = "awesomeee";
const MyMenu = ({ menuId, deleteItem, sendSchedule, openDetail }) => (
  <Menu id={menuId}>
    <Item onClick={() => openDetail(menuId.split("awesomeee")[1])}>
      <span>📋</span>
      View detail
    </Item>
    <Item onClick={() => sendSchedule(menuId.split("awesomeee")[1])}>
      <span>📅</span>
      Add to schedule
    </Item>
    <Item onClick={() => deleteItem(menuId.split("awesomeee")[1])}>
      <span>❌</span>
      Delete it
    </Item>
  </Menu>
);
export default class Component_1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  handleContextMenu(e) {
    // always prevent default behavior
    e.preventDefault();
    // let temp = {};
    // // // console.log("Right Click", itemId, e);
    // // this.props.items.forEach(function(item, index) {
    // //   if (item["id"] == itemId) {
    // //     temp = index;
    // //   }
    // // });
    // console.log(temp);

    contextMenu.show({
      id: menuId + this.props.uid,
      event: e
    });
  }

  render() {
    return (
      <div>
        <div
          onContextMenu={this.handleContextMenu}
          onClick={this.handleContextMenu}
          className="component_1-component_1"
        >
          <div className="component_1-0">
            <div
              className="component_1-image_9"
              style={{
                backgroundImage: "url(" + this.props.place["img"] + ")"
              }}
            >
              <div className="component_1-0-0-0">
                <div className="component_1-wat_arun_-1">
                  {this.props.place["name"]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyMenu
          menuId={menuId + this.props.uid}
          deleteItem={this.props.deleteItem}
          sendSchedule={this.props.sendSchedule}
          openDetail={this.props.openDetail}
        />
      </div>
    );
  }
}
