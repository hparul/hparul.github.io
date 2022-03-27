//import logo from './logo.svg';
import React, { useState } from "react";
import SubmitForm from "./submitform";
import ToDoItem from "./todoItem";
import Border from "./border";
import InitialData from "./initialData";
import "./App.css";

function App() {
  const [shifts, setShifts] = useState([]);
  console.log(shifts);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todolist</h1>
        <SubmitForm setShifts={setShifts} shifts={shifts} />
        <InitialData setShifts={setShifts} shifts={shifts} />
        {shifts.map((shift) => {
          return (
            <div>
              <Border>
                <ToDoItem setShifts={setShifts} shift={shift} />
              </Border>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
