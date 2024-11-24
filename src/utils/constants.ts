import Exp1 from "@Icons/exp1";
import Exp2 from "@Icons/exp2";
import Exp3 from "@Icons/exp3";
import Exp4 from "@Icons/exp4";
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
  PirafyImage,
  ReactJs,
  RestaurantImage,
  StoreImage,
  TailwindCss,
  TypeScript,
  VersionControl,
  Zustand,
} from "@Image/index";

export const NAVBAR_ITEMS = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Journey", id: "journey" },
  { name: "Projects", id: "projects" },
  // { name: "Certificate", id: "certificate" },
  { name: "Contact Me", id: "contact" },
];

export const PROJECTS = [
  {
    name: "Khan Global Studies Store",
    desc: "Developed the KGS Store frontend with responsive UI, dynamic features, and pixel-perfect Figma designs for a seamless user experience.",
    image: StoreImage,
    skills: "Nextjs(App Routing), Tailwind CSS, React Hook Forms, ",
    live_demo: "https://store.khanglobalstudies.com/",
  },
  {
    name: "Pirafy",
    desc: "Developed Pirafy's UI with modern gradients, responsiveness, and optimized code for a seamless user experience.",
    image: PirafyImage,
    skills: "Nextjs(Page Routing), Tailwind CSS",
    live_demo: "https://pirafy.com/",
  },
  {
    name: "Parking System",
    desc: "Developed an entry-exit software for parking facilities, automating slot reservations and enhancing user convenience.",
    image: ParkingStystemImage,
    skills: "Reactjs, Nodejs, Expressjs, MongoDB",
    github_link: "https://github.com/Vidushi33/Parking-System",
    live_demo: "https://parking-system-rust.vercel.app/",
  },
  {
    name: "Movie Data",
    desc: "Fetches data from API , routes using Search Params and books the tickets using a basic form.",
    image: MovieImage,
    skills: "Reactjs, React Hook Forms",
    github_link: "https://github.com/Vidushi33/Movie-Data",
    live_demo: "https://movie-data-xi.vercel.app/",
  },
  {
    name: "Book-Company-Backend",
    desc: "Created a RESTful API with Express.js and MongoDB for CRUD operations on books, authors, and collections.",
    image: "",
    skills: "Nodejs, Expressjs, MongoDB",
    github_link: "https://github.com/Vidushi33/Book-Company-Backend",
  },
  {
    name: "Book Management",
    desc: "Built a JavaScript CRUD app for managing books using HTML, Bootstrap, and CSS.",
    image: BookManagementImage,
    skills: "HTML , CSS, Bootstrap, Javascript",
    github_link: "https://github.com/Vidushi33/Book-Management-System",
    live_demo: "https://vidushi33.github.io/Book-Management-System/",
  },
  // {
  //   name: "Restaurant Management Site",
  //   desc: "Developed a responsive restaurant website using HTML, CSS, and Bootstrap for a static frontend layout.",
  //   image: RestaurantImage,
  //   skills: "HTML , CSS, Bootstrap",
  //   github_link: "https://github.com/Vidushi33/Restaurant-Management-Website",
  //   live_demo: "https://vidushi33.github.io/Restaurant-Management-Website/",
  // },
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

export const EXPERIENCE = [
  {
    icon: Exp1,
    designation: "Junior Software Engineer",
    company: "Khan Global Studies Pvt.Ltd",
    responsibility:
      "Enhanced the e-commerce bookstore with new features and continued functionality development while building a piracy prevention tool website from scratch using Next.js(Page Routing), Tailwind CSS and TypeScript",
  },
  {
    icon: Exp4,
    designation: "Software Engineer Intern",
    company: "Khan Global Studies Pvt.Ltd",
    responsibility:
      "Developed the complete frontend for an e-commerce bookstore, implementing responsive UI, seamless user experience, and API integrations using Next.js(App Routing), Tailwind CSS and TypeScript",
  },
  {
    icon: Exp2,
    designation: "Web Developer",
    company: "Value Plus Consultants Pvt. Ltd.",
    responsibility:
      "Worked on a Superpanel and dynamic Panel frontend and API integration for a no-code platform, enabling users to build custom features and layouts without coding using Nextjs",
  },
  {
    icon: Exp3,
    designation: "Mern Stack Developer",
    company: "Entremax Global Solutions",
    responsibility:
      "Implemented secure authentication and authorization APIs, integrated Razorpay payment gateway, and contributed to UI enhancements to improve user experience.",
  },
];

export const BREAKPOINTS = {
  576: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 35,
  },
  1401: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1601: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
  1800: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
};

export const CERTIFICATES = [
  {image : ""}
]
