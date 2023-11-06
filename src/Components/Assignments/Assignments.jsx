import { useLoaderData } from "react-router-dom";
import Banner from "../Home/Banner";
import DisplayAssignment from "./DisplayAssignment";

const Assignments = () => {
    const assignments = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto my-8'>
                <h2 className="text-2xl font-semibold my-2">All Assignments are here</h2>
            <DisplayAssignment assignments={assignments}></DisplayAssignment>
            </div>
            
        </div>
    );
};

export default Assignments;