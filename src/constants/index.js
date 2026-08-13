// import css from "../assets/tech/";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import typescript from "../assets/tech/typescript.png";
import git from "../assets/tech/git.png";
import threejs from "../assets/tech/Three.js_Icon.svg.webp";
import javascript from "../assets/tech/javascript.png";
import css from "../assets/tech/bootstrap-social-media-icons-html-css-js-logo-11563293145uql7yehdq3.png";
import html from "../assets/tech/html.png";
import mongodb from "../assets/tech/mongodb.png";
import havi from "../../public/assets/havi.jpg";
import train from "../../public/assets/train.jpg";
import alufco from "../../public/assets/alufco.jpg";
import tasawuk from "../../public/assets/tasawuk.jpg";
import goagyncy from "../../public/assets/goagyncy.jpg";
import merty from "../../public/assets/492190326_122111197868829549_2150472536382309674_n.jpg";

const technologies = [
  // { id: 1, name: "HTML 5", icon: html.src },
  // { id: 2, name: "CSS 3", icon: css.src },
  { id: 3, name: "JavaScript", icon: javascript.src },
  // { id: 4, name: "TypeScript", icon: typescript.src },
  { id: 5, name: "React JS", icon: reactjs.src },
  { id: 6, name: "Tailwind CSS", icon: tailwind.src },
  { id: 7, name: "Redux Toolkit", icon: redux.src },
  { id: 8, name: "Node JS", icon: nodejs.src },
  { id: 9, name: "MongoDB", icon: mongodb.src },
  { id: 10, name: "Three.js", icon: threejs.src },
  { id: 11, name: "Git", icon: git.src },
];

const projects = [
  {
  id:1, 
  img:havi.src,
  title:"Havi RealState",
  type:"Available",
  description:"A modern corporate website combining responsive UI, APIs, reusable components, and interactive 3D.",
  link:"https://www.havirealestate.com/website/home"
},
{
  id:3, 
  img:alufco.src,
  title:"Alufco",
  type:"Available",
  description:"A production-ready company website with a custom admin dashboard, APIs, and interactive 3D product experiences.",
  link:"https://www.alufcoo.com/website/home"
},
{
id:5, 
img:goagyncy.src,
title:"3Go Agyncy",
type:"Available",
description:"A modern marketing agency website built with Next.js, Django, and interactive 3D elements to showcase services and branding.",
link:"https://3go-agency.vercel.app/home"
},
{
  id:4, 
  img:tasawuk.src,
  title:"Tasawuk",
  type:"UnAvailable",
  description:"A scalable multi-store platform with ordering, delivery tracking, notifications, and responsive UI",
  link:"https://www.tasawuk.com/website/home"
},
{
id:2, 
img:train.src,
title:"Train Booking",
type:"UnAvailable",
description:"A responsive train booking platform with schedule search, ticket selection, and a smooth, modern booking experience.",
link:"https://www.trainbooking.com/website/home"
},
{
id:2, 
img:merty.src,
title:"Merty Inspiration",
type:"UnAvailable",
description:"A responsive train booking platform with schedule search, ticket selection, and a smooth, modern booking experience.",
link:"https://www.trainbooking.com/website/home"
},

];







export {projects ,technologies, whyUs , adventages , ourValues};
