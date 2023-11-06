import { Link } from "react-router-dom";

const DisplayAssignment = ({assignments}) => {
    console.log(assignments)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                assignments?.map((assignment, idx) =>
                <div key={idx} className="shadow-md rounded-md">
                    <img className="h-60 w-full rounded-t-md" src={assignment?.photo} alt="" />
                    <div className="px-3 py-5 space-y-2">
                    <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-medium">{assignment?.title}</h3>
                    <h5 className="font-semibold">{assignment?.date}</h5>
                    </div>
                    <p>{assignment?.description.slice(0,45)}...</p>
                    <div className="pt-3 flex justify-between">
                    <Link to={`/assignments/${assignment?._id}`} className="text-xl text-white bg-[#009fe2] px-6 py-2 rounded-lg">View Assignment</Link>
                    
                    </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default DisplayAssignment;