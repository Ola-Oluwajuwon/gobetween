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
    title: "Best Technologies Ltd.",
    shortDescription:
      "Redesigned and developed the website for a leading digital transformation company.",
    category: "Web Design and Development",
    image: "/portfolio/portfolio-01-best-tech.png",
    featured: true,
    liveUrl: "https://app.besttechnologiesltd.com/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    duration: "2 months",
    role: "Frontend Developer Intern",
    screenshots: [
      "/portfolio/portfolio-01-best-tech-01.png",
      "/portfolio/portfolio-01-best-tech-02.png",
      "/portfolio/portfolio-01-best-tech-03.png",
    ],
    fullDescription:
      "Best Technologies Ltd. is a digital transformation company in Ibadan. The company helps businesses leverage cutting-edge technology and AI to achieve sustainable growth. The platform I built for them showcases services including web development, mobile apps, AI integration, digital marketing, and digital trainings while featuring a robust portfolio system and client testimonials.",
    challenge:
      "Best Technologies Ltd. needed a modern, user-friendly website to effectively showcase their diverse range of digital transformation services and projects. The existing site was outdated, WordPress-based, and did not adequately represent the company’s expertise anymore.",
    solution:
      "Developed a sophisticated multi-service platform featuring an intuitive service catalog, dynamic portfolio showcase, integrated contact forms, and comprehensive case studies. The platform uses modern web technologies to provide fast, responsive experiences while showcasing the company's expertise through real-world projects and client testimonials. I also implemented SEO best practices to enhance online visibility and user engagement tracking for continuous improvement.",
    outcome:
      "Successfully created a central hub that attracts and converts potential clients, showcases diverse project portfolio, and positions Best Technologies Ltd. as a leading digital transformation partner. The platform effectively communicates complex technical services through clear, engaging content and visual design.",
  },
  {
    id: "ourproperty",
    title: "Our Property NG",
    shortDescription:
      "Joined a hub of 12 technical team to build a comprehensive estate management solution startup.",
    category: "Property Tech",
    image: "/portfolio/portfolio-05-ourproperty.png",
    featured: true,
    liveUrl: "https://ourproperty.ng/",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Mobile Apps",
      "Cloud Storage",
      "Payment Integration",
    ],
    duration: "1 month",
    role: "Next.js Developer",
    screenshots: [
      "/portfolio/portfolio-05-ourproperty.png",
      "/portfolio/portfolio-05-ourproperty-01.png",
      "/portfolio/portfolio-05-ourproperty-02.png",
    ],
    fullDescription:
      "Our Property NG is a comprehensive property technology platform designed to digitize and automate real estate and property management operations across Nigeria. The software serves property managers, developers, and hospitality managers with features including tenant management, payment automation, custom branding, mobile apps, and analytics—currently managing 1.65M+ properties across 5,700+ companies.",
    challenge:
      "The Founder and Project Manager needed more developers to accelerate the development of the product prototype to meet MVP deadlines. The challenge was to quickly onboard and integrate new developers into an existing agile team, ensuring they understood the complex requirements of property management software while maintaining high code quality and collaboration within the team.",
    solution:
      "Built a fully customizable cloud-based platform with role-based access control, automated payment collection, custom domain integration, mobile applications for tenants and managers, visitor management systems, and comprehensive dashboards. The platform includes features for property listings, tenant onboarding, maintenance tracking, document management, and real-time notifications.",
    outcome:
      "Transformed property management operations for thousands of Nigerian businesses, managing over 1.65 million properties across 5,700+ offices. The platform reduced administrative overhead by 70%, automated rent collection with instant notifications, provided clients with branded experiences, and scaled efficiently across property managers, developers, and hospitality businesses.",
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
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "Wikidata API",
      "CSS3",
    ],
    duration: "1 week (Hackathon Project)",
    role: "Fullstack Developer",
    screenshots: [
      "/portfolio/portfolio-04-opensource-01.png",
      "/portfolio/portfolio-04-opensource-03.png",
      "/portfolio/portfolio-04-opensource-02.png",
    ],
    fullDescription:
      "The Supreme Court Cases (SCC) Web App is an open-source platform providing a comprehensive, searchable database of Supreme Court cases in Ghana. Built for Global Open Initiative Foundation (GOiF), it queries Wikidata to provide detailed case information including citations, courts, judges, and majority opinions.",
    challenge:
      "Legal professionals, students, and citizens in Ghana lacked easy access to Supreme Court case information. Existing resources were fragmented, difficult to search, and not optimized for modern web experiences, creating barriers to legal research and transparency.",
    solution:
      "(Under the supervision of the Wikidata Community): worked in a team of 30 technical members to build a user-friendly web application that integrates with the Wikidata API to fetch and display Supreme Court Case data. Implemented advanced search functionality, filtering options, and detailed case views to enhance usability. The platform features a responsive design for accessibility across devices and includes documentation for future contributions.",
    outcome:
      "We contributed to creating an accessible platform that democratizes access to legal information in Ghana. The open-source nature allows continuous community improvement while providing fast, accurate search results with detailed case information that supports legal research and promotes judicial transparency.",
  },
  {
    id: "recipe-finder-app",
    title: "Recipe Finder App",
    shortDescription:
      "Food recipe finder that helps users discover and save recipes from various cuisines.",
    category: "Food Recipe Finder",
    image: "/portfolio/portfolio-06-recipe.png",
    featured: true,
    liveUrl: "",
    technologies: [
      "Expo Go",
      "React Native",
      "TypeScript",
      "CSS-in-JS",
      "RESTful APIs",
      "ExpressJS",
      "Supabase",
      "Neon",
    ],
    duration: "2 months",
    role: "Mobile App & Backend Developer",
    screenshots: [
      "/portfolio/portfolio-06-recipe-01.png",
      "/portfolio/portfolio-06-recipe-02.png",
      "/portfolio/portfolio-06-recipe-03.png",
    ],
    fullDescription:
      "The Recipe Finder App is a mobile application that helps food enthusiasts discover, and save recipes from various cuisines around the world. The app features a user-friendly interface for searching recipes by ingredients, cuisine type, dietary preferences, and cooking time. Users can create personal recipe collections, rate recipes, and share their favorite dishes with friends.",
    challenge:
      "Food lovers often struggle to find recipes that match their dietary needs and preferences.",
    solution:
      "Developed a device-agnostic mobile app using React Native and Expo Go that integrates with multiple recipe APIs to provide a vast database of recipes. Implemented advanced search filters, user authentication for personalized recipe collections.",
    outcome:
      "The Recipe Finder App was successfully completed, but was not deployed. The app however, has the potential of helping users discover and save recipes tailored to their dietary needs and preferences.",
  },
  {
    id: "best-in-print-academy",
    title: "Best In Print Academy",
    shortDescription:
      "Built an educational platform offering skill acquisition programs in printing technology with WordPress.",
    category: "Print Technology Education",
    image: "/portfolio/portfolio-04-bestinprintacademy.png",
    featured: true,
    liveUrl: "https://bestinprintacademy.com/",
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Custom Plugins",
      "LearnDash",
      "MySQL",
    ],
    duration: "2 weeks",
    role: "Web Designer & Developer",
    screenshots: [
      "/portfolio/portfolio-04-bestinprintacademy.png",
      "/portfolio/portfolio-04-bestinprintacademy-01.png",
      "/portfolio/portfolio-04-bestinprintacademy-02.png",
    ],
    fullDescription:
      "Best In Print Academy (BIPA) bridges the knowledge gap in the African printing industry through comprehensive skill acquisition programs in printing technology. The platform provides course catalogs, virtual workshops, certification programs, and resource materials for students pursuing careers in print technology and design.",
    challenge:
      "BIPA needed an online platform to deliver educational content and certification programs to students and to establish their online presence across Africa. The challenge was to create an engaging, user-friendly website that could handle course management, student enrollment, resource distribution, and workshops.",
    solution:
      "Developed a WordPress-based platform that established BIPA's online presence and implemented student enrollment systems.",
    outcome:
      "Successfully launched the Best In Print Academy website, providing a centralized hub for students to access resources and enrolment instructions. The platform enhanced BIPA's visibility in the printing education sector and facilitated skill development for aspiring print technology professionals across Africa.",
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Excel Integration",
      "PostgreSQL",
      "NestJS & Node.js",
    ],
    duration: "2 months",
    role: "Frontend Developer",
    screenshots: [
      "/portfolio/portfolio-02-subeb.png",
      // "/api/placeholder/1200/800",
      // "/api/placeholder/1200/800",
    ],
    fullDescription:
      "SUBEB is a comprehensive result management platform designed to help government schools at state level in Nigeria (State Universal Basic Education Boards). Features include automated result uploads, performance tracking, and academic reporting. The system provides a secure, centralized dashboard for managing student results across multiple classes, terms, and subjects for each state.",
    challenge:
      "Schools and educational institutions were managing student results using scattered spreadsheets, leading to data inconsistencies, manual errors, security concerns, and difficulty tracking performance trends across terms and classes by the SUBEB body.",
    solution:
      "Built a secure web platform with role-based access control, bulk result upload functionality, real-time validation, automated report generation, and comprehensive analytics dashboard to guide state governments to make data-driven decisions about public schools.",
    outcome:
      "Transformed result management from manual spreadsheets to an automated, secure system. Schools can now upload results 5x faster, and SUBEB officers can track performance trends in real-time, generate instant reports, and maintain complete data security with automatic backups and encryption.",
  },
  {
    id: "smarteduhub",
    title: "Smart Edu Hub",
    shortDescription:
      "Modern educational platform streamlining learning, collaboration, and resource management for institutions.",
    category: "Education Technology",
    image: "/portfolio/portfolio-05-smarteduhub.png",
    featured: false,
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
    featured: false,
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
