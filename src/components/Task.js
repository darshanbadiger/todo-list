import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Task = (props) => {
  const inputbox = useRef();
  return (
    <div>
      <div className="p-3 flex justify-between">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="w-[90%] p-3  focus:outline-blue-400 border rounded border-blue-600"
          ref={inputbox}
        ></input>
        <div
          className="cursor-pointer flex justify-center items-center text-[30px] text-white w-[50px] h-[50px] bg-blue-900 rounded-[50%]"
          onClick={() => {
            props.handler(inputbox.current.value);
            inputbox.current.value = "";
          }}
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Task;
