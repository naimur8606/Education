import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Faq from "./FAQ";
import Feature from "./Feature";
import DisplayAssignment from "../Assignments/DisplayAssignment";

const Home = () => {
    const assignments = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <div className="w-11/12 mx-auto my-10">
                <h5 className="text-xl text-[#009fe2] text-center font-semibold my-5">Assignments</h5>
            <DisplayAssignment assignments={assignments}></DisplayAssignment>
            </div>
            <Faq></Faq>
        </div>
    );
};

export default Home;