import React from 'react';
import Heading from "./components/Heading/heading";
import Searchbox from "./components/Searchbox/seachbox";
import EmployeeTable from "./components/EmployeeTable/employeeTable"




class App extends React.Component {
  state = {
      employees : []
    };
  

  componentDidMount(){
    fetch("https://randomuser.me/api/?inc=name,email,picture,phone,dob&results=100")
    .then(res => res.json())
    .then( ({results}) => {
      this.setState({
       employees : results
      })
    })
  }

  render (){
    return(
    <>
    <Heading />
    <Searchbox />
    <EmployeeTable employees={this.state.employees} />
    </>
    )
  };
}

export default App;
