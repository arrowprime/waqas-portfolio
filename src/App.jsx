import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Optionally persist theme in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen`}>
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-2">Sheikh Waqas Kamran</h1>
        <p className="text-center text-lg mb-4">
          Senior Software Engineer | Full Stack Developer
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a
            href="mailto:waqaserable786@gmail.com"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sheikh-waqas-kamran-183aa415b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            LinkedIn
          </a>
          <a 
            href="/cv.pdf" 
            download="Sheikh-Waqas-Kamran-CV.pdf" 
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Download CV
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* About Me */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I'm Sheikh Waqas Kamran, a Berlin-based software engineer with over 7 years of battle-tested experience.
            I don’t just build applications — I craft resilient, scalable systems that power fintech, telecom, and cloud platforms globally.
            My work has driven millions in uptime efficiency and productivity gains. I deliver code that works, scales, and matters.
          </p>
          <p className="mt-2">
            I specialize in full-stack engineering — from backend APIs to front-end polish — with a passion for clean code and product impact.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold">Financial Analytics Dashboard</h3>
              <p>Reduced report generation from 10 minutes to 30 seconds by optimizing SQL queries.</p>
              <p className="text-sm mt-2 text-gray-500">Tools: React, Spring Boot, Azure</p>
            </div>
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold">Telecom API Gateway</h3>
              <p>Scaled to handle 10K+ concurrent requests with zero downtime.</p>
              <p className="text-sm mt-2 text-gray-500">Tools: Node.js, MongoDB, Kubernetes</p>
            </div>
            <div className="p-4 border rounded shadow">
              <h3 className="text-xl font-bold">Airline Check-In App</h3>
              <p>Designed a dynamic passenger boarding flow with React Hooks and REST APIs.</p>
              <p className="text-sm mt-2 text-gray-500">Tools: React, Java, PostgreSQL</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Java, Spring Boot</li>
            <li>React, Angular, TypeScript</li>
            <li>Node.js, Express</li>
            <li>MongoDB, PostgreSQL, SQL</li>
            <li>Azure, AWS, Kubernetes</li>
            <li>CI/CD, Git, Docker</li>
          </ul>
        </section>

        <footer className="text-center text-sm text-gray-400 mt-10">
          Built with React + Tailwind — by Sheikh Waqas Kamran
        </footer>
      </div>
    </div>
  );
};

export default App;