import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Dashboard />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;