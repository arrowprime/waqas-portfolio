
import React from "react";

function App() {
  return (
    <div className="p-10 font-sans">
      <h1 className="text-4xl font-bold">Sheikh Waqas Kamran</h1>
      <p className="mt-2 text-lg">Senior Software Engineer | Full Stack Developer</p>
      <a
        href="/Waqas_Kamran_CV.pdf"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        download
      >
        Download CV
      </a>
    </div>
  );
}

export default App;
