import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "February 2024",
      description: "Validates expertise in designing and deploying scalable systems on AWS.",
      image: "https://images.pexels.com/photos/7792805/pexels-photo-7792805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "October 2023",
      description: "Demonstrates skills in implementing DevOps practices on Microsoft Azure.",
      image: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "July 2023",
      description: "Validates skills for Kubernetes administration and deployment.",
      image: "https://images.pexels.com/photos/7792811/pexels-photo-7792811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "April 2023",
      description: "Demonstrates expertise in using Terraform for infrastructure as code.",
      image: "https://images.pexels.com/photos/8470764/pexels-photo-8470764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      name: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "December 2022",
      description: "Validates expertise in designing, developing, and managing Google Cloud solutions.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="certificates" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in cloud technologies and DevOps practices.
          </p>
        </div>

        {/* Desktop Certificates Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white rounded-full p-2">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{cert.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{cert.issuer} • {cert.date}</p>
                <p className="text-slate-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Certificates Carousel */}
        <div className="lg:hidden relative">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="h-48 relative overflow-hidden">
              <img 
                src={certificates[currentIndex].image} 
                alt={certificates[currentIndex].name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-white rounded-full p-2">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {certificates[currentIndex].name}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {certificates[currentIndex].issuer} • {certificates[currentIndex].date}
              </p>
              <p className="text-slate-600">{certificates[currentIndex].description}</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevCertificate}
              className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextCertificate}
              className="p-2 bg-white rounded-full shadow hover:bg-primary hover:text-white transition-colors"
              aria-label="Next certificate"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;