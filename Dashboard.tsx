import React, { useEffect, useRef } from 'react';
import { BarChart, PieChart, GanttChart, ActivitySquare } from 'lucide-react';

const Dashboard: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, []);

  const skills = [
    { name: 'AWS', percentage: 85 },
    { name: 'Azure', percentage: 80 },
    { name: 'GCP', percentage: 70 },
    { name: 'Kubernetes', percentage: 90 },
    { name: 'Terraform', percentage: 85 },
    { name: 'Docker', percentage: 95 },
    { name: 'Jenkins', percentage: 80 },
    { name: 'Ansible', percentage: 75 }
  ];

  return (
    <section id="dashboard" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills Dashboard</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A visual representation of my technical proficiency across different cloud platforms and DevOps tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skills Progress */}
          <div 
            ref={skillsRef}
            className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            <div className="flex items-center mb-6">
              <BarChart className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-slate-800">Technical Proficiency</h3>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm font-medium text-primary">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Distribution */}
          <div 
            ref={projectsRef}
            className="bg-white rounded-lg shadow-md p-6 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300"
          >
            <div className="flex items-center mb-6">
              <PieChart className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-slate-800">Project Distribution</h3>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                {/* Simulated pie chart with CSS */}
                <div className="absolute inset-0 rounded-full border-8 border-[#3CAEA3] border-r-[#0A2463] border-b-[#1A1B41] border-l-[#5D8CAE]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center text-slate-800 font-semibold">
                    24 Projects
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#0A2463] mr-2"></div>
                <span className="text-sm text-slate-700">AWS (40%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#3CAEA3] mr-2"></div>
                <span className="text-sm text-slate-700">Azure (30%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#1A1B41] mr-2"></div>
                <span className="text-sm text-slate-700">GCP (15%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#5D8CAE] mr-2"></div>
                <span className="text-sm text-slate-700">Other (15%)</span>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div 
            ref={experienceRef}
            className="bg-white rounded-lg shadow-md p-6 md:col-span-2 lg:col-span-1 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-600"
          >
            <div className="flex items-center mb-6">
              <GanttChart className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold text-slate-800">Experience Timeline</h3>
            </div>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-0.5 h-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-slate-800">Senior DevOps Engineer</h4>
                  <p className="text-sm text-primary">CloudTech Solutions • 2023 - Present</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Leading cloud architecture and DevOps implementation for enterprise clients.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-0.5 h-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-slate-800">DevOps Engineer</h4>
                  <p className="text-sm text-primary">TechInnovate Inc. • 2022 - 2023</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Implemented CI/CD pipelines and automated infrastructure deployments.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-0.5 h-0 bg-primary"></div>
                </div>
                <div>
                  <h4 className="text-md font-semibold text-slate-800">Cloud Support Associate</h4>
                  <p className="text-sm text-primary">Global Cloud Services • 2021 - 2022</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Provided technical support for cloud infrastructure and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <ActivitySquare className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="text-2xl md:text-3xl font-bold text-slate-800">24+</h4>
            <p className="text-sm text-slate-600">Projects Completed</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <ActivitySquare className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="text-2xl md:text-3xl font-bold text-slate-800">15+</h4>
            <p className="text-sm text-slate-600">CI/CD Pipelines</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <ActivitySquare className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="text-2xl md:text-3xl font-bold text-slate-800">10+</h4>
            <p className="text-sm text-slate-600">Workshops Conducted</p>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
            <ActivitySquare className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="text-2xl md:text-3xl font-bold text-slate-800">5+</h4>
            <p className="text-sm text-slate-600">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;