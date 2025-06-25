"use client";
import { X } from 'lucide-react';
import PropTypes from 'prop-types';

export default function AboutModal({ onClose }) {

    AboutModal.propTypes = {
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
                        Details About Me!</h2>
                    <button 
                        onClick={onClose} 
                        className="text-primary-50 hover:text-primary-400 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors translate-x-[100%] -translate-y-[100%]">
                            <X size={24} />
                    </button>
                </div>
                <div className="text-wrap flex flex-col md:flex-row gap-6">
                    <div className="space-y-4">
                        <p className="text-gray-300 font-medium">
                            👨‍💻 A growing Software Developer with an Engineer&#39;s Intuition, fueled with a Passion to be a part of the Innovative! Versatile and Results-Driven Software Engineer with a proven track record of Designing, Developing, and Optimizing High-Performance Software Solutions. Leverages skills in Full-Stack Development, with deep expertise in Python, Java, and C++.
                        </p>
                        <ol className="list-none list-inside text-gray-300 ml-8">
                            <li className="mb-4">
                                🤘 Passionate about solving complex technical challenges, streamlining development processes, and driving innovation through scalable and maintainable code.</li>
                            <li className="mb-4">
                                🌐 Growingly proficient in building scalable web applications using modern frameworks such as React and Node.js with Tailwind, keeping a strong focus on user experience and performance optimization.</li>
                            <li className="mb-4">
                                🔗 Collaborative team player who thrives in collaborative cross-functional teams within fast-paced environments, while fostering a culture of continuous learning and sharing.</li>
                            <li className="mb-4">
                                🌟 Experienced in Agile methodologies, with a proven ability to lead Daily Stand-Ups, Demos, Sprint Planning, and Retrospectives that foster team collaboration and drive continuous improvement.</li>
                            <li className="mb-4">
                                💡 Adept at translating business requirements into technical specifications, ensuring alignment between development efforts and organizational goals.</li>
                            <li className="mb-4">
                                🔄 Well-versed in the Software Development Life Cycle (SDLC) and DevOps practices, ensuring structured and efficient project delivery from requirements gathering through deployment and maintenance. Skilled in implementing and optimizing CI/CD pipelines to accelerate delivery and enhance software quality.</li>
                            <li className="mb-4">
                                🧪 Advocate for Test-Driven Development (TDD), writing robust automated tests to drive code quality, reliability, and maintainability.</li>
                            <li className="mb-4">
                                🛠️ Experienced in Production Support, quickly diagnosing and resolving issues in live environments to ensure high availability and seamless user experiences. Experienced with On-Call Rotation over the weekends and holidays.</li>
                            <li className="mb-4">
                                📝 Skilled in creating clear, comprehensive technical documentation for codebases, APIs, and system architectures. Able to translate complex concepts into accessible guides for both technical and non-technical audiences, using diagrams and tables as needed. Experienced in maintaining up-to-date documentation to support onboarding, knowledge sharing, and team collaboration.
                            </li>
                            <li className="mb-4">
                                🦾 Committed to delivering robust, secure, and efficient solutions that align with business goals and enhance user experiences.</li>
                        </ol>
                        <p className="text-gray-300 mt-8 font-semibold">
                            🔭 I am currently looking for new opportunities in Software Development Engineering, DevOps, or Full-Stack Development<br/><br/>
                            🤝 Reach out and I would love to provide my Resume and talk more!
                        </p>

                        <hr className="w-[99%] h-1 mx-auto my-4 md:my-10 border-0 rounded-sm bg-gray-700" />

                        <h2 className="text-2xl font-bold text-primary-300 underline decoration-gray-600 decoration-double">
                        When I’m Not Coding...</h2>
                        <p className="text-gray-300 mt-8 font-semibold">
                            🔭 I am Punk, I am Nerd, I am Stoic, I am very capable of talking someone&#39;s ear off, I am Me. Here&#39;s some more details on that-
                        </p>
                        <ol className="list-none list-inside text-gray-300 ml-4">
                            <li className="mb-4">
                                🥾 I love exploring the outdoors— whether it&#39;s hiking scenic trails, personally I&#39;m a fan of trail running and rucking, camping under the stars, or simply enjoying a walk in nature to recharge and find inspiration. In all honesty, I&#39;m an unassuming nature/health nut on top of that. I love climbing outside or indoors, I go to the gym, and I work out at home, and I do all that to be a multi-disciplinary fitness nerd who can talk even a trainer&#39;s ear off about diet, technique, and sports science.</li>
                            <li className="mb-4">
                                🎺 Music is a big part of my life. While I don&#39;t play my trumpet anymore, I enjoy listening to a wide variety of genres, and try to keep an eye out for when my favorite bands are touring. I&#39;m definitely someone who jams out often which helps me unwind and and lets me think.</li>
                            <li className="mb-4">
                                📚 I&#39;m an avid reader, and while I rarely pick up a book recreationally anymore, I&#39;m always looking to learn something new in articles— be it technology trends for personal development and curiosity, or just keeping up with physics/science news and just striving to absorb &#34;a little something about everything&#34;. I&#39;m always satisfying my hunger for knowledge by read or watching something. As you can tell, &#34;Nerd&#34; is a title I humbly think was always fitting</li>
                            <li className="mb-4">
                                🍳 I enjoy experimenting in the kitchen, trying out new recipes, and sharing good food with friends and family. I love to cook, and I have my mother to thank for that. There&#39;s no shame in being great at the simple stuff- I make a delicious, albeit overly fancy, spaghetti, and I&#39;ve occasionally succeeded in making my overly complicated chocolate chip cookies.</li>
                            <li className="mb-4">
                                🌍 I love traveling and experiencing different cultures, which broadens my perspective and fuels my curiosity. Being biracial helped me gain familiarity with Mexico, but I would say I&#39;ve always strived to have a more worldly perspective and have always found it to be second nature to see the world from how someone else shares their experience to be. Having an open mind that is consistently respectful is the core virtue of any anthropologist who wants to learn another culture respectfully, and I see it as my ethical duty to be curious respectfully. Culture is all around us and shapes us down to influencing what we think, wear, how we talk, and even what music we listen to. Knowing where someone comes from and how they see the world helps you connect, and we are social creatures who will eventually strike up great conversations.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}