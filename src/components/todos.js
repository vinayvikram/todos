import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";

const Todos = ({ allTodoData, query, changeQuery, selectUser }) => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const filter = (query) => {
      let filteredData = [];

      for (let todo of allTodoData) {
        if (String(todo.id).includes(query)) {
          filteredData.push(todo);
        } else if (todo.title.includes(query)) {
          filteredData.push(todo);
        } else {
          if (todo.completed && "Complete".includes(query)) {
            filteredData.push(todo);
          } else if (!todo.completed && "Incomplete".includes(query)) {
            filteredData.push(todo);
          }
        }
      }

      return filteredData;
    };

    if (query) {
      setTodoData(filter(query));
    } else {
      setTodoData(allTodoData);
    }
  }, [allTodoData, query]);

  const toggleSort = (e) => {
    let reversedData = todoData.slice().reverse();
    setTodoData(reversedData);
    if (e.target.innerText === "↓") {
      e.target.innerText = "↑";
    } else {
      e.target.innerText = "↓";
    }
  };

  return (
    <div className="todos">
      <h1 style={{ display: "inline-block" }}>Todos</h1>
      <TextField
        type="search"
        variant="outlined"
        className="inputRounded"
        placeholder="search"
        onChange={(event) => {
          changeQuery(event.target.value);
        }}
        sx={{
          float: "right",
          width: "40%",
        }}
      ></TextField>
      <TableContainer sx={{ maxHeight: "80%", border: "1px solid black" }}>
        <Table stickyHeader>
          <TableHead>
            <TableCell sx={{ width: "80px", fontWeight: "bold" }}>
              ToDo ID
              <IconButton
                onClick={toggleSort}
                sx={{
                  fontSize: "30px",
                  float: "right",
                }}
                size="small"
              >
                ↓
              </IconButton>
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
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
                    selectUser({
                      todo_id: row.id,
                      todo_title: row.title,
                      id: row.userId,
                    });
                  }}
                  sx={{
                    width: "100px",
                  }}
                >
                  <Button
                    sx={{
                      border: "2px solid black",
                      color: "black",
                    }}
                  >
                    View User
                  </Button>
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
