const students = [
  {
    id: 1,
    name: "Gojo",
    age: 18,
    favoriteSubject: "science",
  },
  {
    id: 2,
    name: "Geto",
    age: 19,
    favoriteSubject: "math",
  },
  {
    id: 3,
    name: "Nanami",
    age: 19,
    favoriteSubject: "science",
  },
];

function studentName() {
  let result = students.map((student) => student.name);
  console.log(result);
}

studentName();
