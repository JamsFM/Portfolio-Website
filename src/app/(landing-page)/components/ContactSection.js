"use client";
import ContactModal from "./ContactModal";
import { useState } from "react";

const ContactSection = () => {
    const [showContact, setShowContact] = useState(false);

    const handleOpenModal = () => {
        setShowContact(true);
    }

    const handleCloseModal = () => {
        setShowContact(false);
    }


  return (
    <section >
        <div>
            <button
                onClick={() => handleOpenModal()} 
                className="text-nowrap backdrop-blur-sm px-3 sm:px-6  py-1.5 sm:py-3 rounded-lg gap-6 border border-gray-700 bg-gray-800/70 text-primary-500 font-medium hover:border-primary hover:bg-gray-200/20 hover:text-primary-400/80 transition-colors text-md sm:text-xl">
                    Contact Me</button>
        </div>
        {
            showContact && (
                <ContactModal
                    onClose={handleCloseModal} />
            )   
        }
    </section>
  );
}

export default ContactSection;