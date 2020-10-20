import React from "react";
import TableHeading from "./heading";
import EmployeeRow from "./employees";

function EmployeeTable({employees}) {
    console.log(employees)
    return <>
        <div className="container text-center mt-4 ">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <TableHeading />
                            </tr>
                        </thead>
                        <tbody>
                                {employees.map((employee,key) => 
                                    <EmployeeRow key={key} employee={employee} />
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}


export default EmployeeTable