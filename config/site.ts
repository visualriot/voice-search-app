export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Press to Speak",
  description:
    "A human-friendly accessibility tool with a single large button that activates voice search. Press to Speak is designed for people whose hands don’t match the tiny touch targets modern apps expect—making online searching easier, calmer, and more humane.",
  navItems: [
    {
      label: "About Us",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  links: {
    github: "https://github.com/visualriot",
    // twitter: "https://twitter.com/hero_ui",
    // docs: "https://heroui.com",
    discord: "https://discord.gg/YR4r4Q7txh",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
};
