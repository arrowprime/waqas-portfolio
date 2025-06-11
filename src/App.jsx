import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-2">Sheikh Waqas Kamran</h1>
      <p className="text-center text-lg mb-4">
        Senior Software Engineer | Full Stack Developer
      </p>

      <div className="flex justify-center gap-4 mb-10">
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
          href="/CV.pdf"
          download
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Download CV
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="mb-2">
          I'm a Berlin-based Senior Software Engineer with over 7 years of hands-on
          experience in building scalable full-stack applications. From optimizing
          financial systems at QNB to engineering resilient telecom APIs at Ooredoo,
          I've delivered reliable, high-performance solutions across fintech and telecom
          domains.
        </p>
        <p>
          My technical stack spans Java, Spring Boot, Angular, React, and cloud-native
          platforms like Azure and AWS. I care deeply about clean code, agile
          collaboration, and meaningful product impact. Let's build something great
          together.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">Financial Analytics Dashboard</h3>
            <p className="text-sm mb-2">
              Reduced report generation time from 10 mins to 30 secs by optimizing SQL
              queries.
            </p>
            <p className="text-xs text-gray-500">Tools: React, Spring Boot, Azure</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">Telecom API Gateway</h3>
            <p className="text-sm mb-2">
              Scaled to handle 10K+ concurrent requests with zero downtime.
            </p>
            <p className="text-xs text-gray-500">
              Tools: Node.js, MongoDB, Kubernetes
            </p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">Airline Check-In App</h3>
            <p className="text-sm mb-2">
              Deployed kiosk-based check-in app with facial recognition for airlines.
            </p>
            <p className="text-xs text-gray-500">Tools: Angular, Java, Firebase</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Frontend: React, Angular, HTML, CSS, JavaScript</li>
          <li>Backend: Java, Spring Boot, Node.js, Express</li>
          <li>Cloud: AWS, Azure</li>
          <li>DevOps: Docker, Kubernetes, GitHub Actions</li>
          <li>Tools: Git, Jira, Postman</li>
        </ul>
      </section>
    </div>
  );
};

export default App;