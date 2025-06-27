"use client";
import { X } from 'lucide-react';
import PropTypes from 'prop-types';

export default function ContactModal({ onClose }) {

    ContactModal.propTypes = {
        onClose: PropTypes.bool
    }

    const handleClickOutside = (e) => {
        e.preventDefault();
        onClose();
    }

    return (
        <div 
            className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50" 
            onClick={handleClickOutside}>
            <div  
                className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[60vh] overflow-y-auto p-12 h-10/12" 
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between mb-0">
                    <h2 className="text-2xl font-bold text-primary-300 underline decoration-gray-600 decoration-double">
                        Contact Details</h2>
                    <button 
                        onClick={onClose} 
                        className="text-primary-50 hover:text-primary-400 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors translate-x-[100%] -translate-y-[100%]">
                            <X size={24} />
                    </button>
                </div>
                <div className="text-wrap flex flex-col md:flex-row gap-6">
                    <div className="space-y-4">
                        <p className="text-gray-300 font-semibold">
                            📫 How to reach me: Please leave details & contact information at any of the following-
                        </p>
                        <ol className="list-none list-inside text-gray-300 ml-8">
                            <li className="mb-4">
                                📧 <b>Email</b>: <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="mailto:jamesfmare@gmail.com"
                                        className='text-primary-400 hover:text-primary-300 underline decoration-gray-600'>
                                        jamesfmare@gmail.com</a></li>
                            <li className="mb-4">
                                📞 <b>Phone</b>: <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="tel:+1 (360) 999-3618"
                                        className='text-primary-400 hover:text-primary-300 underline decoration-gray-600'>
                                        +1 (360) 999-3618</a> (If I can not answer, please leave a voicemail so that I know it is not spam, Thank you!)</li>
                            <li className="mb-4">
                                🔎 <b>LinkedIn</b>: <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/james-frank-mare"
                                        className='text-primary-400 hover:text-primary-300 underline decoration-gray-600'>
                                        ../in/james-frank-mare
                                    </a> (My LinkedIn profile is thoroughly filled out and you can see more there!)</li>
                            <li className="mb-4">
                                💾  <b>GitHub</b>: <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/JamsFM"
                                        className='text-primary-400 hover:text-primary-300 underline decoration-gray-600'>../JamsFM</a> (My GitHub is filled with many projects, some of which are not listed here, and I am always looking to add more!)</li>
                            <li>
                                ✅ <b>Verification</b> of my latest employment with <b><i>Cambia</i></b> can be provided upon request, as it is outsourced to <b><i>The Work Number</i></b> via their site or by calling <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="tel:jamesfmare@gmail.com"
                                        className='text-primary-400 hover:text-primary-300 underline decoration-gray-600'>
                                        (800) 367-5690</a> with an employer code that I can provide.
                            </li>
                        </ol>
                        <p className="text-gray-300 mt-8 font-semibold">
                            🔭 I am currently looking for new opportunities in Software Development Engineering, DevOps, or Full-Stack Development<br/><br/>
                            🤝 Reach out and I would love to provide my Resume and talk more!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}