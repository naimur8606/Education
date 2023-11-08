import { Link } from 'react-router-dom';
import faq from './../../assets/faq.svg'

const Faq = () => {
    return (
        <div className='w-11/12 mx-auto my-5 space-y-5 flex flex-col lg:flex-row items-center'>
            <img className='w-full lg:w-1/2' src={faq} alt="" />
            <div className="w-full lg:w-1/2 join join-vertical">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4"/>
                    <div className="collapse-title text-xl font-medium">
                    How do I get started ?
                    </div>
                    <div className="collapse-content">
                        <p>Explain the <Link to={'/registration'} className='text-blue-600'>registration</Link> and <Link to={"/login"} className='text-blue-600'>login</Link> process for new users.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Is free to use?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, All for you.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How can I create an assignment?
                    </div>
                    <div className="collapse-content">
                        <p>If you have account then go <Link to={"/create-assignment"} className='text-blue-600'>Create Assignment</Link>. Or first to go <Link to={'/registration'} className='text-blue-600'>registration</Link> then you will be able to create Assignment</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    What information should I include when creating an assignment?
                    </div>
                    <div className="collapse-content">
                        <p>You can add PDF file, short Description, marks etc.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How can I edit or update an assignment?
                    </div>
                    <div className="collapse-content">
                        <p>If you have account then go <Link to={"/manage-assignment"} className='text-blue-600'>Manage Assignment</Link>. Or first to go <Link to={'/login'} className='text-blue-600'>Login</Link> then you will be able to Manage Assignment</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How can I grade assignments and provide feedback?
                    </div>
                    <div className="collapse-content">
                        <p>By marking if you want to try then go <Link to={"/manage-assignment"} className='text-blue-600'>Manage Assignment</Link>. Or first to go <Link to={'/login'} className='text-blue-600'>Login</Link> then you will be able to Manage Assignment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;