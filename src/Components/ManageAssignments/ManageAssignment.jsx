import { useLoaderData } from "react-router-dom";
import { pdfjs } from 'react-pdf';
import PdfViewer from "../PdfViewer/PdfViewer";
import Swal from "sweetalert2";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const ManageAssignment = () => {
    const assignments = useLoaderData()
    const [allAssignments, setAllAssignments] = useState(assignments)
    // console.log(assignments)
    const [markedAssignment, setMarkedAssignment] = useState({})
    const filterAssignments = allAssignments?.filter(item => item?._id !== markedAssignment?._id)

    const updateMarks = e => {
        e.preventDefault();
        const form = e.target;
        const title = markedAssignment?.title;
        const marks = markedAssignment?.marks;
        const level = markedAssignment?.level;
        const achieveMarks = form.marks?.value;
        const photo = markedAssignment?.photo;
        const pdf = markedAssignment?.pdf;
        const note = markedAssignment?.note;
        const email = markedAssignment?.email;
        const assignment = { title, email, achieveMarks, note, level, marks, photo, pdf }
        console.log(assignment, markedAssignment?._id)

        fetch(`https://friends-communication-server.vercel.app/takeAssignments/${markedAssignment?._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(assignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setAllAssignments(filterAssignments)
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${err.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Cool'
                })
            }
            )
    }

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
            <div className="min-h-screen w-11/12 mx-auto my-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Main Marks</th>
                                <th>Update Marks</th>
                                <th>PDF</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
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
                                        <td>
                                            {item?.email}
                                        </td>
                                        <td>{item?.marks}</td>
                                        <td>
                                            <form onSubmit={updateMarks} className="space-y-2">
                                                <input type="number" name="marks" placeholder="Enter Marks" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2" />
                                                <button type="submit" onClick={()=> setMarkedAssignment(item)} className="btn">Submit</button>
                                            </form>

                                        </td>
                                        <td>
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>View</button>
                                            <dialog id="my_modal_3" className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-white bg-red-300 rounded-[50%] top-2 p-1 z-[1]">✕</button>
                                                    </form>
                                                    <PdfViewer></PdfViewer>
                                                </div>
                                            </dialog>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAssignment;