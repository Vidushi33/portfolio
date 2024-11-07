import {
  AntD,
  BookManagementImage,
  ExpressJs,
  HostingSites,
  JavaScript,
  MaterialUI,
  MongoDb,
  MovieImage,
  NextJs,
  NodeJs,
  ParkingStystemImage,
  PortfolioImage,
  ReactJs,
  RestaurantImage,
  TailwindCss,
  TypeScript,
  VersionControl,
  Zustand,
} from "@Image/index";

export const NAVBAR_ITEMS = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Journey", id: "journey" },
  { name: "Certificate", id: "certificate" },
  { name: "Contact Me", id: "contact" },
];

export const PROJECTS = [
  {
    name: "Personal Portfolio",
    desc: "A modern and responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. This project showcases my skills, projects, and experience as a frontend developer, with a focus on clean design, smooth navigation, and fast performance.",
    image: PortfolioImage,
    skills: "Next.js, TypeScript, Tailwind CSS",
    github_link: "",
    live_demo: "",
  },
  {
    name: "Parking System",
    desc: "Its a parking system project based on MERN Stack technology.This parking system will allot a slots based on the first availability.It fetches the entry and exit timings and calculate the money accordingly.User can pay via cash or online mode.",
    image: ParkingStystemImage,
    skills: "Reactjs, Nodejs, Expressjs, MongoDB",
    github_link: "https://github.com/Vidushi33/Parking-System",
    live_demo: "https://parking-system-rust.vercel.app/",
  },
  {
    name: "Movie Data",
    desc: "It is a project displaying various movies with their data. It is a React.Js based application. Every movie has a different summary that onclick routes to another page.",
    image: MovieImage,
    skills: "Reactjs, React Hook Forms",
    github_link: "https://github.com/Vidushi33/Movie-Data",
    live_demo: "https://movie-data-xi.vercel.app/",
  },
  {
    name: "Book-Company-Backend",
    desc: "It is a back end project for a book company. Technologies used in this project are NodeJs , ExpressJs and MongoDB. It consists of multiple routes having functionalities of GET, POST , PUT and DELETE.",
    image: MovieImage,
    skills: "Nodejs, Expressjs, MongoDB",
    github_link: "https://github.com/Vidushi33/Book-Company-Backend",
  },
  {
    name: "Book Management",
    desc: "This project includes HTML, Bootstrap , CSS and JavaScript.It is basically based on the CRUD operation of JavaScript.We can add, read, modify and delete the book entries according to our convenience and need.",
    image: BookManagementImage,
    skills: "HTML , CSS, Bootstrap, Javascript",
    github_link: "https://github.com/Vidushi33/Book-Management-System",
    live_demo: "https://vidushi33.github.io/Book-Management-System/",
  },
  {
    name: "Restaurant Management Site",
    desc: "It is a responsive restaurant based website created using HTML , CSS and Bootstrap. It is a static front end project.",
    image: RestaurantImage,
    skills: "HTML , CSS, Bootstrap",
    github_link: "https://github.com/Vidushi33/Restaurant-Management-Website",
    live_demo: "https://vidushi33.github.io/Restaurant-Management-Website/",
  },
];

export const SKILLS = [
  { image: JavaScript },
  { image: HostingSites },
  { image: TailwindCss },
  { image: AntD },
  { image: MaterialUI },
  { image: VersionControl },
  { image: NextJs },
  { image: ReactJs },
  { image: Zustand },
  { image: NodeJs },
  { image: ExpressJs },
  { image: MongoDb },
  { image: TypeScript },
];

export const EXPERIENCE = []
