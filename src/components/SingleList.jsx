import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";

const SingleList = ({ joblist, setJoblist }) => {
  const handleRemove = (index) => {
    const newList = joblist.filter((val, i) => i !== index);

    setJoblist(newList);
    toast.success("Todo Deleted");
  };

  const todoCompleted = (index) => {
    const updateJoblist = [...joblist].map((job, i) => {
      if (i === index) {
        return { ...job, isCompleted: !job.isCompleted };
      }
      return job;
    });

    setJoblist(updateJoblist);
  };

  return (
    <>
      {joblist.map((val, index) => (
        <div
          className={val.isCompleted ? "single-job completed" : "single-job"}
          key={index}
        >
          <input
            type="checkbox"
            className="todo-checkbox"
            onChange={() => todoCompleted(index)}
          />
          <div className="value"> {val.name} </div>
          <div className="delete-button">
            <button
              className="deleteJob-btn"
              onClick={() => handleRemove(index)}
            >
              <TiDeleteOutline />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleList;
