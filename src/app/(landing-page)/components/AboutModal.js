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
            className="fixed inset-0 bg-gray-800 bg-opacity-70 grid w-screen h-screen place-items-center items-center justify-center z-50" 
            onClick={handleClickOutside}>
            <div  
                className="bg-gray-900 rounded-lg max-w-90 sm:max-w-xl md:max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-2 md:p-8 h-screen" 
                onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between mb-0">
                    <h2 className="text-2xl font-bold text-primary-300 underline decoration-gray-600 decoration-double">
                        Details About Me!</h2>
                    <button 
                        onClick={onClose} 
                        className="text-secondary-50 hover:text-secondary-400 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors translate-x-[5%] -translate-y-[5%] md:translate-x-[100%] md:-translate-y-[100%]">
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
                                🥾 I&#39;m happiest when I&#39;m outdoors, whether I&#39;m hiking a scenic trail, pushing myself with some trail running or rucking, or simply camping under a starry sky. Nature is my go-to for recharging and finding inspiration. Beyond that, I&#39;m a self-proclaimed fitness nut who loves to climb (both indoors and out), hit the gym, and even work out at home. I&#39;m always learning and happy to geek out about diet, technique, and sports science— I can talk a trainer&#39;s ear off!
                            </li>
                            <li className="mb-4">
                                🎺 For me, music is more than just sound— it&#39;s a vital part of my daily rhythm. While my trumpet sits retired, I actively seek out and enjoy listening to a vast array of genres, and I&#39;m always hoping to catch my favorite artists live. It&#39;s how I decompress, process thoughts, and find my focus.
                            </li>
                            <li className="mb-4">
                                📚 I&#39;m an avid consumer of knowledge, always on the hunt for something new to learn. Though I don&#39;t often pick up recreational books, I devour articles on everything from emerging technology trends for professional & personal development to cutting-edge physics and science news. My goal is to absorb &#39;a little something about everything,&#39; constantly feeding my curiosity through reading and watching. If &#39;Nerd&#39; means a passion for learning, then I humbly accept the title!
                            </li>
                            <li className="mb-4">
                                🍳 I love to cook—a passion I inherited from my mother. I enjoy experimenting with new recipes and, most of all, sharing good food with friends and family. While I appreciate the simple things, like my delicious (albeit a bit fancy) spaghetti, I also enjoy a challenge, occasionally conquering an overly complicated recipe from a culture I&#39;m not as familiar with.If I&#39;m playing it safe, though, then I know I can always impress with my brown butter chocolate chip cookie recipe.
                            </li>
                            <li className="mb-4">
                                🌍 I&#39;m driven by a deep curiosity about different cultures, which continually broadens my perspective and allows me to truly connect with people. My biracial background offered an early window into Mexico, but I&#39;ve always naturally sought a global worldview, understanding experiences through others&#39; eyes. I believe respectful curiosity is key to engaging with diverse cultures, fostering the kind of deeper connections and meaningful conversations I truly value.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}