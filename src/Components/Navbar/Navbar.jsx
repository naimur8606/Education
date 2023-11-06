import { NavLink, useLocation } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const location = useLocation().pathname;

    return (
        <div className="w-11/12 mx-auto">
            <div className="absolute z-[1] py-5 w-11/12 flex justify-between items-center flex-row-reverse lg:flex-row">
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

                    {location === "/" || <NavLink
                        onClick={() => setMenu(false)}
                        to={"/create-assignment"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-2 border-[#fff] md:border-[#009fe2] px-2 rounded-md" : ""
                        }>
                        Add Assignments
                    </NavLink>}
                    
                    <NavLink
                        to={"/login"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-2 border-[#fff] md:border-[#009fe2] px-2 rounded-md" : ""
                        }>
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
