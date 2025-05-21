import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Gayatri Gaikwad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-800 leading-tight">
                <span className="block">Gayatri Gaikwad</span>
                <span className="text-primary text-3xl md:text-5xl">DevOps Engineer & Cloud Architect</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Transforming infrastructure challenges into seamless, scalable solutions with automation and cloud expertise
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mb-12">
                <a
                  href="#about"
                  className="px-6 py-3 bg-primary text-white rounded-md font-semibold transition-all hover:bg-primary-dark hover:shadow-lg"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-primary text-primary rounded-md font-semibold transition-all hover:bg-primary/5"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          <div className="animate-bounce mt-16 hidden md:block text-center">
            <a href="#about" className="text-slate-500 hover:text-primary transition-colors">
              <ArrowDown className="mx-auto h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;