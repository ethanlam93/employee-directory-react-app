import React from "react";

function TableHeading({handleSortByName, handleSortByEmail}){
    return <>
    <th>Image</th>
    <th><a href="#" onClick={handleSortByName}>Name</a></th>
    <th>Phone Number</th>
    <th><a href="#" onClick={handleSortByEmail}>Email</a></th>
    <th>DOB</th>
    </>
}


export default TableHeading