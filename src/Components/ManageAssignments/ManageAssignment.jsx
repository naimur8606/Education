import { useLoaderData } from "react-router-dom";
import DisplayAssignment from "../Assignments/DisplayAssignment";

const ManageAssignment = () => {
    const assignments = useLoaderData()
    console.log(assignments)
    return (
        <div>
           <div>
                <img className="w-full h-[30vh] md:h-[250px] lg:h-[60vh]" src="https://i.ibb.co/PZkkNXx/my-ass.webp" alt="" />
                <div className="absolute top-0 h-[30vh] md:h-[300px] lg:h-[60vh] w-full flex items-center justify-center text-white text-center">
                    <div className="w-11/12 md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-semibold lg:font-bold"><span className="text-[#009fe2]">Submitted</span> Assignments</h2>

                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto my-8">
                <DisplayAssignment assignments={assignments}></DisplayAssignment>
            </div> 
        </div>
    );
};

export default ManageAssignment;