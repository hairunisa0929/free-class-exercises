function Greeting(props) {
    return (
      <div>
        Hello Students
        
        {/* Tampilkan nama-nama student yang dikirimkan dari parent dalam sebuah list */}
        <ul>
          
        </ul>
      </div>
    );
  }
  
  export default Greeting;

//   contoh
// {props.students.map((student, index) => (
//     <li key={"student" + index}>{student}</li>
//   ))}
  