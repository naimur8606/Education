import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const TakenAssignments = () => {
    const { user } = useContext(AuthContext)
    const [allAssignments, setAllAssignments] = useState([])
    useEffect(() => {
        fetch(`https://friends-communication-server.vercel.app/takeAssignmentsByUser?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setAllAssignments(data))
    }, [user])

    return (
        <div>
            <div>
                <img className="w-full h-[30vh] md:h-[250px] lg:h-[60vh]" src="https://i.ibb.co/PZkkNXx/my-ass.webp" alt="" />
                <div className="absolute top-0 h-[30vh] md:h-[300px] lg:h-[60vh] w-full flex items-center justify-center text-white text-center">
                    <div className="w-11/12 md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-semibold lg:font-bold"><span className="text-[#009fe2]">Taken</span> Assignments</h2>
                        <h3 className="text-2xl mt-4 font-semibold">User Email: {user?.email}</h3>

                    </div>
                </div>
            </div>
            <div className="min-h-screen w-11/12 mx-auto my-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Main Marks</th>
                                <th>Your Marks</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allAssignments?.map((item, idx) =>
                                    <tr key={idx}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.photo} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div className="font-bold">{item?.title}</div>
                                            </div>
                                        </td>
                                        <td>{item?.marks}</td>
                                        <td>{item?.achieveMarks}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                            {
                                allAssignments.length < 1 &&
                                <div className="w-11/12 text-3xl mt-5 mx-auto flex justify-center items-center text-black">
                                    <h2>You have not taken any assignments !</h2>
                                </div>
                            }
                </div>
            </div>
        </div>
    );
};

export default TakenAssignments;