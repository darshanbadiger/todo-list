import React from "react";
import Item from "./Item";

const TaskList = (props) => {
  const items = props.data.map((singletask, index) => {
    return (
      <Item
        removehandler={props.removehandler}
        key={index}
        id={index}
        item={singletask.item}
        time={singletask.time}
      />
    );
  });
  return (
    <div className="p-3">
      <h1 className="text-violet-900 text-center text-[20px] font-bold">
        Pending Tasks
      </h1>
      {items}
    </div>
  );
};

export default TaskList;
