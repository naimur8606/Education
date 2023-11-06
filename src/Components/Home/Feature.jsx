import { GiUpgrade } from 'react-icons/gi';
import { GrDocumentUpload } from 'react-icons/gr';
import { MdManageHistory } from 'react-icons/md';

const Feature = () => {
    return (
        <div className='w-11/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="feature-card">
                <div className="feature-icon">
                    <GiUpgrade></GiUpgrade>
                </div>
                <h3 className="feature-title">Grading and Feedback</h3>
                <p className="feature-description">Effortlessly grade assignments and provide constructive feedback to enhance learning outcomes.</p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">
                <GrDocumentUpload></GrDocumentUpload>
                </div>
                <h3 className="feature-title">Upload and Share Assignments</h3>
                <p className="feature-description">Easily upload assignments and collaborate with peers by sharing your work securely.</p>
            </div>

            <div className="feature-card">
                <div className="feature-icon">
                <MdManageHistory></MdManageHistory>
                </div>
                <h3 className="feature-title">Assignment Management</h3>
                <p className="feature-description">Efficiently create, update, and organize your assignments to stay on top of your coursework.</p>
            </div>
        </div>
    );
};

export default Feature;