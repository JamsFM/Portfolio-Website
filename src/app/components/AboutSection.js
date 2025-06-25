"use client";
import AboutModal from "./AboutModal";
import { useState } from "react";

const AboutSection = () => {
    const [showAbout, setShowAbout] = useState(false);

    const handleOpenModal = () => {
        setShowAbout(true);
    }

    const handleCloseModal = () => {
        setShowAbout(false);
    }

  return (
    <section >
        <div>
            <button
                onClick={() => handleOpenModal()} 
                className="text-nowrap backdrop-blur-sm px-6 py-3 rounded-lg gap-6 border bg-primary text-white font-medium  hover:bg-primary-500/50 hover:text-primary-200 transition-colors text-xl">
                    About Me</button>
        </div>
        {
            showAbout && (
                <AboutModal
                    onClose={handleCloseModal} />
            )   
        }
    </section>
  );
}

export default AboutSection;