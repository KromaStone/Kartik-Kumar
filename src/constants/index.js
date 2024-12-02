import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  teslaProject,
  portfolioProject,
  sql,
  weatherAppProject,
  threejs,
  angular,
  webExtenstion,
  fitness360Project
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }, {
    title: "Graphic Designer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
]

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Performance Optimization improves site speed by reducing load times, optimizing assets, and employing techniques like caching, compression, and code minification.",
    name: "Performance Optimization",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "API Development and Integration involve creating interfaces to connect software systems, enabling seamless communication and data exchange across applications.",
    name: "API Development and Integration",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Authentication verifies user identity, while authorization determines access rights, ensuring secure and controlled user interactions within systems and applications.",
    name: "Authentication and Authorization",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tesla",
    description:
      "I modified the Tesla website, enhancing its design while preserving legacy. By adding modern elements and improving experience, I aimed to reflect Tesla's spirit while maintaining brand consistency.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: teslaProject,
    source_code_link: "https://github.com/KromaStone/TeslaApp",
    project_live_link: "https://tesla-app-five.vercel.app",
  },

  {
    name: "Portfolio",
    description:
      "I developed a portfolio using React.js, Three.js, and Tailwind CSS, featuring interactive 3D elements that enhance user engagement. It showcases my projects and technical expertise in a visually appealing way",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioProject,
    source_code_link: "https://github.com/KromaStone/Kartik-Kumar",
    project_live_link: "https://kartik-kumar.vercel.app"
  },

  {
    name: "Weather App",
    description:
      "I have developed this web application using Angular, leveraging TypeScript, HTML, and CSS for the front-end implementation. The application integrates a API sourced from RapidAPI.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherAppProject,
    source_code_link: "https://github.com/KromaStone/WeatherApp",
    project_live_link: "https://weather-app-phi-sand.vercel.app"
  },

  {
    name: "Web Extension",
    description:
      "I have developed this web extension using leveraging JavaScript, HTML, and CSS. The Extension Genreate random paswords includion uppercase, lowercase, numbers and charecter.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: webExtenstion,
    source_code_link: "https://github.com/KromaStone/Password-Generator-WE",
    project_live_link: ""
  },

  {
    name: "(Under Development)",
    underProgress: true,
    description:
      "A comprehensive fitness web application offering live video streaming, pre-recorded sessions, personalized diet charts, live classes, and interactive chat features for both users and trainers.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: fitness360Project,
    source_code_link: "https://github.com/KromaStone",
    project_live_link: "https://github.com/KromaStone",
  },
];

export { services, technologies, experiences, testimonials, projects };
