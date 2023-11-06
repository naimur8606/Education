import { useLoaderData } from "react-router-dom";
import Banner from "../Home/Banner";
import DisplayAssignment from "./DisplayAssignment";

const Assignments = () => {
    const assignments = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <DisplayAssignment assignments={assignments}></DisplayAssignment>
            
        </div>
    );
};

export default Assignments;