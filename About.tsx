import React from 'react';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg bg-slate-50 transform transition-transform hover:scale-105">
              <div className="p-8">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  I'm a passionate Cloud Architect and DevOps Engineer with a strong foundation in Mathematics, having completed my BSc in Mathematics. With 2 years of experience at IRT Technologies Pvt Ltd, I've developed expertise in cloud infrastructure, automation, and DevOps practices.

As an IT trainer, I specialize in delivering comprehensive training programs in RHCSA, RHCE, Ansible, Containers, and Cloud technologies at both institutional and industry levels.
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  My expertise lies in automating development workflows, implementing CI/CD pipelines, and architecting secure and scalable cloud solutions that drive business efficiency and innovation.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I'm also dedicated to sharing knowledge through training and mentorship, helping teams adapt to modern DevOps practices and cloud technologies.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Professional Experience</h3>
                  <p className="text-slate-600">
                    2 years of experience working with enterprise-level cloud architectures and DevOps solutions across multiple industries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Certifications</h3>
                  <p className="text-slate-600">
                    Industry-recognized certifications in AWS, Azure, Kubernetes, and other leading cloud and DevOps technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Training Expertise</h3>
                  <p className="text-slate-600">
                    Experience in conducting workshops and training sessions on DevOps practices, cloud migrations, and infrastructure automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
