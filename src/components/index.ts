import dynamic from "next/dynamic";

// @icons
const Discord = dynamic(() => import("./@icons/Discord"));
const DiscordFooter = dynamic(() => import("./@icons/DiscordFooter"));
const OpenSea = dynamic(() => import("./@icons/OpenSea"));
const Twitter = dynamic(() => import("./@icons/Twitter"));
const TwitterFooter = dynamic(() => import("./@icons/TwitterFooter"));

// atoms
const Button = dynamic(() => import("./atoms/Button"));
const MemberCard = dynamic(() => import("./atoms/MemberCard"));
const SeasonSelector = dynamic(() => import("./atoms/SeasonSelector"));
const TLDR = dynamic(() => import("./atoms/TLDR"));
const TraitCard = dynamic(() => import("./atoms/TraitCard"));

// molecules
const Footer = dynamic(() => import("./molecules/Footer"));
const MEButton = dynamic(() => import("./molecules/MEButton"));
const MenuItem = dynamic(() => import("./molecules/MenuItem"));
const Nav = dynamic(() => import("./molecules/Nav"));

// organisms
const Members = dynamic(() => import("./organisms/Members"));
const MenuItems = dynamic(() => import("./organisms/MenuItems"));
const StakeCTA = dynamic(() => import("./organisms/StakeCTA"));

// templates
const AboutView = dynamic(() => import("./templates/AboutView"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const MembersView = dynamic(() => import("./templates/MembersView"));
const MenuView = dynamic(() => import("./templates/MenuView"));

export {
  // @icons
  Discord,
  DiscordFooter,
  OpenSea,
  Twitter,
  TwitterFooter,
  // atoms
  Button,
  MemberCard,
  SeasonSelector,
  TLDR,
  TraitCard,
  // molecules
  Footer,
  MEButton,
  MenuItem,
  Nav,
  // organisms
  Members,
  MenuItems,
  StakeCTA,
  // templates
  AboutView,
  LandingView,
  MembersView,
  MenuView,
};
