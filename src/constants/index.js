// import {  akij,bl, cantonment, shopify, starbucks, tesla } from "../Asset/images";
import akij from '../Asset/images/akij.jpg'
import cantonment from '../Asset/images/cantonment.jpg'
import bl from '../Asset/images/bl.jpg'
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  
  nodejs,
  pricewise,
  react,
  redux,
   
  snapgram,
  summiz,
  tailwindcss,
  threads,
  
} from "../Asset/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Secondary School Certificate",
    company_name: "Akij Collegiate School",
    icon: akij,
    iconBg: "#accbe1",
    date: "March 2016 - April 2018",
    points: [
      "Achieved exceptional results in academic coursework and examinations.",
      "Participated in extracurricular activities, fostering teamwork and leadership skills.",
      "Demonstrated proficiency in various subjects, including mathematics, science, and languages.",
      "Engaged in community service projects, contributing positively to society.",
    ],
  },
  {
    title: "Higher Secondary School Certificate",
    company_name: "Cantonment College Jashore",
    icon: cantonment,
    iconBg: "#fbc3bc",
    date: "Jun 2018 - Feb 2020",
    points: [
        "Achieved outstanding results in academic studies and examinations.",
        "Participated actively in extracurricular activities, honing leadership and teamwork skills.",
        "Demonstrated proficiency in a variety of subjects, including science, mathematics, and humanities.",
        "Engaged in community service initiatives, contributing positively to the local community.",
    ],
  },
  {
    title: "Statistics(Honor's)",
    company_name: "Khulna BL College",
    icon: bl,
    iconBg: "#b7e4c7",
    date: "Jan 2021 - current",
    points: [
        "Studying advanced statistical methods and theories to analyze and interpret data effectively.",
        "Engaging in research projects and data analysis tasks to gain practical experience.",
        "Collaborating with peers and faculty members on academic projects and assignments.",
        "Applying statistical techniques to real-world scenarios and problem-solving exercises.",
    ],
  },
  
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/nayon117",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/hasibul-hasan-nayon-3b35362a3/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Donation Campaign Platform",
    description:
      " Developed a donation campaign platform using React and TailwindCSS. The platform facilitates quick and secure donations to various charitable causes, allowing users to discover and support initiatives effortlessly.",
     link: "https://guileless-centaur-9a89fe.netlify.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Bistro Boss",
    description:
      'Developed a restaurant website using React, Tailwind CSS, Node.js, Express, and MongoDB. The platform provides a seamless experience for users to explore the restaurants menu, place orders, and discover special offers. Implemented secure payment features for online transactions.',
    link: "https://bistro-boss-c.web.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Automotive Gearup",
    description:
      "Welcome to our automotive website, where you can explore a wide range of car brands, view car details, update car listings, and shop for your dream car.",
    link: " https://automotive-gearup.web.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "FitZen",
    description:
      "FitZen is a dynamic Yoga and Fitness Retreats event management website, offering users the ability to discover, book, and review wellness retreats, all with a best user experience and secure authentication",
    link: "https://bespoke-tulumba-33a298.netlify.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Food Unity",
    description:
      "Food Unity is a platform aimed at connecting individuals or organizations with surplus food to those in need. The project focuses on reducing food waste and addressing hunger by providing a user-friendly interface to share and request food items.",
    link: "https://food-unity-client.web.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Skillify",
    description:
      "Skillify is an advanced e-learning platform designed to offer a seamless learning experience. With a blend of user-centric features and a rich interface, it caters to both students and teachers, providing a conducive environment for learning and teaching.",
    link: " https://skillify-client.web.app/",
  },
];
