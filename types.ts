export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'cloud' | 'devops' | 'automation';
}