import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  const [todos, setodos] = useState([]);

  const addtodo = (item) => {
    // console.log(item);
    setodos([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

  const removetodo = (id) => {
    // console.log(id);
    const newtodo = todos.filter((data1, index) => {
      if (index !== id) return true;
      else return false;
    });
    setodos(newtodo);
  };

  return (
    <div className="bg-sky-900 h-screen p-3">
      <div className="mx-auto max-w-[750px] min-h-[450px] shadow-xl bg-white mt-5 rounded">
        <h1 className="text-red-500 text-center text-[24px] font-bold pt-3">
          To-Do Application
        </h1>
        <Task handler={addtodo} />
        <TaskList data={todos} removehandler={removetodo} />
      </div>
    </div>
  );
}

export default App;
