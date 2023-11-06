import { useLocation } from "react-router-dom";

const Banner = () => {
    
    const location = useLocation().pathname;
    // console.log(location)
    return (
        <div>
           <img className="w-full h-[40vh] md:h-[300px] lg:h-[90vh]" src="https://i.ibb.co/d22kHYM/banner-ass.png" alt="" /> 
           <div className="absolute top-0 h-[40vh] md:h-[300px] lg:h-[90vh] w-full flex items-center justify-center text-white text-center">
                <div className="w-11/12 md:w-2/3">
                    <h2 className="text-4xl md:text-6xl font-semibold lg:font-bold">Let's {location === '/assignments'? 'Fined': 'Arrange'} the <span className="text-[#009fe2]">Assignment</span></h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;