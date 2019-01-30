import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import "./timetable.css";
import moment from "moment";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.min.css";
import { contextMenu } from "react-contexify";

// import {
//     defaultHeaderLabelFormats,
//     defaultSubHeaderLabelFormats
//   } from 'react-calendar-timeline'

const MyMenu = ({ menuId, drawBox, p }) => (
  <Menu id={menuId}>
    <Item onClick={() => drawBox("blue")}>
      <span>🔷</span>
      Turn box to blue id={p}
    </Item>
    <Item onClick={() => drawBox("red")}>
      <span>🛑</span>
      Turn box to red
    </Item>
    <Item onClick={() => drawBox()}>
      <span>🔄</span>
      Reset
    </Item>
  </Menu>
);
const menuId = "awesome";

const groups = [
  { id: 1, title: "Day1" },
  { id: 2, title: "Day2" },
  { id: 3, title: "Day3" },
  { id: 4, title: "Day4" }
];

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

const dragSnap = 30 * 60 * 1000;

const timeSteps = {
  second: 1,
  minute: 30,
  hour: 1,
  day: 0,
  month: 0,
  year: 0
};

const items = [
  {
    id: 1,
    group: 1,
    title: "Songkhla lake",
    start_time: moment()
      .startOf("day")
      .add(7, "hour"),
    end_time: moment()
      .startOf("day")
      .add(9, "hour"),
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      "data-custom-attribute": "Random content",
      "aria-hidden": true,
      onDoubleClick: () => {
        console.log("You clicked double!");
      }
    }
  },
  {
    id: 2,
    group: 2,
    title: "Central Hatyai",
    start_time: moment().add(-0.5, "hour"),
    end_time: moment().add(0.5, "hour")
  },
  {
    id: 3,
    group: 1,
    title: "Kim yong market",
    start_time: moment()
      .startOf("day")
      .add(13, "hour"),
    end_time: moment()
      .startOf("day")
      .add(16, "hour")
  }
];

const defaultTimeStart = moment()
  .startOf("day")
  .add(5, "hour");
const defaultTimeEnd = moment().endOf("day");

export default class TimeTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      rightClickId: 0
    };
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  handleContextMenu(itemId, e) {
    // always prevent default behavior
    e.preventDefault();
    console.log("Right Click", itemId, e);
    this.setState(
      { rightClickId: itemId },
      contextMenu.show({
        id: menuId,
        event: e
      })
    );
  }

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start_time: dragTime,
              end_time: dragTime + (item.end_time - item.start_time),
              group: group.id
            })
          : item
      )
    });

    console.log("Moved", itemId);
  };

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state;

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start_time: edge === "left" ? time : item.start_time,
              end_time: edge === "left" ? item.end_time : time
            })
          : item
      )
    });

    console.log("Resized", itemId, time, edge);
  };

  render() {
    return (
      <div>
        <Timeline
          id="menu_id"
          groups={this.state.groups}
          items={this.state.items}
          timeSteps={timeSteps}
          dragSnap={dragSnap}
          sidebarContent={<p>Trip Days</p>}
          defaultTimeStart={moment().add(-12, "hour")}
          defaultTimeEnd={moment().add(12, "hour")}
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
        <MyMenu menuId={"awesome"} p={this.state.rightClickId} />
      </div>
    );
  }
}
