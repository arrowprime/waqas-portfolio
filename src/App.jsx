import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMoreFinance, setShowMoreFinance] = useState(false);
  const [showMoreTelecom, setShowMoreTelecom] = useState(false);
  const [showMoreAirline, setShowMoreAirline] = useState(false);
  const [showMoreSmartContract, setShowMoreSmartContract] = useState(false);
  const [showMoreResumeParser, setShowMoreResumeParser] = useState(false);
  const [showMoreImagePipeline, setShowMoreImagePipeline] = useState(false);

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

            {/* Financial Dashboard */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-1">📊 Financial Analytics Dashboard</h3>
              <p>Built a real-time financial dashboard transforming raw transaction streams into actionable KPIs.</p>
              {showMoreFinance && (
                <p className="mt-2">Reduced report generation time from <strong>10 minutes to 30 seconds</strong> through SQL optimization and caching. Enabled business users to make faster, data-driven decisions.</p>
              )}
              <button onClick={() => setShowMoreFinance(!showMoreFinance)} className="mt-2 text-sm text-blue-600 hover:underline">
                {showMoreFinance ? 'Show less' : 'Read more'}
              </button>
              <p className="text-sm mt-2 text-gray-500">Tech Stack: React, Spring Boot, Azure</p>
            </div>

            {/* Telecom API Gateway */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-1">🌐 Telecom API Gateway</h3>
              <p>Engineered a fault-tolerant gateway handling 10K+ concurrent telecom requests per second.</p>
              {showMoreTelecom && (
                <p className="mt-2">Integrated partner services, added SLA monitoring, and ensured zero-downtime deployments across regions.</p>
              )}
              <button onClick={() => setShowMoreTelecom(!showMoreTelecom)} className="mt-2 text-sm text-blue-600 hover:underline">
                {showMoreTelecom ? 'Show less' : 'Read more'}
              </button>
              <p className="text-sm mt-2 text-gray-500">Tech Stack: Node.js, MongoDB, Kubernetes</p>
            </div>

            {/* Airline Check-In */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-1">✈️ Airline Check-In App</h3>
              <p>Developed a passenger check-in system improving boarding efficiency by 25%.</p>
              {showMoreAirline && (
                <p className="mt-2">Included seat selection, QR boarding passes, and role-based access. Connected to backend services via REST APIs.</p>
              )}
              <button onClick={() => setShowMoreAirline(!showMoreAirline)} className="mt-2 text-sm text-blue-600 hover:underline">
                {showMoreAirline ? 'Show less' : 'Read more'}
              </button>
              <p className="text-sm mt-2 text-gray-500">Tech Stack: React, Java, PostgreSQL</p>
            </div>

            {/* Smart Contract */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-1">🔐 Smart Contract Audit Dashboard</h3>
              <p>Created a tool for analyzing Ethereum smart contracts for gas efficiency and vulnerabilities.</p>
              {showMoreSmartContract && (
                <p className="mt-2">Used Solidity AST parsing and React to highlight audit risks for blockchain engineers.</p>
              )}
              <button onClick={() => setShowMoreSmartContract(!showMoreSmartContract)} className="mt-2 text-sm text-blue-600 hover:underline">
                {showMoreSmartContract ? 'Show less' : 'Read more'}
              </button>
              <p className="text-sm mt-2 text-gray-500">Tech Stack: React, Node.js, Solidity, Ethers.js</p>
            </div>

            {/* Resume Parser */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-1">🤖 AI-Powered Resume Parser</h3>
              <p>Built a resume screening engine using NLP to match candidates with job descriptions.</p>
              {showMoreResumeParser && (
                <p className="mt-2">Reduced manual HR screening by 80%. Enabled auto-tagging, ranking, and summarizing applicant skills.</p>
              )}
              <button onClick={() => setShowMoreResumeParser(!showMoreResumeParser)} className="mt-2 text-sm text-blue-600 hover:underline">
                {showMoreResumeParser ? 'Show less' : 'Read more'}
              </button>
              <p className="text-sm mt-2 text-gray-500">Tech Stack: Python, FastAPI, React, spaCy</p>
            </div>

            {/* Image Pipeline */}
            <div className="p-4 border rounded shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-1">🖼️ Scalable Image Processing Pipeline</h3>
              <p>Designed a cloud-native image service handling millions of uploads daily.</p>
              {showMoreImagePipeline && (
                <p className="mt-2">Reduced bandwidth costs by 40% via WebP optimization and CDN-based lazy loading.</p>
              )}
              <button onClick={() => setShowMoreImagePipeline(!showMoreImagePipeline)} className="mt-2 text-sm text-blue-600 hover:underline">
                {showMoreImagePipeline ? 'Show less' : 'Read more'}
              </button>
              <p className="text-sm mt-2 text-gray-500">Tech Stack: AWS Lambda, S3, Node.js, Docker</p>
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