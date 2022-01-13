import { Paper, Stack } from "@mui/material";
import { useState, useEffect } from "react";

const UserDetail = ({ todo_id, todo_title, id = "" }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

    const fetchData = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setUser(data);
    };

    fetchData();
  }, [todo_id, todo_title, id]);

  return (
    <div className="user-detail">
      <h1>User Detail</h1>
      <Paper elevation={5} sx={{ padding: "20px", backgroundColor: "#FDFCDC" }}>
        <Stack direction="column" spacing={5}>
          <Stack direction="row">
            <span>ToDo ID</span>
            <div>{todo_id}</div>
          </Stack>
          <Stack direction="row">
            <span>ToDo Title</span>
            <div>{todo_title}</div>
          </Stack>
          <Stack direction="row">
            <span>User ID </span>
            <div>{user.id}</div>
          </Stack>
          <Stack direction="row">
            <span>Name</span>
            <div>{user.name}</div>
          </Stack>
          <Stack direction="row">
            <span>Email</span>
            <div>{user.email}</div>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default UserDetail;
