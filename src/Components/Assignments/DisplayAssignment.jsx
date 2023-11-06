
const DisplayAssignment = ({assignments}) => {
    return (
        <div className="">
            {
                assignments?.map((assignment, idx) =>
                <img key={idx} src={assignment?.photo} alt="" />
                )
            }
        </div>
    );
};

export default DisplayAssignment;