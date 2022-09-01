import React, { useState } from "react";
import SingleList from "./SingleList";
import { BsPlus } from "react-icons/bs";
import EditList from "./EditList";
import { toast } from "react-toastify";

const TodoList = ({ joblist, setJoblist }) => {
  const [value, setValue] = useState("");

  const handleButton = () => {
    if (value === "") {
      toast.error("Write something in the input.");
    } else if (value !== "") {
      setJoblist([...joblist, { name: value, isCompleted: false }]);
      toast.success([value] + " - Added");
    }

    setValue("");
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-container">
        <h1>Todo App</h1>
        <div className="input-area">
          <input
            placeholder="Enter your todo..."
            value={value}
            type="text"
            onChange={handleInput}
          />
          <button type="button" onClick={handleButton}>
            <BsPlus size={26} />
          </button>
        </div>
      </div>
      <div className="do-list">
        <SingleList joblist={joblist} setJoblist={setJoblist} />
      </div>

      <div>
        <EditList joblist={joblist} setJoblist={setJoblist} />
      </div>
    </div>
  );
};

export default TodoList;
