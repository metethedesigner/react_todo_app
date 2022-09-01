import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [joblist, setJoblist] = useState([]);

  return (
    <>
      <ToastContainer autoClose={1800} />
      <TodoList joblist={joblist} setJoblist={setJoblist} />;
    </>
  );
}

export default App;
