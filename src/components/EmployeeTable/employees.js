import React from "react";
import moment from "moment"

function EmployeeRow({employee}) {
    return <>
        <tr>
            <td><img src={ employee.picture.thumbnail}/></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{moment(employee.dob.date).format("MM-DD-YYYY")}</td>
        </tr>
    </>
}


export default EmployeeRow