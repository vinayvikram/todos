import Todos from "./components/todos";
import UserDetail from "./components/userDetail";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedUserId, setUserId] = useState("0");

  const selectUser = (id) => {
    console.log(id);
    setUserId(id);
  };
  return (
    <div className="App">
      <Todos selectUser={selectUser} />
      <UserDetail id={selectedUserId} />
    </div>
  );
}

export default App;
