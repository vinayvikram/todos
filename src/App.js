import Todos from "./components/todos";
import UserDetail from "./components/userDetail";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [appData, setAppData] = useState({
    todoData: {
      allTodoData: [],
      query: null,
    },
    userData: {},
  });

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    console.log("mounted");

    const fetchData = async () => {
      const res = await fetch(apiUrl);
      const fetchedData = await res.json();
      console.log(fetchedData);
      setAppData({
        todoData: {
          allTodoData: fetchedData,
          query: null,
        },
        userData: {},
      });
    };

    fetchData();
  }, []);

  const selectUser = (user_detail) => {
    setAppData({
      todoData: appData.todoData,
      userData: user_detail,
    });
  };

  const changeQuery = (query) => {
    setAppData({
      todoData: {
        allTodoData: appData.todoData.allTodoData,
        query: query,
      },
      userData: {},
    });
  };
  return (
    <div className="App">
      <Todos
        selectUser={selectUser}
        changeQuery={changeQuery}
        {...appData.todoData}
      />
      <UserDetail {...appData.userData} />
    </div>
  );
}

export default App;
