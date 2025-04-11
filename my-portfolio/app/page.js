import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Home() {
    return (
    <main className="scroll-smooth">
        {/* Hero Section */}
        <section
        id="home"
        className="h-screen bg-cover bg-center relative" 
        style={{ backgroundImage: "url('/observatory.jpg')" }}
        >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Social Icons - absolutely positioned at the top */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-10">
            <a href="https://linkedin.com/in/josh-jilot-4620472b2/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-10 h-10 invert hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://github.com/jjjilot" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-10 h-10 invert hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="mailto:joshjilot@gmail.com">
            <EnvelopeIcon className="w-10 h-10 text-white hover:scale-110 transition-transform duration-200" />
            </a>
        </div>

        {/* Main Content */}
        <div
            className="relative z-10 h-full flex flex-col justify-start items-center text-center text-white px-4 pt-64"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
            <h1 className="text-8xl font-bold mb-4">Josh Jilot</h1>
            <p className="text-xl max-w-xl text-gray-300">
            Aspiring Software Engineer passionate about building code designed to improve lives of users and future developers alike.
            </p>
            <nav className="mt-10 flex space-x-6 text-gray-200">
            <a href="#about" className="hover:underline">About</a>
            <div className="border-l border-gray-375 h-5"></div>
            <a href="#projects" className="hover:underline">Projects</a>
            <div className="border-l border-gray-375 h-5"></div>
            <a href="#contact" className="hover:underline">Contact</a>
            </nav>
        </div>
        </section>

        {/* Photo Credits */}
        <div className="absolute top-2 right-4 text-sm text-gray-500">
            Photo: <i> Aurora at Pine Mountain </i> by Calvin Ajizian
        </div>

        {/* About Section */}
        <section id="about" className="bg-cool-black text-white py-30 px-70"
          style={{
            backgroundImage: "linear-gradient(to bottom, black, #0f1010 50px, #0f1010 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100px",
            backgroundColor: "#0f1010", // fallback solid bg
          }}>
            <h1 className="text-5xl font-bold mb-20 text-center">About Me</h1>
            {/* Intro */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left max-w-5xl mx-auto mb-16 gap-8">
                <img
                src="/me.jpg"
                alt="Headshot of Josh Jilot"
                className="w-40 h-40 rounded-full object-cover object-left shadow-lg"
                />
                <p className="text-lg leading-relaxed">
                Hi! I'm Josh, a software engineering student passionate about clean code, full-stack development, and turning ideas into practical solutions.
                </p>
            </div>

            {/* Bio + Skills Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
                <div>
                <h3 className="text-2xl font-semibold mb-2">Bio</h3>
                <p>
                    I love learning new technologies, building meaningful projects, and collaborating on creative solutions. Outside of coding, I enjoy stargazing, photography, and tinkering with side projects.
                </p>
                </div>
                <div>
                <h3 className="text-2xl font-semibold mb-2">Skills</h3>
                <ul className="list-disc list-inside">
                    <li>JavaScript / TypeScript</li>
                    <li>React & Tailwind</li>
                    <li>Python & Flask</li>
                    <li>SQL / SQLite</li>
                    <li>Swift & iOS development</li>
                </ul>
                </div>
            </div>

            {/* Language Proficiency Bar */}
            <div className="max-w-4xl mx-auto text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4">Language Experience</h3>
            <div className="w-full h-6 rounded-full overflow-hidden flex border border-gray-700 bg-gray-800">
                {/* Each div below is a language segment. Adjust width (%) to reflect your skill level */}
                <div className="bg-aurora-magenta" style={{ width: "45%" }} title="Python"></div>
                <div className="bg-aurora-green" style={{ width: "35%" }} title="C/C++"></div>
                <div className="bg-aurora-purple" style={{ width: "11%" }} title="SQL"></div>
                <div className="bg-aurora-yellow" style={{ width: "5%" }} title="JavaScript"></div>
                <div className="bg-aurora-blue" style={{ width: "4%" }} title="Other"></div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center mt-4 text-sm text-gray-300 gap-4">
                <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-magenta"></span> Python</div>
                <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-green"></span> C/C++</div>
                <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-purple"></span> SQL</div>
                <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-yellow"></span> JavaScript</div>
                <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-blue"></span> Other</div>
            </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-cool-gray py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Project 1 */}
            <div className="border rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-50 flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">PatternAuth</h3>
                <p className="text-gray-700 mb-2">
                Three-factor authentication system with iOS + web integration.
                </p>
                <div className="mt-4 space-y-3">
                <p className="text-gray-600">
                    This project implements three-factor authentication using password, Face ID, and pattern-based login. Built with SwiftUI, FastAPI, SQLite, and React.
                </p>
                <a
                    href="https://github.com/yourusername/patternauth"  /* Replace with your GitHub link */
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                <img
                src="/images/patternauth.png"  /* Replace with your project image */
                alt="PatternAuth project"
                className="w-full h-auto rounded"
                />
            </div>
            </div>

            {/* Project 2 */}
            <div className="border rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-50 flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">MyPortfolio</h3>
                <p className="text-gray-700 mb-2">
                Responsive portfolio site built with Next.js and Tailwind CSS.
                </p>
                <div className="mt-4 space-y-3">
                <p className="text-gray-600">
                    This personal website showcases my projects, skills, and experience. Built using Next.js and styled with Tailwind CSS.
                </p>
                <a
                    href="https://github.com/yourusername/myportfolio"  /* Replace with your GitHub link */
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                <img
                src="/images/portfolio.png"  /* Replace with your project image */
                alt="MyPortfolio project"
                className="w-full h-auto rounded"
                />
            </div>
            </div>

            {/* Project 3 */}
            <div className="border rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-50 flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">PatternAuth</h3>
                <p className="text-gray-700 mb-2">
                Three-factor authentication system with iOS + web integration.
                </p>
                <div className="mt-4 space-y-3">
                <p className="text-gray-600">
                    This project implements three-factor authentication using password, Face ID, and pattern-based login. Built with SwiftUI, FastAPI, SQLite, and React.
                </p>
                <a
                    href="https://github.com/yourusername/patternauth"  /* Replace with your GitHub link */
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                <img
                src="/images/patternauth.png"  /* Replace with your project image */
                alt="PatternAuth project"
                className="w-full h-auto rounded"
                />
            </div>
            </div>

            {/* Project 4 */}
            <div className="border rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-50 flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">PatternAuth</h3>
                <p className="text-gray-700 mb-2">
                Three-factor authentication system with iOS + web integration.
                </p>
                <div className="mt-4 space-y-3">
                <p className="text-gray-600">
                    This project implements three-factor authentication using password, Face ID, and pattern-based login. Built with SwiftUI, FastAPI, SQLite, and React.
                </p>
                <a
                    href="https://github.com/yourusername/patternauth"  /* Replace with your GitHub link */
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                <img
                src="/images/patternauth.png"  /* Replace with your project image */
                alt="PatternAuth project"
                className="w-full h-auto rounded"
                />
            </div>
            </div>


            {/* Add more projects as needed */}
        </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" className="bg-cool-black py-24 px-6 #838c95 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">
            Feel free to reach out via{" "}
            <a href="mailto:joshjilot@gmail.com" className="text-blue-600 hover:underline">
            joshjilot@gmail.com
            </a>{" "}
            or connect with me on{" "}
            <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-600 hover:underline" target="_blank">
            LinkedIn
            </a>.
        </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-8">
        &copy; {new Date().getFullYear()} Josh Jilot
        </footer>
    </main>
    );
  }