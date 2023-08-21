import React, { useState } from "react";
import "../App.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { Link } from "react-router-dom";

export default function Home () {

    const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(true);

  const handleLogin = (userData) => {
    setUser({ ...userData, username: "user123" });
    setShowLogin(false);
    setShowSignUp(true);
  };

  const handleSignUp = (userData) => {
    setUser({ ...userData, username: "user123" });
    setShowSignUp(false);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLogin(true);
  };

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    status: "todo",
    subTasks: [],
  });

  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedTodos = todos.map((t) =>
        t.id === editId ? { ...t, ...todo } : t
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo({
        title: "",
        description: "",
        dueDate: "",
        priority: "low",
        status: "todo",
        subTasks: [],
      });
    } else {
      if (todo.title !== "") {
        setTodos([{ ...todo, id: `${todo.title}-${Date.now()}` }, ...todos]);
        setTodo({
          title: "",
          description: "",
          dueDate: "",
          priority: "low",
          status: "todo",
          subTasks: [],
        });
      }
    }
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo({
      title: editTodo.title,
      description: editTodo.description,
      dueDate: editTodo.dueDate,
      priority: editTodo.priority,
      status: editTodo.status,
      subTasks: editTodo.subTasks,
    });
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

    return (
        <>
        <div className="App">
            <div className="container">
                <header>
                <h1>Todo List App</h1>
                {user ? (
                    <div>
                    <p>Welcome, {user.name} {user.surname}!</p>
                    <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <>
                    <button onClick={() => setShowLogin(true)}>Login</button>
                    <Link to="/signup">
                         <button onClick={() => setShowSignUp(true)}>Sign Up</button>
                    </Link>
                    </>
                )}
                </header>

                {user ? (
                <>
                    <TodoForm
                    handleSubmit={handleSubmit}
                    todo={todo}
                    editId={editId}
                    setTodo={setTodo}
                    />

                    <TodoList
                    todos={todos}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    />
                </>
                ) : showLogin ? (
                <Login handleLogin={handleLogin} />
                ) : showSignUp ? (
                <SignUp handleSignUp={handleSignUp} />
                ) : null}
            </div>
        </div>
        </>
    )
}