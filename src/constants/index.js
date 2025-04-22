import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  python,
  java,
  c_sharp,
  angular,
  spring,
  forsim,
  leclerc,
  capgemini,
  demo_sig,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Me contacter",
  },
];

const services = [
  {
    title: "Développement Back End",
    icon: web,
  },
  {
    title: "Développement Front End",
    icon: mobile,
  },
  {
    title: "Mentalité Craftmanship",
    icon: backend,
  },
  {
    title: "Collaboration en agilité",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React Framework",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Framework",
    icon: spring,
  },
  {
    name: "Angular Framework",
    icon: angular,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C#",
    icon: c_sharp,
  },
];

const experiences = [
  {
    title: "Développeur Framework .NET (C#)",
    company_name: "FORSIM",
    icon: forsim,
    iconBg: "#383E56",
    date: "Avr. 2022 - Juin 2022",
    points: [
      "Conception, développement, tests d’une application de sauvegarde optimisée.",
      "Élaboration du cahier des charges.",
      "Approche agile pour la gestion projet",
      "Développements C# & Framework .NET, IHM développée avec le framework WPF",
      "Utilisation de Git & GitLab.",
    ],
  },
  {
    title: "Ingénieur DevOps",
    company_name: "Logilec (Leclerc)",
    icon: leclerc,
    iconBg: "#E6DEDD",
    date: "Déc. 2022 - Sept. 2023",
    points: [
      "Responsable du MCO du code de déploiement continu (Python, Gitlab-CI)",
      "Accompagnement des utilisateurs à l'utilisation de la solution de déploiement continu",
      "Refonte de la solution selon les bonnes pratiques de code en Python",
      "Conception & développement d'une solution de sauvegarde automatisée en utilisant l'API gitlab",
      "Mise en place de d’outils industrialisés (CI/CD : Seeburger, Talend)",
      "Développement sur l'outil de data Talend (ETL)",
      "Recueil du besoin métier",
    ],
  },
  {
    title: "Ingénieur développeur fullstack",
    company_name: "Capgemini PER",
    icon: capgemini,
    iconBg: "#383E56",
    date: "Sept. 2023 - Sept. 2024",
    points: [
      "Conception & développement d’un démonstrateur (POC) d’application web SIG ",
      "Front-end : Angular (TypeScript, HTML, CSS), OpenLayers",
      "Back-end : Laravel (PHP)",
      "Base de données : PostgreSQL",
      "Protocole : API REST",
      "Qualité : ESLint, Insomnia",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SIG sur une architecture web",
    description:
      "Développement d'un POC pour un client du secteur ferroviaire. " +
      "Cette application se reposait sur une architecture client léger web client-serveur. " +
      "Le but ici étant de démontrer la faisabilité de la migration de plusieurs applicatifs " +
      "de type client lourd (à maintenir sur chaque postes de travail) vers client léger " +
      "étant plus simple d'assurer son MCO et son évolution.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "OpenLayers",
        color: "blue-text-gradient",
      },
      {
        name: "GeoServer",
        color: "green-text-gradient",
      },
    ],
    image: demo_sig,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
