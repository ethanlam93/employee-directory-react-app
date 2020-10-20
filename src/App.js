import React from 'react';
import Heading from "./components/Heading/heading";
import Searchbox from "./components/Searchbox/seachbox";
import EmployeeTable from "./components/EmployeeTable/employeeTable"

function App() {
  return (
    <>
    <Heading />
    <Searchbox />
    <EmployeeTable />
    </>
  );
}

export default App;
