import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { useState, useEffect } from "react";

const Todos = ({ selectUser }) => {
  const [todoData, setData] = useState([
    { id: "1", Title: "title", Status: "compoleted", Action: "View" },
  ]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    const fetchData = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  console.log(todoData);

  return (
    <div className="todos">
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>Todo ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableHead>
          <TableBody>
            {todoData.map((row) => (
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  {row.completed ? "Complete" : "Incomplete"}
                </TableCell>
                <TableCell
                  onClick={() => {
                    selectUser(row.userId);
                  }}
                >
                  <button>View User</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Todos;
