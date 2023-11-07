
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Assignment = () => {
    const assignment = useLoaderData()
    const [modal, setModal] = useState(true)
    console.log(assignment)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const takeAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = assignment?.title;
        const marks = assignment?.marks;
        const level = assignment?.level;
        const achieveMarks = 'pending';
        const photo = assignment?.photo;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const email = user?.email;

        const takeAssignment = { title, email, achieveMarks, note, level, marks, photo, pdf }
        console.log(takeAssignment);

        fetch(`http://localhost:5000/takeAssignments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(takeAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate("/")
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${err.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            }
            )
    }


    return (
        <div className="w-11/12 mx-auto">
            <div className="">
                <img className="h-[90vh] w-full" src={assignment?.photo} alt="" />
                <div className="py-5 space-y-2">
                    <div className="flex justify-between items-center">
                        <h3 className="text-3xl font-semibold">{assignment?.title}</h3>
                        <h5 className="font-semibold">Date: {assignment?.date}</h5>
                    </div>
                    <h5 className="text-xl font-semibold">Level: {assignment?.level}</h5>
                    <h5 className="text-xl font-semibold">Marks: {assignment?.marks}</h5>
                    <div className="space-x-5">
                        <a className="btn" href={assignment?.pdf} download>PDF Download</a>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => {document.getElementById('my_modal_5').showModal(); setModal(false)}}>Take Assignment</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className={`modal-box`}>
                                <form onSubmit={takeAssignment} className={`${modal && "hidden"}`} method="dialog">
                                    <div className="form-control">
                                        <span className="label-text text-lg">PDF Link:</span>
                                        <input type="text" name="pdf" placeholder="Enter PDF link" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2" required />
                                    </div>
                                    <div className="form-control my-3">
                                        <span className="label-text text-lg">Any Notes:</span>
                                        <input type="text" name="note" placeholder="Any notes" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2"/>
                                    </div>
                                    {/* if there is a button in form, it will close the modal */}
                                    <button type="submit" onClick={()=> setModal(false)} className="btn">Submit</button>
                                </form>
                            </div>
                        </dialog>
                    </div>
                    <p><span className="font-bold">Description:</span> {assignment?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Assignment;