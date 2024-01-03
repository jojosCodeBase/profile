import { profile } from "../assets";
import {
  github,
  linkedin,
  instagram,
  darjeelingcab,
  caDeptPortal,
  tripguide,
} from "../assets";

const navlinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    id: "jobit",
    title: "Darjeeling Cab",
    description: "Darjeeling Cab is a website with some navigations build to book cabs in and around Darjeeling, requested by a client and delivered.",
    image: darjeelingcab,
    link: "https://darjeelingcab.in/",
    github: "https://github.com/jojosCodeBase/darjeelingcab",
    git_icon: github,
  },
  {
    id: "carrent",
    title: "CA Dept Portal",
    description: "CA Dept Portal is a department management portal made by me to organise the activities occuring mainly in the lab, it includes issuing of lab files to student and searching student details and also facilitates departmental library with all basic library features like Book issue, Book return etc.",
    image: caDeptPortal,
    link: "https://smit.darjeelingcab.in",
    github: "https://github.com/jojosCodeBase/ca-dept-bootstrap",
    git_icon: github,

  },
  {
    id: "tripguide",
    title: "NSS-SMIT",
    description: "TripGuide is a travel app that allows users to search for places to visit by location. Users can also save places to their profile and view them on a map.",
    image: tripguide,
    link: "https://example.com/",
    github: "https://github.com/",
    git_icon: github,
  }
];

const socialLinks = [
  {
    id: "github",
    title: "Github",
    link: "https://github.com/jojosCodeBase",
    icon: github,
  },
  {
    id: "linkedin",
    title: "Linkedin",
    link: "www.linkedin.com/in/kunsang-moktan-148b74214",
    icon: linkedin,
  },
  {
    id: "instagram",
    title: "Instagram",
    link: "https://www.instagram.com/jojo_kunsang/",
    icon: instagram,
  },
];

export { navlinks, projects, socialLinks };
