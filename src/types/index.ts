export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  image?: {
    src: string;
    alt: string;
  };
  github?: string;
  demo?: string;
  featured?: boolean;
  date?: string;
  comingSoon?: boolean;
  highlights?: string[];
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  tech?: string[];
};

export type Education = {
  degree: string;
  school: string;
  location?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  coursework?: string[];
  honors?: string[];
};
