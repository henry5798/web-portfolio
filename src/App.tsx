import React from "react";

const ArrowIcon = () => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline ml-2">
    <path d="M13 5l7 7-7 7" stroke="#e9553c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12h15" stroke="#e9553c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-[#1b1c1c] text-[#eae4e2] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1b1c1c] border-b border-[#2a2a2a] h-16 flex items-center">
        <div className="container mx-auto px-8 flex justify-end">
          <ul className="flex gap-8 text-lg font-semibold">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="h-16" />
      {/* Hero */}
      <section id="hero" className="min-h-[60vh] flex items-center justify-center flex-col select-none">
        <div className="flex flex-col items-center justify-center gap-6 py-24">
          <h1 className="text-4xl font-semibold md:text-5xl text-center leading-tight">
            Hello, I&apos;m <span className="text-[#e9553c]">Henry</span>.
          </h1>
          <h2 className="text-2xl font-normal md:text-2xl text-center text-[#eae4e2]">
            I&apos;m a software engineer.
          </h2>
          <a href="#about" className="block mt-10">
            <button className="border border-[#e9553c] rounded px-7 py-2 text-[#e9553c] hover:bg-[#e9553c]/10 font-semibold transition duration-200 text-lg tracking-wide flex items-center gap-2">
              View my work <ArrowIcon />
            </button>
          </a>
        </div>
      </section>
      {/* About */}
      <section id="about" className="min-h-[40vh] py-20">About Section Placeholder</section>
      {/* Projects */}
      <section id="projects" className="min-h-[60vh] py-20">Projects Section Placeholder</section>
      {/* Contact */}
      <section id="contact" className="min-h-[40vh] py-20">Contact Section Placeholder</section>
      {/* Footer */}
      <footer className="w-full border-t border-[#2a2a2a] py-4 text-center">Footer Placeholder</footer>
    </div>
  );
}

export default App;
