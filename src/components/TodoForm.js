import React, { useState } from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  const labelOptions = ["Personal", "Work", "Home", "Errands"]; // Add your label options here

  return (
    <div className="todo-form">
      <h2>{editId ? "Edit Task" : "Add New Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={'todo.title'}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={todo.dueDate}
            onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={todo.priority}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="labels">Labels:</label>
          <select
            id="labels"
            value={todo.labels}
            onChange={(e) => setTodo({ ...todo, labels: e.target.value })}
          >
            <option value="">Select a Label</option>
            {labelOptions.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">{editId ? "Save Changes" : "Add Task"}</button>
      </form>
    </div>
  );
};

export default TodoForm;
