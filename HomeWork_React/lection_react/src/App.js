import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";

import React from "react";
import Students from "./components/Students";
function App() {
  
  const studentsList = [
    {
      name: 'Andriy',
      age: 18,
      tasks: 12
    },
    {
      name: 'Kolya',
      age: 14,
      tasks: 14
    },
    {
      name: 'Yaroslav',
      age: 40,
      tasks: 10
    }
  ]
  
  return (
    <>
      <Header />
      <hr/>
      <Body />
        {studentsList.map((student, index) => <Students key={index} {...student}/>)}
      <hr/>
    </>
  );
}

export default App;
