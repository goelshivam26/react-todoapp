import React, { useState } from "react";

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const applyFilter = () => {
    if (selectedFilter === "all") {
      setFilteredTodos(todos);
    } else if (selectedFilter === "dueDate") {
      setFilteredTodos(todos.filter((todo) => todo.dueDate !== ""));
    } else if (selectedFilter === "hasLabel") {
      setFilteredTodos(todos.filter((todo) => todo.labels.length > 0));
    }
    
  };

  return (
    <div className="todo-list">
      <h2>Task List</h2>
      <div className="filter-controls">
        <label htmlFor="filterSelect">Filter:</label>
        <select
          id="filterSelect"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="dueDate">Due Date</option>
          <option value="hasLabel">Has Label</option>
          
        </select>
        <button onClick={applyFilter}>Apply</button>
      </div>
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="task">
          <h3>{todo.title}</h3>
          
          <div className="task-buttons">
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
