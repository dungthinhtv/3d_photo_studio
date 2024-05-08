/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Dungthinh CRM",
    description: "Dungthinh Customer Relationship Management System.",
    date: "2022-08-15",
    demoLink: "https://dungthinh.ddns.net",
  },
  {
    id: 2,
    name: "3D Art Gallery",
    description:
      "Wander through the virtual gallery halls, and engage with a variety of masterpieces, learning about their history and significance.",
    date: "2024-02-01",
    demoLink: "http://dungthinh.ddns.net:8083",
  },
  {
    id: 3,
    name: "Graphics Creator",
    description:
      "SAAS Platform to Create Graphics, Images, Social Media Posts, Ads, Banners, & Stories",
    date: "2024-05-01",
    demoLink: "http://dungthinh.ddns.net:81",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.twitter.com/",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
