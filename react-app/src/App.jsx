import React from "react";
import StudentList from "./components/StudentList";

function App() {  
  const students = ["Thomas", "Alva", "Edison"];

  return (
    <>
      <h1>Hello Students</h1>
      <StudentList />
    </>
  )
}

export default App;