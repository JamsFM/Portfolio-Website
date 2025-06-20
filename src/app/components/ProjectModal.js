import Image from "next/image";
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from "react";
import PropTypes from 'prop-types';

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
    const modalRef = useRef();

    ProjectModal.propTypes = {
        project: PropTypes.any,
        onClose: PropTypes.any,
        onNext: PropTypes.any,
        onPrev: PropTypes.any
    }

    const handleClickOutside = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div 
            className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50" 
            onClick={handleClickOutside} 
            ref={modalRef}>
            <div  
                className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-12 h-10/12" 
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between mb-0">
                    <h2 className="text-2xl font-bold text-secondary-300 underline decoration-gray-600 decoration-double">
                        {project.title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-secondary-50 hover:text-secondary-400 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors translate-x-[100%] -translate-y-[100%]">
                            <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="space-y-4 md:w-1/2">
                        <pre className="text-gray-300 text-wrap whitespace-pre-line">
                            {project.fullDescription}
                        </pre>
                        <div>
                            <h3 className="font-semibold text-xl mb-2 text-secondary-500 underline decoration-gray-600">
                                Tech Stack:</h3>
                            <ul className="grid grid-cols-2 list-disc list-inside grid-flex-col text-gray-300 text-nowrap gap-x-24">
                                {project.techStack.map((tech) => (
                                    <li key={tech} 
                                        className="italic text-gray-300">
                                            {tech}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative h-64 w-full md:w-1/2 text-italic">
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    <div className="absolute inset-x-2/5 -bottom-1/3">
                        <a  target="_blank" 
                            rel="noopener noreferrer"  
                            href={project.link} 
                            className="inline-block mt-4 px-2 py-1 bg-secondary text-white rounded-md hover:bg-secondary-500/50 hover:text-secondary-200 text-center">
                                View Project</a>
                    </div>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
                        <button 
                            onClick={onPrev} 
                            className="bg-gray-800/50 rounded-full p-2 hover:text-secondary-400 hover:bg-gray-800/70 transition-colors -translate-x-[125%]">
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={onNext} 
                            className="bg-gray-800/50 rounded-full p-2 hover:text-secondary-400 hover:bg-gray-800/70 transition-colors -translate-x-[125%]">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}