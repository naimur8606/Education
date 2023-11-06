
const Banner = () => {
    return (
        <div>
           <img className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh] opacity-80" src="https://i.ibb.co/d22kHYM/banner-ass.png" alt="" /> 
           <div className="absolute top-0 h-[50vh] md:h-[70vh] lg:h-[90vh] w-full flex items-center justify-center bg-black bg-opacity-10 text-white text-center">
                <div className="w-11/12 md:w-2/3">
                    <h2 className="text-4xl md:text-6xl font-semibold lg:font-bold">Let's Find the <span className="text-[#009fe2]">Assignment</span></h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;