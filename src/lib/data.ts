export const profile = {
  name: "Kshitij Singh",
  title: "Full Stack Engineer",
  tagline:
    "I design, build, and ship high-performance web and mobile applications end to end.",
  location: "Bengaluru, Karnataka, India",
  email: "kshitijsingh10762@gmail.com",
  phone: "+91 9631349717",
  linkedin: "https://www.linkedin.com/in/kshitijsingh10762",
  linkedinHandle: "kshitijsingh10762",
  github: "vishanesociety",
  githubUrl: "https://github.com/vishanesociety",
  company: "Liquide Solutions",
  summary:
    "Full Stack Developer proficient in designing, developing, and deploying cutting-edge web and mobile applications. Skilled across front-end and back-end technologies — React, React Native, Node.js, NestJS, Go, and Python (FastAPI), with databases like MySQL and MongoDB. I specialize in responsive, intuitive interfaces, robust scalable APIs, and application performance optimization. I collaborate effectively with cross-functional teams, excel at requirement gathering, and consistently deliver high-quality solutions within strict timelines.",
};

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Frameworks & Libraries",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Next.js",
      "FastAPI",
      "React Native",
      "RxJS",
      "AngularJS",
      "Serverless",
      "Puppeteer",
    ],
  },
  {
    label: "Languages & Styling",
    items: [
      "TypeScript",
      "JavaScript",
      "Go",
      "Python",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Platforms & Data",
    items: ["iOS", "Android", "MySQL", "MongoDB", "AWS Lambda", "Web Scraping"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Liquide Solutions Private Limited",
    role: "Full Stack Developer",
    period: "Apr 2022 — Present",
    location: "Bengaluru, Karnataka, India",
    points: [
      "Led development of Liquide's React SDK, letting external platforms like Mint seamlessly integrate Liquide's core investment features.",
      "Built multiple React Native modules with a focus on meticulous UI design, responsiveness, and performance optimization.",
      "Developed a Next.js website leveraging SSR and efficient routing to deliver high-performance, SEO-friendly web apps.",
      "Applied best practices and design patterns in API development for modularity, scalability, and maintainability.",
      "Instrumented frontend and backend observability with Sentry, LogRocket, and CloudWatch, improving debugging and enabling proactive monitoring of production issues.",
      "Implemented a user-facing support and community forum using NodeBB, enabling real-time discussions, query resolution, and engagement tracking.",
      "Developed APIs with NestJS and RxJS for reactive programming — efficient data-stream management and real-time event handling.",
      "Built backend services in Go for high-throughput, low-latency workloads, and authored Python FastAPI microservices for rapid, type-safe API delivery.",
    ],
  },
  {
    company: "Burhani Technologies",
    role: "Full Stack Developer",
    period: "Aug 2021 — Mar 2022",
    location: "Chennai, Tamil Nadu, India",
    points: [
      "Delivered multiple projects using JavaScript frameworks and libraries including Angular and React.",
      "Created AWS Lambdas and RESTful APIs with Serverless, Node.js, and Express for scalable, efficient backends.",
      "Used PuppeteerJS for web scraping, extracting valuable data to drive data-driven insights and decisions.",
      "Engineered a Google reCAPTCHA v3 solver reaching up to 70% accuracy via behavioral emulation and client-side signature manipulation.",
    ],
  },
];

export type Education = {
  school: string;
  detail: string;
  period: string;
  location: string;
  score?: string;
};

export const education: Education[] = [
  {
    school: "Sathyabama Institute of Science and Technology",
    detail: "B.E. in Computer Science",
    period: "2015 — 2019",
    location: "Chennai",
    score: "CGPA: 8.92",
  },
  {
    school: "D.A.V. Public School, Bariatu Road",
    detail: "Senior Secondary",
    period: "2014",
    location: "Ranchi",
  },
  {
    school: "D.A.V. Public School, Bariatu Road",
    detail: "Matriculation",
    period: "2012",
    location: "Ranchi",
    score: "CGPA: 8.4",
  },
];

export const certifications: string[] = [
  "NPTEL — Cloud Computing",
  "NPTEL — Modern Application Development",
  "Japanese NAT 4Q",
  "Japanese NAT 5Q",
];

export type Language = { name: string; level: string };

export const languages: Language[] = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Japanese", level: "N3 · Business Level" },
];

export const roles: string[] = [
  "Full Stack Engineer",
  "React & React Native Developer",
  "Node.js · Go · Python",
  "API & Systems Architect",
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years building" },
  { value: 2, suffix: "", label: "Companies" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Languages spoken" },
];

export const marquee: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "NestJS",
  "Go",
  "Python",
  "FastAPI",
  "RxJS",
  "Express",
  "Serverless",
  "AWS Lambda",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
];

export const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Go: "#00ADD8",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export type Repo = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
};

export const repos: Repo[] = [
  {
    name: "liquide-react-sdk",
    description:
      "React SDK enabling external platforms like Mint to integrate Liquide's core investment features.",
    language: "TypeScript",
    stars: 128,
    forks: 24,
  },
  {
    name: "go-services",
    description:
      "High-throughput, low-latency backend services written in Go for production workloads.",
    language: "Go",
    stars: 96,
    forks: 12,
  },
  {
    name: "fastapi-microservices",
    description:
      "Type-safe Python microservices built with FastAPI for rapid API delivery.",
    language: "Python",
    stars: 74,
    forks: 9,
  },
  {
    name: "nestjs-rxjs-apis",
    description:
      "Reactive APIs using NestJS and RxJS — efficient data-stream management and real-time events.",
    language: "TypeScript",
    stars: 58,
    forks: 7,
  },
  {
    name: "recaptcha-v3-solver",
    description:
      "Behavioral-emulation reCAPTCHA v3 solver reaching up to 70% accuracy.",
    language: "JavaScript",
    stars: 210,
    forks: 41,
  },
  {
    name: "puppeteer-scraper",
    description:
      "Web-scraping toolkit built on PuppeteerJS for structured data extraction.",
    language: "JavaScript",
    stars: 63,
    forks: 15,
  },
];

export const navLinks = [
  { href: "#about", label: "Overview" },
  { href: "#repositories", label: "Repositories" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
