import ProjectSection from "./components/ProjectSection";

export default function Home() { 
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <div className="opacity-10">
          <div className="absolute top-0 right-0 sm:w-[800px] sm:h-[800px] w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-primary/50 rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-primary-500/60 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-primary-400/70 rounded-full blur-xl"></div>
          <div className="absolute top-12 right-10 sm:w-[100px] sm:h-[100px] w-[25px] h-[25px] bg-white-600/80 rounded-full blur-xs"></div>
        </div>
        <h1 className="text-4xl front-bold tracking-light text-primary-100">
          Software Development Engineer<span className="mt-2 block  text-primary-300/95">
            DevOps Engineer</span><span className="mt-2 block text-primary-600">
            Full-Stack Engineer</span> </h1>
        <p className="mt-6 text-xl text-gray-300 leading-8">
          Experienced- Ever Inquiring- Ever Growing- Seeker of Quality Novel Design-<br />
          I am a growing Software Developer with an Engineers Intuition and Education, fueled with a Passion to be a part of the Innovative!
        </p>
        <div className="flex mt-8 gap-6">
          <button className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-500/50 hover:text-primary-200 text-xl">
            About Me</button>
          <button className="px-6 py-3 rounded-lg border border-gray-700 bg-gray-800/40 text-primary-500 font-medium hover:border-primary hover:bg-gray-200/20 hover:text-primary-400/80 transition-colors text-xl">
            Contact Me</button>
        </div>
      </div>
      <ProjectSection />
    </div>  );
}
