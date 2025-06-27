const Footer = () => { 
    return (
        <footer className="w-full bg-gray-500 border-t border-gray-300 mt-4">
            <div className="container flex flex-col mx-auto px-4 items-center mt-2">
                <div className="text-white text-center">
                    <pre className="text-sm">
                        &copy; {new Date().getFullYear()}  |  James FM`  |  All rights reserved.
                    </pre>
                    <p className="text-sm mt-2 mb-3">
                        Built with <a 
                                href="https://nextjs.org" 
                                className="text-blue-400 hover:underline">
                                    Next.js</a> & <a 
                                href="https://tailwindcss.com"
                                className="text-blue-400 hover:underline">
                                    Tailwind CSS</a>.
                        Deployed with <a 
                                href="https://github.com" 
                                className="text-blue-400 hover:underline">
                                    GitHub</a> & <a 
                                href="https://vercel.com"
                                className="text-blue-400 hover:underline">
                                    Vercel</a>. 
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;