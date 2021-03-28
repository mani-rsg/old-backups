import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form'
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [select, setSelect] = useState("All");
  const [filtered, setFilter] = useState([]);
  useEffect(() => {

    switch (select) {

      case "Completed":
        console.log("Completed")
        setFilter(todos.filter(todo => todo.completed === true))
        break;
      case "Incomplete":
        console.log("Incomplete")
        setFilter(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilter(todos);
    }

  }, [todos, select])

  return (
    <div className="todo-container">
      <Header heading="TODO List" />
      <Form
        inputText={inputValue}
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        select={select}
        setSelect={setSelect}
        filtered={filtered}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
