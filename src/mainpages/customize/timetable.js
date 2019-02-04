import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import "./timetable.css";
import moment from "moment";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import { contextMenu } from "react-contexify";
import { loadAPI } from "./util";

// import {
//     defaultHeaderLabelFormats,
//     defaultSubHeaderLabelFormats
//   } from 'react-calendar-timeline'

const MyMenu = ({ menuId, p, deleteItem, sendBasket, openDetail }) => (
  <Menu id={menuId} a={"ss"}>
    <Item onClick={() => openDetail(menuId)}>
      <span>📋</span>
      View detail
    </Item>

    <Item onClick={() => sendBasket(menuId)}>
      <span>🗑️</span>
      Move to basket
    </Item>
    <Item onClick={() => deleteItem(menuId)}>
      <span>❌</span>
      Delete it
    </Item>
  </Menu>
);
const menuId = "awesome";

const defaultHeaderLabelFormats = {
  yearShort: "[Assign Time Slot]",
  yearLong: "[Assign Time Slot]",
  monthShort: "[Assign Time Slot]",
  monthMedium: "[Assign Time Slot]",
  monthMediumLong: "[Assign Time Slot]",
  monthLong: "[Assign Time Slot]",
  dayShort: "[Assign Time Slot]",
  dayLong: "[Assign Time Slot]",
  hourShort: "[Assign Time Slot]",
  hourMedium: "[Assign Time Slot]",
  hourMediumLong: "[Assign Time Slot]",
  hourLong: "[Assign Time Slot]",
  time: "[Assign Time Slot]"
};

const defaultSubHeaderLabelFormats = {
  hourShort: "HH:00",
  hourLong: "HH:00"
};

const dragSnap = 5 * 60 * 1000;

const timeSteps = {
  second: 1,
  minute: 5,
  hour: 1,
  day: 0,
  month: 0,
  year: 0
};

const defaultTimeStart = moment()
  .add(-7, "hour")
  .startOf("day")
  .add(5, "hour");
const defaultTimeEnd = moment()
  .add(-7, "hour")
  .endOf("day");

export default class TimeTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultTimeStart,
      defaultTimeEnd,
      rightClickId: 0,
      needUpdate: 0
    };
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sendBasket = this.sendBasket.bind(this);
    this.openDetail = this.openDetail.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
  }

  handleContextMenu(itemId, e) {
    // always prevent default behavior
    e.preventDefault();
    let temp = {};
    // console.log("Right Click", itemId, e);
    this.props.items.forEach(function(item, index) {
      if (item["id"] == itemId) {
        temp = index;
      }
    });
    console.log(temp);

    this.setState(
      { rightClickId: temp },
      contextMenu.show({
        id: menuId,
        event: e
      })
    );
  }

  deleteItem() {
    let arr = this.props.items;
    let a = arr.splice(0, this.state.rightClickId);
    let b = arr.splice(1, arr.length);
    this.props.getTrip(a.concat(b));
  }

  sendBasket() {
    let arr = this.props.items;
    let a = arr.splice(0, this.state.rightClickId);
    let b = arr.splice(1, arr.length);
    this.props.getTrip(a.concat(b));

    this.props.appendBasket([arr[0].title]);
  }

  openDetail() {
    loadAPI(
      " http://127.0.0.1:5000/placename?place_id=" +
        this.props.items[this.state.rightClickId]["title"]
    ).then(result => {
      console.log(
        this.props.items[this.state.rightClickId]["title"],
        result["place_id"]
      );
      window.open("http://127.0.0.1:8081/place/" + result["place_id"]);
    });
  }

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    // const { groups } = this.state;
    const { items } = this.props;

    const group = this.props.groups[newGroupOrder];
    let temp = items.map(item =>
      item.id === itemId
        ? Object.assign({}, item, {
            start_time: dragTime,
            end_time: dragTime + (item.end_time - item.start_time),
            group: group.id
          })
        : item
    );
    console.log(temp);
    this.props.getTrip(temp);

    console.log("Moved", itemId);
  };

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.props;
    let temp = items.map(item =>
      item.id === itemId
        ? Object.assign({}, item, {
            start_time: edge === "left" ? time : item.start_time,
            end_time: edge === "left" ? item.end_time : time
          })
        : item
    );
    this.props.getTrip(temp);

    console.log("Resized", itemId, time, edge);
  };

  render() {
    return (
      <div>
        <Timeline
          id="menu_id"
          groups={this.props.groups}
          items={this.props.items}
          timeSteps={timeSteps}
          dragSnap={dragSnap}
          sidebarContent={<p>Trip Days</p>}
          minZoom={60 * 60 * 1000 * 24}
          maxZoom={60 * 60 * 1000 * 24}
          defaultTimeStart={this.state.defaultTimeStart}
          defaultTimeEnd={this.state.defaultTimeEnd}
          visibleTimeStart={this.state.defaultTimeStart}
          visibleTimeEnd={this.state.defaultTimeEnd}
          headerLabelFormats={defaultHeaderLabelFormats}
          subHeaderLabelFormats={defaultSubHeaderLabelFormats}
          canResize={"both"}
          canMove={true}
          canChangeGroup={true}
          lineHeight={50}
          itemHeightRatio={0.9}
          onItemMove={this.handleItemMove}
          onItemResize={this.handleItemResize}
          onItemContextMenu={this.handleContextMenu}
          stackItems={true}
        />
        <MyMenu
          menuId={"awesome"}
          id={this.state.rightClickId}
          deleteItem={this.deleteItem}
          sendBasket={this.sendBasket}
          openDetail={this.openDetail}
        />
      </div>
    );
  }
}
