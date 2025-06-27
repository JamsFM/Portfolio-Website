"use client";
import { useState } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        // If the element is not hovered, do nothing
        if (!isHovered) return;

        // Calculate mouse position as a percentage of the element's dimensions
        // This will give us a value between 0 and 100 for both x and y
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
    };

    return (
        <section>
            <div 
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div 
                    className="pattern-bg default-fade"
                    style={{
                        opacity: isHovered ? 0 : 0.2,
                        transition: 'opacity 0.7s ease-in-out',
                    }}></div>
                <div 
                    className="pattern-bg default-fade"
                    style={{
                        WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 20%)`,
                        mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, black 0%, transparent 20%)`,
                        opacity: isHovered ? 0.4 : 0,
                        transition: 'opacity 0.1s ease-in-out',
                    }}></div>
                <div className="relative">
                    <div className="opacity-15">
                        <div className="absolute top-0 right-0 sm:w-[800px] sm:h-[800px] w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl"></div>
                        <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary/35 rounded-full blur-3xl"></div>
                        <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary-500/40 rounded-full blur-2xl"></div>
                        <div className="absolute top-6 right-6 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary-400/65 rounded-full blur-xl"></div>
                        <div className="absolute top-4 right-4 sm:w-[100px] sm:h-[100px] w-[25px] h-[25px] bg-white-600/80 rounded-full blur-xs"></div>
                    </div>
                    <h1 className="text-4xl front-bold tracking-light text-primary-100">
                        Software Development Engineer<span className="mt-2 block  text-primary-300/95">
                            DevOps Engineer</span>
                        <span className="mt-2 block text-primary-600">
                            Full-Stack Engineer</span> 
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 leading-8">
                    Experienced- Ever Inquiring- Ever Growing- Seeker of Quality Novel Design-<br />
                    I am a growing Software Developer with an Engineers Intuition and Education, fueled with a Passion to be a part of the Innovative!
                    </p>
                    <div className="flex mt-8 gap-6">
                        <AboutSection />
                        <ContactSection />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;