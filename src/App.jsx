import React from 'react';

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
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Download CV
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm a Berlin-based Senior Software Engineer with over 7 years of hands-on experience in
          building scalable full-stack applications. From optimizing financial systems at QNB to
          engineering resilient telecom APIs at Ooredoo, I've delivered reliable, high-performance
          solutions across fintech and telecom domains.
        </p>
        <p className="mt-2">
          My technical stack spans Java, Spring Boot, Angular, React, and cloud-native platforms
          like Azure and AWS. I care deeply about clean code, agile collaboration, and meaningful
          product impact. Let’s build something great together.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4 shadow">
            <h3 className="font-bold text-lg mb-1">Financial Analytics Dashboard</h3>
            <p className="mb-2">
              Reduced report generation time from 10 mins to 30 secs by optimizing SQL queries.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Tools: React, Spring Boot, Azure
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm"
            >
              GitHub (coming soon)
            </a>
          </div>

          <div className="border rounded p-4 shadow">
            <h3 className="font-bold text-lg mb-1">Telecom API Gateway</h3>
            <p className="mb-2">
              Scaled to handle 10K+ concurrent requests with zero downtime.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Tools: Node.js, MongoDB, Kubernetes
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm"
            >
              GitHub (coming soon)
            </a>
          </div>

          <div className="border rounded p-4 shadow">
            <h3 className="font-bold text-lg mb-1">Airline Check-In App</h3>
            <p className="mb-2">
              Delivered real-time baggage tracking and self-check-in features used by thousands.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Tools: Angular, Spring Boot, AWS
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm"
            >
              GitHub (coming soon)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;