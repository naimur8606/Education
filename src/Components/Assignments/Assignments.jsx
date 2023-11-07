import { useLoaderData } from "react-router-dom";
import Banner from "../Home/Banner";
import DisplayAssignment from "./DisplayAssignment";
import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Assignments = () => {
    const { count } = useLoaderData()
    const totalPages = Math.ceil(count / 8)
    const pages = [...Array(totalPages).keys()];
    console.log(pages)
    const [currentPage, setCurrentPage] = useState(0)
    const [allAssignments, setAllAssignments] = useState([])
    const [assignments, setAssignments] = useState(allAssignments)
    useEffect(() => {
        fetch(`https://friends-communication-server.vercel.app/assignments?page=${currentPage}&size=${8}`)
            .then(res => res.json())
            .then(data => {
                setAllAssignments(data)
                setAssignments(data)
            })
    }, [currentPage]);
    console.log(allAssignments)
    console.log(assignments)
    const showAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const searchKey = form.searchKey?.value;
        console.log(searchKey)
        if (searchKey !== 'All') {
            const filterAssignments = allAssignments?.filter(item => item?.level === searchKey)
            setAssignments(filterAssignments)
            console.log(filterAssignments, assignments)
        } else {
            setAssignments(allAssignments)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto my-8'>
                <form onSubmit={showAssignment} className="flex items-center my-3">
                    <button className="py-2 px-7 bg-[#009fe2] text-white rounded-l-md">Search</button>
                    <select name="searchKey" required id="" className="border border-[#009fe2] py-2 px-3 rounded-r-lg">
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </form>
                <DisplayAssignment assignments={assignments}></DisplayAssignment>
                <div className="space-x-3 mt-5">
                    <button onClick={prevPage} className="btn"><BiLeftArrow></BiLeftArrow></button>
                    {
                        pages.map(page => <button
                            className={currentPage === page ? 'selected bg-[#009fe2] text-white p-1' : undefined}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button onClick={nextPage} className="btn"><BiRightArrow></BiRightArrow></button>
                </div>
            </div>

        </div>
    );
};

export default Assignments;