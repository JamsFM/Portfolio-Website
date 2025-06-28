import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-900/70 backdrop-blur-md fixed w-screen z-50">
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-70">
        <div className="flex container items-center justify-between w-screen mx-auto px-2 lg:px-4 py-2 sm:py-2">
          <div className="relative flex gap-2 lg:gap-4 z-60">
            <Image
                className="italic"
                src="/favicon.png"
                alt="JFM"
                width={50}
                height={50}
                priority={true}
                quality={75}
            />
            <Link 
              href="/" 
              className="px-2 py-1 rounded-lg text-tertiary-400 hover:bg-tertiary-500/15 hover:text-tertiary-200 hover:underline hover:decoration-tertiary-200 decoration-gray-600 decoration-double text-2xl md:text-4xl font-semibold">
                  Portfolio
            </Link>
          </div>
          <div 
            className="menu hidden md:block md:w-auto justify-end mr-2"
            id="navbar">
            <ul className="flex px-2 py-2 sm:px-4 lg:px-8 flex-row space-x-2 md:space-x-4">
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
              {/* <li key="blog">
                <Link 
                  href="#blog" 
                  className="px-2 py-1 rounded-lg text-tertiary-300 hover:bg-tertiary-500/25 hover:text-tertiary-200  hover:underline hover:decoration-tertiary-200 decoration-gray-600 font-semibold">
                    Blog
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;