import { useLoaderData } from "react-router-dom";
import DisplayAssignment from "../Assignments/DisplayAssignment";

const ManageAssignment = () => {
    const assignments = useLoaderData()
    console.log(assignments)
    return (
        <div>
           <DisplayAssignment assignments={assignments}></DisplayAssignment> 
        </div>
    );
};

export default ManageAssignment;