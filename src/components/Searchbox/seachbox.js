import React from "react";

function Searchbox({handleSearch}){
    return <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <input type="text" name="search" placeholder="Search" onChange={handleSearch}></input>
            </div>
        </div>
    </div>
    </>
}


export default Searchbox