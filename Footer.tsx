import React from 'react';
import { Cloud, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center gap-2 text-white">
              <Cloud className="h-6 w-6" />
              <span className="font-bold text-xl">Gayatri Gaikwad</span>
            </a>
            <p className="text-slate-400 mt-2 max-w-md">
              DevOps Engineer & Cloud Architect specializing in building scalable, 
              resilient infrastructure and automating development workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#certificates" className="text-slate-400 hover:text-white transition-colors">Certificates</a></li>
                <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1 mt-6 md:mt-0">
              <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-slate-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-r-md font-medium hover:bg-primary-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-slate-400 mt-2">
                Get updates on my latest projects and workshops.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Gayatri Gaikwad. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;