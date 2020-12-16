import React, { useEffect, useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Inputfield from './components/Inputfield';

const App = () => {

  // States
  const [inputdata, setInputdata] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredstate, setFilteredstate] = useState([]);

  // Effects
  useEffect(() => {
    filterHandler();
  },
    [status, todo]
  );
  useEffect(()=>{
    getlocaltodos();
  }, []);
  useEffect(()=>{
    savetodos();
  }, [todo]);

  // functions
  const filterHandler = (e) => {
    switch (status) {
      case "completed": setFilteredstate(todo.filter(el => el.completed));
        break;
      case "notcompleted": setFilteredstate(todo.filter(el => !el.completed));
        break;
      default: setFilteredstate(todo);
    }
    console.log(filteredstate);
  }

  const savetodos=()=>{
    localStorage.setItem("todos", JSON.stringify(todo));
  }

  const getlocaltodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem("todos", ([]));
    }else{
      const localtodos = JSON.parse(localStorage.getItem("todos"));
      setTodo(localtodos);
    }
  };

  return (
    <div className='App'>
      <h1 className='heading'>ToDo App</h1>
      <Inputfield setInputdata={setInputdata} inputdata={inputdata} setTodo={setTodo} todo={todo} setStatus={setStatus} status={status} />
      <Todos todo={todo} setTodo={setTodo} filteredstate={filteredstate} />
    </div>
  );
}

export default App;
