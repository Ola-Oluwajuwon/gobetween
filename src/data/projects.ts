export interface Project {
  id: string;
  title: string;
  shortDescription: string; // Max 15 words for cards
  category: string;
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;

  // Detailed information for project detail page
  fullDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  duration: string;
  role: string;
  screenshots: string[]; // Placeholder images for now
}

export const projects: Project[] = [
  {
    id: "best-tech",
    title: "Best Technologies Ltd",
    shortDescription:
      "Enterprise digital transformation platform empowering businesses with AI-driven solutions and services.",
    category: "Web Development",
    image: "/portfolio/portfolio-01-best-tech.png",
    featured: true,
    liveUrl: "https://app.besttechnologiesltd.com/",
    fullDescription:
      "Best Technologies Ltd is a comprehensive digital transformation platform designed to help businesses leverage cutting-edge technology and AI to achieve sustainable growth. The platform showcases services including web development, mobile apps, AI integration, and digital marketing, while featuring a robust portfolio system and client testimonials.",
    challenge:
      "Businesses struggle to find a single, trusted partner that can handle their complete digital transformation journey—from web development to AI integration to digital marketing—while maintaining high quality and innovative solutions.",
    solution:
      "Developed a sophisticated multi-service platform featuring an intuitive service catalog, dynamic portfolio showcase, integrated contact forms, and comprehensive case studies. The platform uses modern web technologies to provide fast, responsive experiences while showcasing the company's expertise through real-world projects and client testimonials.",
    outcome:
      "Successfully created a central hub that attracts and converts potential clients, showcases diverse project portfolio, and positions Best Technologies as a leading digital transformation partner. The platform effectively communicates complex technical services through clear, engaging content and visual design.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "MongoDB",
    ],
    duration: "6 months",
    role: "Full-Stack Developer",
    screenshots: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
    ],
  },
  {
    id: "subeb",
    title: "SUBEB Result Management",
    shortDescription:
      "Automated student result management system for schools with secure uploads and analytics.",
    category: "Education Technology",
    image: "/portfolio/portfolio-02-subeb.png",
    featured: true,
    liveUrl: "https://subeb.besttechnologiesltd.com/",
    fullDescription:
      "SUBEB is a comprehensive result management platform designed to help schools and educational institutions automate result uploads, performance tracking, and academic reporting. The system provides a secure, centralized dashboard for managing student results across multiple classes, terms, and subjects.",
    challenge:
      "Schools and educational institutions were managing student results using scattered spreadsheets, leading to data inconsistencies, manual errors, security concerns, and difficulty tracking performance trends across terms and classes.",
    solution:
      "Built a secure web platform with role-based access control, bulk result upload functionality, real-time validation, automated report generation, and comprehensive analytics dashboard. The system includes workflow management for result approval, audit trails, and encrypted data storage.",
    outcome:
      "Transformed result management from manual spreadsheets to an automated, secure system. Schools can now upload results 5x faster, track performance trends in real-time, generate instant reports, and maintain complete data security with automatic backups and encryption.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Node.js",
      "Excel Integration",
    ],
    duration: "4 months",
    role: "Lead Full-Stack Developer",
    screenshots: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
    ],
  },
  {
    id: "supreme-court-cases",
    title: "Supreme Court Cases",
    shortDescription:
      "Searchable database of Supreme Court cases in Ghana using Wikidata integration.",
    category: "Legal Tech",
    image: "/portfolio/portfolio-04-opensource-01.png",
    featured: true,
    githubUrl: "https://github.com/Sunkanmi1/SCC-WEBAPP",
    fullDescription:
      "The Supreme Court Cases (SCC) Web App is an open-source platform providing a comprehensive, searchable database of Supreme Court cases in Ghana. Built for Global Open Initiative Foundation (GOiF), it queries Wikidata to provide detailed case information including citations, courts, judges, and majority opinions.",
    challenge:
      "Legal professionals, students, and citizens in Ghana lacked easy access to Supreme Court case information. Existing resources were fragmented, difficult to search, and not optimized for modern web experiences, creating barriers to legal research and transparency.",
    solution:
      "Developed a modern, responsive web application with an elegant search interface, real-time search results, comprehensive case data display, and accessibility features. The platform integrates with Wikidata's extensive legal database and presents information in an intuitive, user-friendly format with smooth animations and micro-interactions.",
    outcome:
      "Created an accessible platform that democratizes access to legal information in Ghana. The open-source nature allows continuous community improvement while providing fast, accurate search results with detailed case information that supports legal research and promotes judicial transparency.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "Wikidata API",
      "CSS3",
    ],
    duration: "3 months",
    role: "Frontend Developer",
    screenshots: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
    ],
  },
  {
    id: "best-in-print-academy",
    title: "Best In Print Academy",
    shortDescription:
      "Professional training platform for print technology, design, and publishing courses in Africa.",
    category: "Education",
    image: "/portfolio/portfolio-04-bestinprintacademy.png",
    featured: true,
    liveUrl: "https://bestinprintacademy.com/",
    fullDescription:
      "Best In Print Academy (BIPA) bridges the knowledge gap in the African printing industry through comprehensive skill acquisition programs in printing technology. The platform provides course catalogs, virtual workshops, certification programs, and resource materials for students pursuing careers in print technology and design.",
    challenge:
      "Africa's printing industry faced a significant skills gap with limited access to professional training programs. Aspiring print technologists and designers struggled to find structured, industry-relevant education that combines theoretical knowledge with practical skills.",
    solution:
      "Built a comprehensive educational platform featuring course browsing, online enrollment, resource libraries, virtual workshop scheduling, student portals for progress tracking, and digital certification. The platform connects students with industry experts and provides accessible, quality education in print technology.",
    outcome:
      "Successfully established a central hub for print technology education in Africa, serving hundreds of students annually. The platform reduced barriers to entry in the printing industry, improved skill levels across the sector, and helped students earn recognized certifications that advance their careers.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Custom Plugins",
      "LearnDash",
      "MySQL",
    ],
    duration: "5 months",
    role: "Full-Stack Developer & Technical Lead",
    screenshots: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
    ],
  },
  {
    id: "smarteduhub",
    title: "Smart Edu Hub",
    shortDescription:
      "Modern educational platform streamlining learning, collaboration, and resource management for institutions.",
    category: "Education Technology",
    image: "/portfolio/portfolio-05-smarteduhub.png",
    featured: true,
    githubUrl: "https://github.com/best-technologies/smarteduhub-web-app",
    fullDescription:
      "SmartEduHub is a comprehensive educational platform designed to streamline learning, collaboration, and resource management for students and educators. The system includes user authentication, course management, assignment submission and grading, real-time notifications, discussion forums, messaging, and document management.",
    challenge:
      "Educational institutions needed an integrated platform to manage the complete learning lifecycle—from course creation to assessment—while traditional systems were fragmented across multiple tools, creating inefficiencies and poor user experiences for both students and educators.",
    solution:
      "Developed a unified platform with role-based access for students, teachers, and administrators. Features include intuitive course creation tools, assignment workflows, real-time collaboration features, resource sharing, automated grading assistance, discussion forums, and comprehensive analytics for tracking student progress and engagement.",
    outcome:
      "Created a cohesive learning environment that reduced administrative overhead by 60%, improved student engagement through integrated communication tools, and provided educators with powerful analytics for personalized instruction. The platform now serves multiple institutions with high satisfaction rates.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "Socket.io",
    ],
    duration: "7 months",
    role: "Full-Stack Developer",
    screenshots: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
    ],
  },
  {
    id: "smipay",
    title: "Smipay",
    shortDescription:
      "Digital payment solution simplifying transactions with secure, fast, and reliable processing.",
    category: "Fintech",
    image: "/portfolio/portfolio-03-smipay.png",
    featured: true,
    liveUrl: "https://smipay.vercel.app/",
    githubUrl: "https://github.com/Ola-Oluwajuwon/smipay",
    fullDescription:
      "Smipay is a modern digital payment platform designed to simplify financial transactions with a focus on security, speed, and reliability. The platform provides seamless payment processing with an intuitive user interface optimized for both web and mobile experiences.",
    challenge:
      "Users needed a trustworthy payment solution that combines ease of use with robust security measures. Existing payment platforms often sacrificed user experience for security or vice versa, creating friction in digital transactions and reducing adoption rates.",
    solution:
      "Built a streamlined payment interface using modern web technologies with Next.js for optimal performance. Implemented secure payment processing, real-time transaction tracking, responsive design for all devices, and intuitive user flows that minimize steps while maintaining security protocols.",
    outcome:
      "Delivered a payment platform that balances security and usability, resulting in faster transaction completion times and higher user satisfaction. The responsive design ensures consistent experiences across devices, while robust security measures protect user financial data throughout the payment process.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Payment Gateway APIs",
      "Vercel",
    ],
    duration: "2 months",
    role: "Frontend Developer",
    screenshots: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.id === slug);
export const getAllProjectSlugs = () => projects.map((p) => ({ slug: p.id }));
