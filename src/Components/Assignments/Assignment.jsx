import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useDelete from "../../Hooks/useDelete";

const Assignment = () => {
    const assignment = useLoaderData()
    const {user} = useContext(AuthContext)
    const handleDelete = useDelete()
    console.log(handleDelete)
    // const handleDelete = (id) =>{
    //     fetch(`http://localhost:5000/assignments/${id}`, {
    //     method: 'DELETE'
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.deletedCount > 0) {
    //         console.log('Deleted successfully');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Delete request failed:', error);
    //     });
    // }
    console.log(assignment)
    return (
        <div className="w-11/12 mx-auto">
            <div className="">
                <img className="h-[90vh] w-full" src={assignment?.photo} alt="" />
                <div className="py-5 space-y-2">
                    <div className="flex justify-between items-center">
                        <h3 className="text-3xl font-semibold">{assignment?.title}</h3>
                        <h5 className="font-semibold">Publish: {assignment?.date}</h5>
                    </div>
                    <h5 className="text-xl font-semibold">Level: {assignment?.level}</h5>
                    <h5 className="text-xl font-semibold">Marks: {assignment?.marks}</h5>
                    <button onClick={()=> handleDelete(assignment?._id)}>Delete{assignment?._id}</button>
                    <a className="btn" href={assignment?.pdf} download>PDF Download</a>
                    <p>Description: {assignment?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Assignment;