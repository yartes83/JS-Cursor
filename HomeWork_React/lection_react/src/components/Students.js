import React from "react";

const Students = ({name, age, tasks}) => {
    return(
        <>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Tasks: {tasks}</h3>
        </>
    )
}

export default Students;