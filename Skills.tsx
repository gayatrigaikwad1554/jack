import React from 'react';
import { Server, Cloud, Lock, GitBranch, Database, Settings, Terminal, FileCode } from 'lucide-react';

interface SkillProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  description: string;
}

const SkillCard: React.FC<SkillProps> = ({ icon, name, level, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
      </div>
      
      <div className="mb-4">
        <div className="h-2 bg-slate-200 rounded-full">
          <div 
            className="h-full bg-primary rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-slate-500 mt-1">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
      
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      name: "Cloud Architecture",
      level: 90,
      description: "Designing scalable, resilient cloud infrastructures on AWS, Azure, and GCP."
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      name: "CI/CD Pipelines",
      level: 85,
      description: "Building automated deployment pipelines with Jenkins, GitHub Actions, and GitLab CI."
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      name: "Infrastructure as Code",
      level: 80,
      description: "Automating infrastructure deployment with Terraform, CloudFormation, and Ansible."
    },
    {
      icon: <Terminal className="h-6 w-6 text-primary" />,
      name: "Containerization",
      level: 75,
      description: "Containerizing applications with Docker and orchestrating with Kubernetes."
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      name: "Security & Compliance",
      level: 70,
      description: "Implementing security best practices and compliance controls in cloud environments."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      name: "Database Management",
      level: 65,
      description: "Working with various database services including RDS, DynamoDB, and Cosmos DB."
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      name: "Configuration Management",
      level: 85,
      description: "Managing configurations with Ansible, Chef, and Puppet across large infrastructures."
    },
    {
      icon: <FileCode className="h-6 w-6 text-primary" />,
      name: "Scripting & Automation",
      level: 80,
      description: "Creating automation scripts with Python, Bash, and PowerShell."
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My toolbox includes a range of technologies and methodologies that enable me to deliver efficient, 
            scalable, and secure cloud solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              name={skill.name}
              level={skill.level}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;