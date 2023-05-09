import React, { useState } from "react";
import { BsTrash3 } from "react-icons/bs";

const Item = (props) => {
  const [done, setDone] = useState(false);
  return (
    <div className="p-3 border-b w-full">
      <div className="flex justify-between items-center">
        <div
          onClick={() => setDone(!done)}
          className={`${
            done === true ? "line-through" : ""
          } select-none cursor-pointer `}
        >
          <span className="pr-2 text-[12px] text-gray-500">{props.time} </span>
          <span className="text-[18px]">{props.item}</span>
        </div>
        <div
          onClick={() => props.removehandler(props.id)}
          //   onClick={() => setDone(!done)}
          className={`${
            done === true ? "line-through" : ""
          } text-[20px] cursor-pointer`}
        >
          <BsTrash3 className="text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Item;
