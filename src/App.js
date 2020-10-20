import React from 'react';
import Heading from "./components/Heading/heading";
import Searchbox from "./components/Searchbox/seachbox";
import EmployeeTable from "./components/EmployeeTable/employeeTable"
import moment from "moment"




class App extends React.Component {
  state = {
    employees: [],
    search: ""
  };


  componentDidMount() {
    fetch("https://randomuser.me/api/?inc=name,email,picture,phone,dob,id&results=100")
      .then(res => res.json())
      .then(({ results }) => {
        this.setState({
          employees: results
        })
      })
  }

  handleSearch = ({ target }) => {
    this.setState({
      search: target.value
    })
  }
  render() {
    const { employees, search } = this.state;
    const filteredEmployees = employees.filter(employee =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
      || employee.name.last.toLowerCase().includes(search.toLowerCase())
      || employee.phone.includes(search.toLowerCase())
      || employee.email.toLowerCase().includes(search.toLowerCase())
      || moment(employee.dob.date).format("MM-DD-YYYY").includes(search.toLowerCase())


    )
    return (
      <>
        <Heading />
        <Searchbox handleSearch={this.handleSearch} />
        <EmployeeTable employees={filteredEmployees} />
      </>
    )
  };
}

export default App;
