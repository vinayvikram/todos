import { Paper } from "@mui/material";
import { useState, useEffect } from "react";

const UserDetail = ({ id }) => {
  const [user, setUser] = useState({
    id: "1",
    name: "Name",
    email: "email@email.com",
  });

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

    const fetchData = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setUser(data);
    };

    fetchData();
  }, [id]);
  return (
    <div className="user-detail">
      <Paper elevation={5}>
        <h5>UserId : {user.id}</h5>
        <h5>Name : {user.name}</h5>
        <h5>Email : {user.email}</h5>
      </Paper>
    </div>
  );
};

export default UserDetail;
