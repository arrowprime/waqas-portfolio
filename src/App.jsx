import React from 'react';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-2">Sheikh Waqas Kamran</h1>
      <p className="text-center text-lg mb-4">
        Senior Software Engineer | Full Stack Developer
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <a
          href="mailto:waqaserable786@gmail.com"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sheikh-waqas-kamran-183aa415b/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          LinkedIn
        </a>
        <a
          href="/CV.pdf"
          download
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          Download CV
        </a>
      </div>

      {/* About Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm a Berlin-based Senior Software Engineer with over 7 years of hands-on experience
          in building scalable full-stack applications. From optimizing financial systems at QNB
          to engineering resilient telecom APIs at Ooredoo, I've delivered high-performance solutions.
        </p>
        <p className="mt-2">
          My tech stack: Java, Spring Boot, Angular, React, Azure, AWS. I care about clean code,
          agile collaboration, and product impact.
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Project 1 */}
          <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-1">Financial Analytics Dashboard</h3>
            <p className="text-sm text-gray-700 mb-2">
              Reduced report generation time from 10 mins to 30 secs by optimizing SQL queries.
            </p>
            <p className="text-xs text-gray-500">Tools: React, Spring Boot, Azure</p>
          </div>

          {/* Project 2 */}
          <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-1">Telecom API Gateway</h3>
            <p className="text-sm text-gray-700 mb-2">
              Scaled to handle 10K+ concurrent requests with zero downtime.
            </p>
            <p className="text-xs text-gray-500">Tools: Node.js, MongoDB, Kubernetes</p>
          </div>

          {/* Project 3 (Placeholder for now) */}
          <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-1">[Your Third Project]</h3>
            <p className="text-sm text-gray-700 mb-2">
              Add your third public project here (e.g., GitHub repo or live app).
            </p>
            <p className="text-xs text-gray-500">Tools: React, Express, PostgreSQL</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;