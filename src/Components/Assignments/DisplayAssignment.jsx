import { Link } from "react-router-dom";
import useDelete from "../../Hooks/useDelete";

const DisplayAssignment = ({ assignments }) => {
    const handleDelete = useDelete()
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
                            <p>{assignment?.description}...</p>
                            <div className="pt-3 flex justify-between items-center">
                                <Link to={`/assignments/${assignment?._id}`} className="text-xl text-white bg-[#009fe2] px-6 py-2 rounded-lg">View Assignment</Link>
                                <div className="dropdown dropdown-bottom">
                                    <label tabIndex={0} className="text-xl text-white bg-[#009fe2] px-6 py-2 rounded-lg">CURD</label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu mt-2   text-white bg-[#009ee2bb] shadow rounded text-xl text-center w-28 space-y-2">
                                        <li><Link to={`/update-assignment/${assignment?._id}`}>Update</Link></li>
                                        <li onClick={
                                            () => handleDelete(assignment?._id)
                                        }>Delete</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default DisplayAssignment;