import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "aboutUs",
    title: "About Us",
  },
  {
    id: "product",
    title: "Products",
    subMenu: [
      {id: "electronics", title: "Electronics"},
      {id: "food", title: "Confectioneries & Food"},
      {id: "consumerGoods", title: "Consumer Goods"},
    ]
  },
  {
    id: "exportimport",
    title: "Export & Import",
  },
  {
    id: "/contact-us",
    title: "Contact Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Global Trade Network",
    content:
      "we facilitate seamless import and export of high-quality goods across international markets, ensuring reliable supply chains",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Trusted & Secure Transactions",
    content:
      "With a strong compliance framework, we gurantee secure and efficient trade operations for our global partners",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "From electronics to food products, we supply a vast range of quality consumer goods to meet global demand",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Employees",
    value: "5,380+",
  },
  {
    id: "stats-2",
    title: "Global Offices",
    value: "35+",
  },
  {
    id: "stats-3",
    title: "Countries Present",
    value: "12+",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/AboutUs" },
      { name: "CEO Message", path: "/#ceo-message" },
      
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Product Supply", path: "/product" },
      { name: "Export & Import", path: "/exportimport" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", path: "/contact-us" },
      
    ],
  },
  {
    title: "Social",
    links: [
      { name: "LinkedIn", path: "https://linkedin.com/company/skyvion" },
      { name: "Instagram", path: "https://instagram.com/skyvion" },
    ],
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];