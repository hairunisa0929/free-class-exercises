import Greeting from "./components/Greeting"

function App() {  
  const students = ["Thomas", "Alva", "Edison"];

  return (
    <>
      <h1>Greeting App</h1>
      <Greeting students={students} />
    </>
  )
}

export default App
