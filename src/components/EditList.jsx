import { toast } from "react-toastify";

const EditList = ({ joblist, setJoblist }) => {
  const removeAll = (index) => {
    const newList = joblist.filter((job) => job === index);

    setJoblist(newList);
    toast.success("All Todos Deleted");
  };

  return (
    <div className="edit-list">
      <div className="todo-count">
        <p>Todos: {joblist.length}</p>
      </div>
      <div>
        <button className="delete-btn" onClick={removeAll}>
          Delete All
        </button>
      </div>
    </div>
  );
};

export default EditList;
