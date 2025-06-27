import ProjectSection from "./components/ProjectSection";
// import PostsSection from "./components/PostsSection";
import HeroSection from "./components/HeroSection";

export default function Home() { 
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <HeroSection />
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
      {/* <PostsSection /> */}
    </div>
  );
}
