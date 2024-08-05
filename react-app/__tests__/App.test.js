import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './../src/App';
import StudentList from "./../src/components/StudentList";

it("Render list", () => {
  const students = ["James", "Mortimer", "Beaufort"];
  
  // Render the StudentList component
  render(<StudentList students={students} />);
  
  // Check if each item in the array is rendered
  students.forEach(student => {
    expect(screen.getByText(student)).toBeInTheDocument();
  });
});