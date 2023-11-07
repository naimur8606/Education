import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateAssignment = () => 
{const {user, setUserLocation} = useContext(AuthContext)
const location = useLocation()
const State = location?.state
setUserLocation(State)
const navigate = useNavigate()
    const [assignment, setAssignment] = useState({})
    const id = useParams()?.id
    // console.log(id)
    // console.log(assignment)
    useEffect(()=>{
        axios.get(`http://localhost:5000/assignments/${id}`)
        .then(data => setAssignment(data?.data))
    },[id])

    const updateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title?.value;
        const date = form.date?.value;
        const level = form.level?.value;
        const marks = form.marks?.value;
        const photo = form.photo.value;
        const pdf = form.pdf.value;
        const description = form.description.value;
        const email = user?.email;

        const assignment = { email, title, date, level, marks, photo, pdf, description }
        console.log(assignment);

        fetch(`http://localhost:5000/assignments/${id}`, {
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
                    navigate(location?.state ? State : "/assignments")
                }
            })
            .catch(err =>{
                Swal.fire({
                    title: 'Success!',
                    text: `${err.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Cool'
                })
            }
            )
    }

    return (
        <div className="md:p-24 pt-14 bg-[url('https://i.ibb.co/Fg9F0Fw/banner-add-ass.jpg')] mx-auto bg-center bg-cover bg-blend-overlay bg-[#000] bg-opacity-10 py-8">
            <h2 className="text-3xl font-extrabold text-white  mb-5 text-center">Update Assignment</h2>
            <form onSubmit={updateAssignment} className='w-11/12 md:w-full mx-auto'>
                <div className="md:flex md:md:mb-8 justify-between">
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Assignment Title</span>
                        <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" defaultValue={assignment?.title} required />
                    </div>
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Thumbnail Image URL</span>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" defaultValue={assignment?.photo} required />
                    </div>
                </div>

                <div className="md:flex md:mb-8 justify-between">
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Date</span>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" defaultValue={assignment?.date} required />
                    </div>
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Difficulty level</span>
                        <select name="level" required id="" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-gray-500">
                            <option value={assignment?.level}>{assignment?.level}</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>

                    </div>
                </div>

                <div className="md:flex md:mb-8 justify-between">
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">PDF Link</span>
                        <input type="text" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white" name="pdf" placeholder="Enter PDF Link" id="" defaultValue={assignment?.pdf} required/>

                    </div>
                    <div className="form-control md:w-[48%]">
                        <span className="label-text text-white text-lg">Marks</span>
                        <input type="number" name="marks" placeholder="Enter Marks" className="input input-bordered w-full bg-opacity-0 border border-[#009fe2] mt-2 text-white"  defaultValue={assignment?.marks} required/>
                    </div>
                </div>

                <div className="md:mb-8">
                    <span className="label-text text-white text-lg">Description</span>
                    <textarea className='p-3 w-full rounded-lg bg-opacity-0 border border-[#009fe2] mt-2 text-white bg-white' placeholder='Enter Description' name="description" id="" cols="" rows="6" defaultValue={assignment?.description} required></textarea>
                </div>

                <input type="submit" value="update Assignments" className="btn btn-block bg-[#1536f0d4] text-white text-xl border mt-3 border-[#2c2cff] hover:text-[#2c2cff] hover:bg-white" />
            </form>

        </div>
    );
};

export default UpdateAssignment;