import DisplayAssignment from "../Assignments/DisplayAssignment";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyAssignments = () => {
    console.log(useLoaderData())
    const {user} = useContext(AuthContext)
    const [assignments, setAssignments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://friends-communication-server.vercel.app/assignments/my-assignments?email=${user?.email}`, { withCredentials: true })
            .then(data => {
                setAssignments(data?.data)
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [user?.email])
    if (isLoading) {
        return <div className="h-screen flex justify-center items-center"> <span className="loading loading-ring loading-lg"></span></div>
    }

    return (
        <div>
            <div>
                <img className="w-full h-[30vh] md:h-[250px] lg:h-[60vh]" src="https://i.ibb.co/PZkkNXx/my-ass.webp" alt="" />
                <div className="absolute top-0 h-[30vh] md:h-[300px] lg:h-[60vh] w-full flex items-center justify-center text-white text-center">
                    <div className="w-11/12 md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-semibold lg:font-bold">My <span className="text-[#009fe2]">Assignments</span></h2>

                    </div>
                </div>
            </div>
            <div className="w-11/12 mx-auto min-h-[50vh] my-8">
                {
                    assignments.length > 0 ? 
                    <DisplayAssignment assignments={assignments}></DisplayAssignment>
                    :
                    <div className="w-11/12 mx-auto flex text-2xl justify-center items-center text-black">
                        <h2>You have not published any assignments !</h2>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyAssignments;