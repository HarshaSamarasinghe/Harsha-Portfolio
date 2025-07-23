
export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  // {
  //   label: "Experience",
  //   href: "#experience",
  // },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export type Skill = {
  name: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "Python"},
      { name: "Java"},
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React"},
      { name: "Node.js"},
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB"},
      { name: "PostgreSQL"},
      { name: "MySQL"},
    ],
  },
  {
    title: "UI Libraries",
    skills: [
      { name: "Chakra UI"},
      { name: "Bootstrap 5"},
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git"},
      { name: "Android Studio"},
      { name: "Eclips IDE"},
      { name: "Postman"},
      { name: "Visual Studio Code"},
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { name: "Canva"},
      { name: "Figma"},
    ],
  },
];

export type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string;
};

// export const experiences: Experience[] = [
//   {
//     company: "Arimac Digital",
//     position: "Software Engineer I",
//     duration: "2025 Feb - Present",
//     description:
//       "Building secure and high-performance Fintech applications using Next.js, React, TypeScript, and Redux. My focus is on developing responsive UIs, managing complex state efficiently, and optimizing performance for seamless financial transactions. I collaborate with cross-functional teams to deliver scalable fintech solutions, ensuring security, compliance, and exceptional user experiences. Passionate about modern web technologies, I prioritize clean, maintainable code to drive innovation in the financial sector.",
//   },
//   {
//     company: "Arimac Digital",
//     position: "Software Engineer Intern",
//     duration: "2024 Aug - 2025 Feb",
//     description:
//       "Worked with Next.js, React, TypeScript, and Redux, building responsive UIs and managing state efficiently. Focused on learning best practices for performance optimization, security, and scalable development while collaborating with teams to deliver seamless financial solutions.",
//   },
// ];
export type Education = {
  place: string;
  position: string;
  duration: string;
  description: string;
};

export const educations: Education[] = [
  {
    place: "Faculty of Computing, Sri Lanka Institute of Information Technology",
    position: "BSc.(Hons) in Software Engineering(Reading)",
    duration: "2023 May - Present",
    description:
      "Final-year undergraduate with hands-on experience in software development, Skilled in problem-solving and modern computing technologies, with a strong foundation in academic research and practical applications.",
  },
  {
    place: "Kegalu Vidyalaya, Kegalle",
    position: "GCE A/L (Biological Science)",
    duration: "2020 - 2022",
    description:
      "Physics - S | Chemistry - S | Biology - S | Genaral English - C",
  },
];
export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Savendra Gardens",
    description:
      "Savendra Gardens is a Hotel reservation management system with all user functionalities and Admin controlls.",
    image: "./img/SavendraGardens.png",
    techStack: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP', 'XAMPP'],
    githubUrl: "https://github.com/HarshaSamarasinghe/Hotel-Reservation-Management-System",
  },
  {
    title: "ScholaHub",
    description:
      "ScholaHub is an Online School Information Management System for handling all the functionalities of students and teachers.",
    image: "./img/ScholaHub.png",
    techStack: ['JSP', 'CSS', 'JavaScript', 'MySQL', 'Java', 'Tomcat 10.1'],
    githubUrl: "https://github.com/HarshaSamarasinghe/ScholaHub",
  },
  {
    title: "SportsZaga",
    description:
      "This web application is designed and developed to manage sports equipments.",
    image: "./img/SportsZaga.png",
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: "https://github.com/HarshaSamarasinghe/SportsZaga",
  },
  // {
  //   title: "Wave Lane UI",
  //   description:
  //     "UI Developed for an ecommerce clothing store with an attractive design.",
  //   image: "./img/Wavelane.jpg",
  //   techStack: ['Figma', 'Photoshop'],
  //   demoUrl: "https://www.figma.com/design/Kh5ONtRUuN1EZdKPRETjhK/Wave-Lane?node-id=0-1&t=RNQuHLCkQYJuleFq-1",
  // },
  // {
  //   title: "Ninu's Luxury Clothing",
  //   description:
  //     "Ecormmerce website developed for a clothing store.",
  //   image: "./img/ninus.jpg",
  //   techStack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
  //   demoUrl: "https://ninus-luxury-clothing.netlify.app/",
  // },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/harsha-samarasinghe",
  github: "https://github.com/HarshaSamarasinghe",
  facebook: "https://www.facebook.com/harsha.samarasinghe.351",
  instagram: "https://www.instagram.com/harsha_25_samarasinghe",
};
