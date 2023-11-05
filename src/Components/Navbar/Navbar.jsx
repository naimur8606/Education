import { NavLink } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Appointment", link: "/appointment" },
        { name: "Contact", link: "/contact" },
        { name: "Profile", link: "/profile" },
    ];


    return (
        <div className="w-11/12 mx-auto">
            <div className="absolute z-[1] py-5 w-11/12 flex justify-between items-center flex-row-reverse md:flex-row">
                <h4 className="text-2xl text-[#e9f1f9] md:text-4xl font-semibold">
                    <span className="text-[#009fe2]">D</span>octor
                </h4>
                <div className="text-3xl md:hidden">
                    {menu? <AiOutlineClose onClick={() => setMenu(false)}></AiOutlineClose>:
                    <BiMenu onClick={() => setMenu(true)}></BiMenu>}
                </div>
                <ul className={`space-x-5 text-lg font-medium flex flex-col md:flex-row duration-1000 md:relative md:left-0 md:top-0 absolute  ${menu ? "top-16 left-0 bg-[#009ee2c9] p-3 rounded-lg" : "-left-96 top-16"}`}>
                    {navItems.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.link}
                            onClick={() => setMenu(false)}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "border-b-2 border-[#fff] md:border-[#009fe2] px-2 rounded-md" : ""
                            }>
                            {item.name}
                        </NavLink>
                    ))}
                    <NavLink
                        to={"/login"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#2c2cff] border border-[#2c2cff] px-3 py-1 rounded-md" : ""
                        }>
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
