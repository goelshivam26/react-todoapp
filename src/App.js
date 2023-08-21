import React from "react";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoMain from "./components/TodoMain";

export default function App () {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/todo" element={<TodoList/>}/>
        <Route path="/todoform" element={<TodoForm/>}/>
        <Route path="/todomain" element={<TodoMain/>}/>
      </Routes>
    </Router>
    </>
  )
}