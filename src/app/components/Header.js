import Link from "next/link";
// import ContactSection from "./ContactSection";

const Navbar = () => {
  return (
    <header className="bg-gray-900/70 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-70">
        <div className="flex container items-center justify-between mx-auto py-2 lg:px-8 lg:py-4 ip-8 sm:p-10 md:p-6">
          <Link 
            href="/" 
            className="px-2 py-1 rounded-lg text-tertiary-400 hover:bg-tertiary-500/15 hover:text-tertiary-200 hover:underline hover:decoration-tertiary-200 decoration-gray-600 decoration-double text-2xl md:text-4xl font-semibold">
                Portfolio
          </Link>
          <div 
            className="menu hidden md:block md:w-auto"
            id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-4 mt-0">
              <li 
                key="about">
                    <Link 
                    href="#about" 
                    className="px-2 py-1 rounded-lg text-tertiary-300 hover:bg-tertiary-500/25 hover:text-tertiary-200 hover:underline hover:decoration-tertiary-200 decoration-gray-600 font-semibold">
                        About
                    </Link>
              </li>
              <li key="contact">
                <Link 
                  href="#contact"
                  className="px-2 py-1 rounded-lg text-tertiary-300 hover:bg-tertiary-500/25 hover:text-tertiary-200 hover:underline hover:decoration-tertiary-200 decoration-gray-600 font-semibold">
                    Contact
                </Link>
              </li>
              <li key="projects">
                <Link 
                  href="#projects" 
                  className="px-2 py-1 rounded-lg text-tertiary-300 hover:bg-tertiary-500/25 hover:text-tertiary-200 hover:underline hover:decoration-tertiary-200 decoration-gray-600 font-semibold">
                    Projects
                </Link>
              </li>
              <li key="blog">
                <Link 
                  href="#blog" 
                  className="px-2 py-1 rounded-lg text-tertiary-300 hover:bg-tertiary-500/25 hover:text-tertiary-200  hover:underline hover:decoration-tertiary-200 decoration-gray-600 font-semibold">
                    Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;