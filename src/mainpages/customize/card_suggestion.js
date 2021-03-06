 

import Styletag2 from "./components/styletag2";
import "./suggestcustom.css";
import React, { Component } from "react";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import { contextMenu } from "react-contexify";
import { Rating } from "semantic-ui-react";
const menuId = "awesomeeee";
const MyMenu = ({ menuId, deleteItem, sendSchedule, openDetail }) => (
  <Menu id={menuId}>
    <Item onClick={() => openDetail(menuId.split("awesomeeee")[1])}>
      <span>📋</span>
      View detail
    </Item>
    <Item onClick={() => sendSchedule(menuId.split("awesomeeee")[1])}>
      <span>📅</span>
      Add to schedule
    </Item>
    <Item onClick={() => deleteItem(menuId.split("awesomeeee")[1])}>
      <span>❌</span>
      Delete it
    </Item>
  </Menu>
);

export default class Card_suggestion extends Component {
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
          className="customize-5-0-0-0-1"
        >
          <div className="customize-5-0-0-0-1-0">
            <div className="customize-suggestcustom_instance_2">
              <div className="pd-onactive-parent pd-onhover-parent suggestcustom">
                {"default" === "default" ? (
                  <div className="suggestcustom-default-3">
                    <div className="suggestcustom-0-0-0">
                      <div
                        className="suggestcustom-image_6"
                        style={{
                          backgroundImage:
                            "url('" + this.props.name["img_main"] + "')"
                        }}
                      >
                        <div className="suggestcustom-0-0-0-0-0">
                          <div className="suggestcustom-styletag2">
                            <Styletag2 text={this.props.name["style"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="suggestcustom-0-0-1">
                      <div className="suggestcustom-place-5">
                        {this.props.name["place"]}
                      </div>
                      <div className="suggestcustom-0-0-1-1">
                        <div className="suggestcustom-0-0-1-1-0">
                          <div className="suggestcustom-province-8">
                            {this.props.name["province"]}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="suggestcustom-0-0-2">
                      <Rating
                        className="suggestcustom-rating-8"
                        defaultRating={this.props.name["avg_rank"]}
                        maxRating={5}
                        disabled
                        size="huge"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="pd-onactive suggestcustom-_active-7">
                  <div className="suggestcustom-1-0">
                    <div
                      className="suggestcustom-image_6-7"
                      style={{
                        backgroundImage:
                          "url('" + this.props.name["img_main"] + "')"
                      }}
                    >
                      <div className="suggestcustom-1-0-0-0">
                        <div className="suggestcustom-styletag2_">
                          <Styletag2 text={this.props.name["style"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suggestcustom-1-1">
                    <div className="suggestcustom-place-7">
                      {this.props.name["place"]}
                    </div>
                    <div className="suggestcustom-1-1-1">
                      <div className="suggestcustom-1-1-1-0">
                        <div className="suggestcustom-province-7">
                          {this.props.name["province"]}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suggestcustom-0-0-2">
                    <Rating
                      className="suggestcustom-rating-8"
                      defaultRating={this.props.name["avg_rank"]}
                      maxRating={5}
                      disabled
                      size="huge"
                    />
                  </div>
                </div>
                <div className="pd-onhover suggestcustom-_hover-8">
                  <div className="suggestcustom-2-0">
                    <div className="suggestcustom-border-6">
                      <div className="suggestcustom-2-0-0-0">
                        <div
                          className="suggestcustom-image_6-2"
                          style={{
                            backgroundImage:
                              "url('" + this.props.name["img_main"] + "')"
                          }}
                        >
                          <div className="suggestcustom-2-0-0-0-0-0">
                            <div className="suggestcustom-styletag2_i">
                              <Styletag2 text={this.props.name["style"]} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="suggestcustom-2-0-0-1">
                        <div className="suggestcustom-place-9">
                          {this.props.name["place"]}
                        </div>
                        <div className="suggestcustom-2-0-0-1-1">
                          <div className="suggestcustom-2-0-0-1-1-0">
                            <div className="suggestcustom-province-2">
                              {this.props.name["province"]}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="suggestcustom-0-0-2">
                        <Rating
                          className="suggestcustom-rating-8"
                          defaultRating={this.props.name["avg_rank"]}
                          maxRating={5}
                          disabled
                          size="huge"
                        />
                      </div>
                    </div>
                  </div>
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
