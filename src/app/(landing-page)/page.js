import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import PostsSection from "./components/PostsSection";

export default function Home() { 
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
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
              DevOps Engineer</span><span className="mt-2 block text-primary-600">
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
      <div className="relative">
        <div className="opacity-25">
          <div className="absolute  top-32 left-0 sm:w-[800px] sm:h-[800px] w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl"></div>
          <div className="absolute top-32 left-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-secondary/50 rounded-full blur-3xl"></div>
          <div className="absolute top-32 left-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-secondary-500/60 rounded-full blur-2xl"></div>
          <div className="absolute top-32 left-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-secondary-400/70 rounded-full blur-xl"></div>
          <div className="absolute top-0 left-10 sm:w-[100px] sm:h-[100px] w-[25px] h-[25px] bg-white-600/80 rounded-full blur-xs"></div>
        </div>
        <ProjectSection />
      </div>
      <PostsSection />
    </div>
  );
}
