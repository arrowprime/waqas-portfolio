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
          href="mailto:you@example.com"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com"
          className="bg-gray-200 px-4 py-2 rounded"
        >
          LinkedIn
        </a>
        <a
          href="/Waqas_Kamran_CV.pdf"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Download CV
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="mb-2">
          I'm a Berlin-based Senior Software Engineer with over 7 years of hands-on experience in building scalable full-stack applications.
          From optimizing financial systems at QNB to engineering resilient telecom APIs at Ooredoo, I've delivered reliable, high-performance solutions across fintech and telecom domains.
        </p>
        <p>
          My technical stack spans Java, Spring Boot, Angular, React, and cloud-native platforms like Azure and AWS. I care deeply about clean code,
          agile collaboration, and meaningful product impact. Let's build something great together.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded shadow">
            <h3 className="font-semibold mb-1">Financial Analytics Dashboard</h3>
            <p className="text-sm mb-2">
              Reduced report generation time from 10 mins to 30 secs by optimizing SQL queries.
            </p>
            <p className="text-xs text-gray-600">Tools: React, Spring Boot, Azure</p>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="font-semibold mb-1">Telecom API Gateway</h3>
            <p className="text-sm mb-2">
              Scaled to handle 10K+ concurrent requests with zero downtime.
            </p>
            <p className="text-xs text-gray-600">Tools: Node.js, MongoDB, Kubernetes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;