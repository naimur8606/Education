import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { BsPerson, BsPersonX } from "react-icons/bs";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [menu, setMenu] = useState(false)
    const location = useLocation().pathname;
    console.log(user)
    const SignOut = () => {
        logOut()
            .then(
                Swal.fire({
                    title: 'Success!',
                    text: 'Logout Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            )
            .catch(error => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${error.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            });
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="absolute z-[1] py-5 px-1 w-11/12 flex justify-between items-center flex-row-reverse lg:flex-row">
                <h4 className="text-2xl text-[#e9f1f9] md:text-4xl font-semibold">
                    <span className="text-[#009fe2]">F</span>riends
                </h4>
                <div className="text-3xl lg:hidden text-white">
                    {menu ? <AiOutlineClose onClick={() => setMenu(false)}></AiOutlineClose> :
                        <BiMenu onClick={() => setMenu(true)}></BiMenu>}
                </div>
                <ul className={`lg:space-x-14 text-white text-lg font-medium flex flex-col lg:flex-row duration-1000 lg:relative lg:left-0 lg:top-0 absolute  ${menu ? "top-16 left-0 bg-[#009ee2c9] p-3 rounded-lg" : "-left-96 top-16"}`}>
                    <NavLink
                        to={"/"}
                        onClick={() => setMenu(false)}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-2 border-[#fff] md:border-[#009fe2] px-2 rounded-md" : ""
                        }>
                        Home
                    </NavLink>

                    <NavLink
                        onClick={() => setMenu(false)}
                        to={"/assignments"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-2 border-[#fff] md:border-[#009fe2] px-2 rounded-md" : ""
                        }>
                        Assignments
                    </NavLink>

                    {
                        location === "/" || <NavLink
                            onClick={() => setMenu(false)}
                            to={"/create-assignment"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "border-b-2 border-[#fff] md:border-[#009fe2] px-2 rounded-md" : ""
                            }>
                            Add Assignments
                        </NavLink>
                    }
                    {user ?
                        <div className="flex items-center">
                            <BsPerson className="text-2xl mr-1.5"></BsPerson><button onClick={SignOut}>Logout</button>
                        </div> :
                        <div className="flex items-center"><BsPersonX className="text-2xl mr-1.5"></BsPersonX>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                                }>
                                Login
                            </NavLink>
                        </div>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
