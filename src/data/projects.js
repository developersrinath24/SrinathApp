import Urkeys from "../assets/images/projects/urkeys.png";
import Dashboard from "../assets/images/projects/dasboard.png";
import Eatiz from "../assets/images/projects/eatiz.png";
import Mntn from "../assets/images/projects/mntn.png";
import Portfolio from "../assets/images/projects/portfolio.png";
import Travel from "../assets/images/projects/travel.png";

const projects = [
  {
    id: 1,
    title: "Vision",
    url: "https://vision-dashboard-w4yd.vercel.app/",
    image_url: Dashboard,
    desc: "Sales dashboard",
    tech: "React, tailwind",
  },
  {
    id: 2,
    title: "EatizFood",
    url: "https://eatizfood.vercel.app/",
    image_url: Eatiz,
    desc: "Restaurant website",
    tech: "React",
  },
  {
    id: 3,
    title: "urkeys",
    url: "https://urkeys.netlify.app/",
    image_url: Urkeys,
    desc: "Website of a Keymaker",
    tech: "React",
  },
  {
    id: 4,
    title: "travelAgency",
    url: "https://travelagencyfrontpage.netlify.app/",
    image_url: Travel,
    desc: "Travel agency Website",
    tech: "React",
  },
  {
    id: 5,
    title: "srinath",
    url: "https://srinathunta.netlify.app/",
    image_url: Portfolio,
    desc: "My old portfolio website",
    tech: "React, Gatsby",
  },
  {
    id: 6,
    title: "mntn",
    url: "https://mntn-frontpage.netlify.app/",
    image_url: Mntn,
    desc: "Travel guide",
    tech: "React",
  },
];

export default projects;
