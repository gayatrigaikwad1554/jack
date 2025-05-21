import React, { useState } from 'react';
import { ExternalLink, GitBranch, Github, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'cloud' | 'devops' | 'automation';
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Cloud Migration Framework",
      description: "Developed a comprehensive framework for migrating legacy applications to AWS, reducing migration time by 40%.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["AWS", "Terraform", "Docker", "Python"],
      category: "cloud"
    },
    {
      id: 2,
      title: "Automated CI/CD Pipeline",
      description: "Implemented a fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for a microservices architecture.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Jenkins", "Kubernetes", "Docker", "GitOps"],
      category: "devops"
    },
    {
      id: 3,
      title: "Infrastructure Monitoring Suite",
      description: "Created a comprehensive monitoring solution using Prometheus, Grafana, and Alertmanager for cloud infrastructure.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Prometheus", "Grafana", "Alertmanager", "Terraform"],
      category: "devops"
    },
    {
      id: 4,
      title: "Multi-Cloud Disaster Recovery",
      description: "Designed and implemented a disaster recovery solution across AWS and Azure with automated failover capabilities.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["AWS", "Azure", "Terraform", "Python"],
      category: "cloud"
    },
    {
      id: 5,
      title: "Security Automation Framework",
      description: "Built an automated security scanning and remediation framework for container images and cloud resources.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["AWS Security Hub", "Docker", "Bash", "Python"],
      category: "automation"
    },
    {
      id: 6,
      title: "Infrastructure as Code Platform",
      description: "Created a custom platform for managing infrastructure as code across multiple teams and environments.",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Terraform", "GitLab CI", "Go", "Kubernetes"],
      category: "automation"
    }
  ];

  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Recent Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Here are some of the key projects I've worked on, showcasing my expertise in cloud architecture, 
            DevOps practices, and infrastructure automation.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'cloud' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
            onClick={() => setFilter('cloud')}
          >
            Cloud Architecture
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'devops' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
            onClick={() => setFilter('devops')}
          >
            DevOps
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'automation' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
            onClick={() => setFilter('automation')}
          >
            Automation
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 bg-white rounded-full text-slate-800 hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-2 bg-white rounded-full text-slate-800 hover:bg-primary hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {project.category === 'cloud' && <Layers className="h-5 w-5 text-primary mr-2" />}
                  {project.category === 'devops' && <GitBranch className="h-5 w-5 text-primary mr-2" />}
                  {project.category === 'automation' && <Github className="h-5 w-5 text-primary mr-2" />}
                  <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;