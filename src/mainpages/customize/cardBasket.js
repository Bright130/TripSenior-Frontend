 
import React from "react";
import "./card_basket.css";
import moment from "moment";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import { contextMenu } from "react-contexify";
const menuId = "awesomee";
const MyMenu = ({ menuId, deleteItem, sendSchedule, openDetail }) => (
  <Menu id={menuId}>
    <Item onClick={() => openDetail(menuId.split("awesomee")[1])}>
      <span>📋</span>
      View detail
    </Item>

    <Item onClick={() => sendSchedule(menuId.split("awesomee")[1])}>
      <span>📅</span>
      Add to schedule
    </Item>
    <Item onClick={() => deleteItem(menuId.split("awesomee")[1])}>
      <span>❌</span>
      Delete it
    </Item>
  </Menu>
);

export default class CardBasket extends React.Component {
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
          className="card_basket-card_basket"
        >
          <div className="card_basket-0">
            <div
              className="card_basket-image_9"
              style={{
                backgroundImage: "url(" + this.props.place["img"] + ")"
              }}
            >
              <div className="card_basket-0-0-0">
                <div className="card_basket-wat_arun_-1">
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
