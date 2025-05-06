'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

function ShimmerTitle({ text, className = "" }) {
  return (
    <h1
      className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#c82087] via-[#8821ad] via-[#187795] via-[#43cc88] to-[#dbb957] bg-clip-text text-transparent animate-shimmer ${className}`}
    >
      {text}
    </h1>
  );
}

export default function Home() {
  const projectsRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && projectsRef.current && window.VANTA?.WAVES) {
      const effect = window.VANTA.WAVES({
        el: projectsRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x17633d,
        shininess: 0.25,
        waveHeight: 20,
        waveSpeed: 0.25,
        zoom: 1.2,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" strategy="beforeInteractive" />

      <main className="scroll-smooth">

        {/* Hero Section */}
        <section
          id="home"
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/observatory-fixed.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/00" />

          {/* Social Icons */}
          <div className="absolute top-4 left-4 z-50 group">
            <a href="/resume-tmp.pdf" target="_blank" rel="noopener noreferrer">
              <img
                src="/file.svg"
                alt="Download Resume"
                className="w-8 h-8 sm:w-10 sm:h-10 invert hover:rotate-12 hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-700 pointer-events-none whitespace-nowrap">
                Resume
              </span>
            </a>
          </div>

          {/* Top Center Icons */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-6 sm:space-x-10">
            {/* LinkedIn */}
            <div className="relative group">
              <a href="https://linkedin.com/in/josh-jilot-4620472b2/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/linkedin-fixed.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 sm:w-10 sm:h-10 invert hover:scale-110 transition-transform duration-200"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 sm:mt-2 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-700 pointer-events-none">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* GitHub */}
            <div className="relative group">
              <a href="https://github.com/jjjilot" target="_blank" rel="noopener noreferrer">
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-8 h-8 sm:w-10 sm:h-10 invert hover:scale-110 transition-transform duration-200"
                />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 sm:mt-2 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-700 pointer-events-none">
                  GitHub
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="relative group">
              <a href="mailto:joshjilot@gmail.com" target="_blank" rel="noopener noreferrer">
                <EnvelopeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:scale-110 transition-transform duration-200" />
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 sm:mt-2 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-700 pointer-events-none">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* Hero Text */}
          <div className="relative z-10 h-full flex flex-col justify-start items-center text-center text-white px-4 pt-40 sm:pt-64"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
            <h1 className="text-5xl sm:text-8xl font-bold mb-4">Josh Jilot</h1>
            <nav className="mt-6 flex flex-wrap justify-center items-center gap-y-2 gap-x-2 sm:gap-x-8 text-lg sm:text-xl">
              <a href="#about" className="hover:underline">About</a>
              <span>|</span>
              <a href="#projects" className="hover:underline">Projects</a>
              <span>|</span>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </section>

        {/* Photo Credits */}
        <div className="absolute top-2 right-4 text-xs sm:text-sm text-gray-500">
          Photo: <i>Aurora at Pine Mountain</i> by Calvin Ajizian
        </div>

        {/* About Section */}
        <section
          id="about"
          className="bg-cool-black text-white py-20 px-4 sm:px-8 md:px-16 lg:px-36 xl:px-70"
          style={{
            backgroundImage: "linear-gradient(to bottom, black, #0f1010 50px, #0f1010 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100px",
            backgroundColor: "#0f1010",
          }}
        >
          <ShimmerTitle text="About Me" className="mt-10 mb-20 text-center" />

          <div className="px-4 sm:px-2 md:px-4 lg:px-8 xl:px-16">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mx-auto mb-16 gap-8">
              <img src="/me.jpg" alt="Headshot of Josh Jilot" className="w-60 h-60 rounded-full object-cover object-left shadow-lg border-2 [border-color:#43cc88]" />
              <p className="text-lg leading-relaxed text-gray-400">
                My name is Josh Jilot and I am a computer science student at the University of Oregon. Programming has always been
                a passion of mine, but when I'm not coding, I find time to do other fun things. In my free time, I enjoy camping,
                playing music with various instruments, and being better than other people at online games. No matter what I'm
                doing, I can always find enjoyment in getting to know the people around me.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto mb-16 max-w-6xl">
            <div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2 tracking-widest font-light">Programming Passion</h3>
              <p className="leading-relaxed text-base sm:text-md">
                <br />
                From programming an army of Sparki robots to sing the Tetris theme song in high school to building this
                entire website in a language brand-new to me, I have always been up to the challenge of a new programming project.
                <br />
                <br />
                As I worked my way through my Computer Science degree as a Duck, I solidified my enjoyment for programming while
                discovering an appetite to craft code that helps those around me.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2 tracking-widest font-light">Coding Experience</h3>
              <p className="leading-relaxed text-base sm:text-md">
                <br />
                My coding journey began in Python (don't they all), where I learned OOP, basic data structures and algorithms, and
                resolved my first merge conflict. Eventually, I moved on to C/C++, introducing me to the world of memory management
                and the essentials of computer and OS architecture.
                <br />
                <br />
                As I became an upperclassman, I found myself exploring new concepts like web dev and database managament. I also
                grew increasingly interested in many aspects of computer science—from machine learning to simulations and modelling.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center mt-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Language Experience</h3>
            <div className="w-full h-6 rounded-full overflow-hidden flex border border-gray-700 bg-gray-800">
              <div className="bg-aurora-magenta" style={{ width: "45%" }} title="Python"></div>
              <div className="bg-aurora-green" style={{ width: "35%" }} title="C/C++"></div>
              <div className="bg-aurora-purple" style={{ width: "11%" }} title="SQL"></div>
              <div className="bg-aurora-yellow" style={{ width: "5%" }} title="JavaScript"></div>
              <div className="bg-aurora-blue" style={{ width: "4%" }} title="Other"></div>
            </div>

            <div className="flex flex-wrap justify-center mt-4 mb-20 text-sm text-gray-300 gap-4">
              <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-magenta"></span> Python</div>
              <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-green"></span> C/C++</div>
              <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-purple"></span> SQL</div>
              <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-yellow"></span> JavaScript</div>
              <div><span className="inline-block w-3 h-3 mr-1 rounded bg-aurora-blue"></span> Other</div>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-lg sm:text-2xl font-semibold mb-2 tracking-widest font-light">The (Inter)personal Touch</h3>
            <p className="leading-relaxed text-base sm:text-md mb-10">
              <br />
              As I graduated from solo projects to working in a team, I discovered an entirely new side of programming: a
              social experience that I enjoyed even more. Through all my work experience, I have enjoyed the tasks
              and roles that allow me to work with and get to know my coworkers. Embracing the collaborative aspects of programming, from
              creating intermodular code to bonding as a team during scrums, has added a social layer to my workflow that I thrive in.
              <br />
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative overflow-hidden py-24 px-6 text-center min-h-screen">
          <div ref={projectsRef} className="absolute inset-0" style={{ zIndex: 0 }} />

          <div className="relative z-10" style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)" }}>
            <h2 className="text-5xl font-semibold mb-8 text-white">Projects</h2>
            <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Project 1 */}
              <div className="rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-600 flex flex-col md:flex-row items-center md:items-start bg-cool-gray bg-opacity-40 backdrop-blur-sm">
                <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">PatternAuth</h3>
                  <p>Cross-platform authentication system combining password, Face ID, and gesture recognition, built with SwiftUI, React, and FastAPI.</p>
                <div className="mt-4 space-y-3">
                    <a
                      href="https://github.com/jjjilot/PatternAuth"
                      className="hover-shimmer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                </div>
              </div>
                <div className="flex w-full md:w-1/3 mt-6 md:mt-0 overflow-hidden">
                  <img
                    src="patternauth.png"
                    alt="PatternAuth project"
                    className="w-1/2 h-40 object-cover rounded-none m-0 p-0"
                  />
                  <img
                    src="pattern-entry.png"
                    alt="PatternAuth demo"
                    className="w-1/2 h-40 object-cover rounded-none m-0 p-0"
                  />
                </div>
            </div>

            {/* Project 2 */}
              <div className="rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-600 flex flex-col md:flex-row items-center md:items-start bg-cool-gray bg-opacity-40 backdrop-blur-sm">
                <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">PeaceHealth Bike Stats</h3>
                  <p>Real-time bike usage dashboard using Flask, SQLite, and Plotly for PeaceHealth Rides data visualization.</p>
                <div className="mt-4 space-y-3">
                    <a
                      href="https://github.com/jjjilot/PH-Bike-Stats"
                      className="hover-shimmer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                <img
                src="PH-bike-stats.png"
                alt="PH Bike Stats project"
                    className="w-auto h-40 object-contain rounded"
                />
            </div>
            </div>

            {/* Project 3 */}
              <div className="rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-600 flex flex-col md:flex-row items-center md:items-start bg-cool-gray bg-opacity-40 backdrop-blur-sm">
                <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">Personal Site</h3>
                  <p>Responsive personal portfolio built with Next.js and Tailwind CSS. Wait...is this project-ception?</p>
                <div className="mt-4 space-y-3">
                    <a
                      href="https://github.com/jjjilot/personal-site"
                      className="hover-shimmer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                <img
                src="website-pic.png"
                alt="Personal Site project"
                    className="w-auto h-40 object-contain rounded"
                />
            </div>
            </div>

            {/* Project 4 */}
              <div className="rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-600 flex flex-col md:flex-row items-center md:items-start bg-cool-gray bg-opacity-40 backdrop-blur-sm">
                <div className="flex-1 md:mr-6">
                  <h3 className="text-xl font-bold mb-2">OOP Red-Black Tree</h3>
                  <p>Object-oriented implementation of a Red-Black Tree in C++, supporting balanced insertions with automatic rebalancing and color tracking.</p>
                  <div className="mt-4 space-y-3">
                    <a
                      href="https://github.com/jjjilot/CS330/tree/main/homework08"
                      className="hover-shimmer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                  <img
                    src="RBtree.webp"
                    alt="RB Tree project"
                    className="w-auto h-40 object-contain rounded"
                  />
                </div>
              </div>

            {/* Project 5 */}
              <div className="rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-600 flex flex-col md:flex-row items-center md:items-start bg-cool-gray bg-opacity-40 backdrop-blur-sm">
                <div className="flex-1 md:mr-6">
                  <h3 className="text-xl font-bold mb-2">The Duck Bank</h3>
                  <p>Concurrent banking system simulation in C using POSIX threads, featuring account operations with mutex-based synchronization.</p>
                  <div className="mt-4 space-y-3">
                    <a
                      href="https://github.com/jjjilot/CS415/tree/main/project_3"
                      className="hover-shimmer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                  <img
                    src="multithreading.jpg"
                    alt="Duck Bank project"
                    className="w-auto h-40 object-contain rounded"
                  />
                </div>
              </div>

            {/* Project 6 */}
            <div className="rounded p-6 shadow-sm text-left cursor-pointer transition-all duration-300 hover:bg-gray-600 flex flex-col md:flex-row items-center md:items-start bg-cool-gray bg-opacity-40 backdrop-blur-sm">
            <div className="flex-1 md:mr-6">
                <h3 className="text-xl font-bold mb-2">University of Oregon Portfolio</h3>
                <p>A collection of every programming assignment from my four years at the University of Oregon. From my first Hello World, to my last pull request, the first chapter of my copmuter science journey begins and ends here.</p>
                <div className="mt-4 space-y-3">
                    <a
                      href="https://github.com/jjjilot/UO-CS-classes"
                      className="hover-shimmer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                <img
                src="UOlogo.png"
                alt="UO Classes project"
                    className="w-auto h-40 object-contain rounded"
                />
            </div>
            </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-cool-black py-24 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 tracking-wide leading-relaxed">
            Thanks for visiting my website :) 
            <br />
            Feel free to reach out via{" "}
            <a href="mailto:joshjilot@gmail.com" className="text-blue-600 hover:underline">joshjilot@gmail.com</a> 
            {" "}or connect with me on{" "}
            <a href="https://linkedin.com/in/josh-jilot-4620472b2/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-cool-black text-center text-sm text-gray-500 py-8">
          &copy; {new Date().getFullYear()} Josh Jilot
        </footer>
      </main>
    </>
  );
}