import logo from './logo.svg';
import { useEffect, useState } from "react"
import './App.css';
import Todolist from './component/Todolist';
import Form from './component/Form';
import Task from './component/Task';

function App() {
  return (
    <div>
      <Todolist/>
      <Form/>
      <Task/>
    </div>
  );
}

export default App;


