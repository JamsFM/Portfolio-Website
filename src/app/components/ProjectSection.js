"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const ProjectSection = () => {
    const projects = [
      {
        id: "1",
        title: "Boeing Log Analysis",
        techStack: ["Python", "ML", "Bad-actor Simulation", "SDLC", "Agile Methods", "Technical Doc", "Product Demo", "GitHub", "Linux VM"],
        image: "/images/project-a.png",
        description: "Senior Capstone Project with Boeing to analyze logs for cyber-attack indictors using Machine Learning.",
        fullDescription: "▪ Developed Machine Learning models to identify anomalous logs potentially indicating cyber-attacks. \n▪ Backend: Utilized RegEx, Bag-of-Words, and TF-IDF (sklearn) to parse and categorize log data. \n▪ Frontend: Designed a GUI using Tkinter for data visualization and user interaction. \n▪ Implemented Logistic Regression and K-Means clustering for anomaly detection. \n▪ Simulated DDoS attack scenarios, creating shell and batch files for automated attack simulations. \n▪ Contributed to the Technical Documentation (Road Map, Design Spec, Validation/Test Plan, PRD, and more). \n▪ Created & Lead the Presentation/Demo for both an Academic audience and to a small board from Boeing to showcase the results of the project.",
        link: "https://github.com/JamsFM/Boeing-MachineLearning"
      },
      {
        id: "2",
        title: "Portfolio Website",
        techStack: ["React", "Tailwind CSS", "Technical Doc", "GitHub", "Proxmox", "Linux VM", "Docker"],
        image: "/images/project-b.jpg",
        description: "Portfolio Website for self marketing and growing skills with Front-End Web Development.",
        fullDescription: "Personal portfolio website to showcase my skills, projects, and experience. Built with React and Tailwind CSS for a modern and responsive design. Features include a project showcase, blog section, and an about me page.",
        link: "https://github.com/JamsFM/Portfolio-Website"
      },
      {
        id: "4",
        title: "POC Healthcare DB",
        techStack: ["SQL Server", "C#", "Dapper", "DB Design", "DB Management", "Product Demo", "GitHub"],
        image: "/images/project-d.jpg",
        description: "A Proof Of Concept small-scale Healthcare Database made for a Databases Class Project.",
        fullDescription: "A Proof Of Concept (POC) Small-scale Healthcare Database project created for a class assignment. The project involved designing a database schema, implementing CRUD operations, and creating a user-friendly interface for managing healthcare records.",
        link: "https://github.com/JamsFM/SQL_HealthcareDB"
      },
      {
        id: "5",
        title: "FPGA | Programmable Processor",
        techStack: ["FPGA", "Assembly", "Verilog", "Logic Design", "Altera Board", "Product Demo", "Project Management"],
        image: "/images/project-e.png",
        description: "Simulated the behavior of a Programmable Processor using Logic Design and Verilog for a Class Project.",
        fullDescription: "Lead group project to implement the simulated behavior of an ALU within a made from scratch Programmable Processor using Logic Design on an Altera board with Verilog. In completion of the project with my team I filmed the video demonstration.",
        link: "https://www.youtube.com/watch?v=tkFUi1VNvrs"
      },
      {
        id: "6",
        title: "Thunderbird Tail-Lights",
        techStack: ["VHDL", "Logic Design", "Altera Board", "Product Demo", "Project Management"],
        image: "/images/project-f.gif",
        description: "Simulated the Tail-Lights of the classic Ford Thunderbird using a FPGA for a Class Project using Logic Design and VHDL.",
        fullDescription: "Lead group project to implement the simulated behavior of the Ford Thunderbird Tail Lights using Logic Design on an Altera board with VHDL. In completion of the project with my team I filmed the video demonstration.",
        link: "https://www.youtube.com/watch?v=1eroVlh89mE"
      },
      {
        id: "7",
        title: "Embedded Systems Project",
        techStack: ["C", "Assembly", "RTOS", "IoT", "Microcontroller", "Bluetooth", "Analog & Digital Conversion", "Timers & Interrupts"],
        image: "/images/project-g.png",
        description: "Embedded Systems Development Class Project to program a microcontroller to gain hands-on experience with IoT.",
        fullDescription: "A Embedded Systems Development class project that involved programming a TM4C123GH6PM microcontroller to control various hardware components to gain hands-on experience with IoT. The project included designing and implementing firmware for the microcontroller. Communicated with embedded processor using Bluetooth, performed analog & digital conversion, and used system timers and interrupts. Worked with pre-constructed real-time Operation System. Designed a fitness device that tracks steps, temperature, sound, and light.",
        link: "#https://www.ti.com/tool/EK-TM4C123GXL#description"
      }
      /*,
      {
        id: "3",
        title: "Cover-Letter Template Filler",
        techStack: ["Python", "Scripting", "LibreOffice", "WSL2", "Technical Doc", "GitHub"],
        image: "/images/project-c.jpg",
        description: "Cover-Letter Template filling application that fills data fields with given or default values using LibreOffice.",
        fullDescription: "A simple application that fills in a cover-letter template with user-provided or default information using LibreOffice within a WSL.",
        link: "https://github.com/JamsFM/CoverLetterTemplateFiller"
      }*/
    ]; 

    const [selectedProject, setSelectedProject] = useState(null);
    
    const handleOpenModal = (id) => {
        setSelectedProject(id);
    }

    const handleCloseModal = () => {
        setSelectedProject(null);
    }

    const handleNextProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);

        if (currentIndex === -1) {
            return null;
        }

        const nextIndex = (currentIndex + 1) % projects.length;

        setSelectedProject(projects[nextIndex].id);
    }

    const handlePrevProject = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);

        if (currentIndex === -1) {
            return null;
        }

        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

        setSelectedProject(projects[prevIndex].id);
    }

  return (
    <section 
        id="projects" 
        className="px-4 py-24 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-bold text-secondary-400 mb-10 text-center">
            ~ Featured Projects ~</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
                <button
                    onClick={() => handleOpenModal(project.id)} 
                    key={project.id} 
                    className="bg-gray-800/40 backdrop-blur-sm rounded-lg gap-6 border border-gray-700/70 hover:border-secondary-500/50 transition-colors hover:shadow-sm text-left">
                    <div className="flex flex-col h-full">
                        <h3 className="text-lg font-medium text-secondary-300 ml-2 mr-2 mb-2">
                            {project.title}</h3>
                        <p className="text-gray-300 ml-3 mr-3 mb-4">
                            {project.description}</p>
                        <div className="flex flex-wrap gap-1.5 ml-2 mr-2 mt-auto">
                            {project.techStack.map((tech) => (
                                <span key={tech} 
                                    className="px-2 py-0.5 text-xs rounded-full bg-secondary-500/20 text-secondary-200 border border-secondary-500/30">
                                    {tech}</span>
                            ))}
                        </div>
                        <div className="flex mt-4 justify-center">
                            <a  target="_blank" 
                                rel="noopener noreferrer" 
                                href={project.link} 
                                className="inline-block px-3 py-.75 mb-1.5 bg-secondary text-white rounded-md hover:bg-secondary-500/50 hover:text-secondary-200 text-center">
                                    View Project</a>
                        </div>
                    </div>
                </button>
            ))}
        </div>
        {
            selectedProject && (
                <ProjectModal 
                    project={projects.find((project) => project.id === selectedProject)} 
                    onClose={handleCloseModal} 
                    onNext={handleNextProject} 
                    onPrev={handlePrevProject} />
            )   
        }
    </section>
  );
}

export default ProjectSection;