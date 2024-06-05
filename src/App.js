import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold text-gray-800">Diwas Mainali</h1>
          <p className="text-xl text-gray-600">Student at UNSW and Web Developer</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a student at the University of New South Wales (UNSW) pursuing my degree in computer science. Alongside my studies, I am passionate about web development and enjoy creating interactive and user-friendly websites.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
              <p className="text-gray-700">Description of project 1 goes here.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
              <p className="text-gray-700">Description of project 2 goes here.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>
              <a href="mailto:diwas.mainali1@gmail.com" className="text-blue-600 hover:underline">
                diwas.mainali1@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/DiwasMainali1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub: DiwasMainali1
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/diwas-mainali/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn: Diwas Mainali
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-600">&copy; 2023 Diwas Mainali. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;