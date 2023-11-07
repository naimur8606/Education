import { useLoaderData } from "react-router-dom";
import Banner from "../Home/Banner";
import DisplayAssignment from "./DisplayAssignment";
import { useState } from "react";

const Assignments = () => {
    const allAssignments = useLoaderData()
    const [assignments, setAssignments] = useState(allAssignments)
    const showAssignment = e =>{
        e.preventDefault();
        const form = e.target;
        const searchKey = form.searchKey?.value;
        console.log(searchKey)
        if(searchKey !== 'All'){
            const filterAssignments = allAssignments?.filter(item => item?.level === searchKey)
            setAssignments(filterAssignments)
            console.log(filterAssignments, assignments)
        }else{
            setAssignments(allAssignments)
        }
    }
    
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto my-8'>
                <form onSubmit={showAssignment} className="flex items-center my-3">
                    <button className="py-2 px-7 bg-[#009fe2] text-white rounded-l-md">Search</button>
                    <select name="searchKey" required id="" className="border border-[#009fe2] py-2 px-3 rounded-r-lg">
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </form>
                <DisplayAssignment assignments={assignments}></DisplayAssignment>
            </div>

        </div>
    );
};

export default Assignments;