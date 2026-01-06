type NavLink = {
  id: number;
  name: string;
  type: "finder" | "contact" | "resume";
};

type NavIcon = {
  id: number;
  img: string;
};

type DockAppId =
  | "finder"
  | "safari"
  | "photos"
  | "contact"
  | "terminal"
  | "trash";

type DockApp = {
  id: DockAppId;
  name: string;
  icon: string;
  canOpen: boolean;
};

export const navLinks: readonly NavLink[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

export const navIcons: readonly NavIcon[] = [
  {
    id: 1,
    img: "/icons/search.svg",
  },
  {
    id: 2,
    img: "/icons/user.svg",
  },
  {
    id: 3,
    img: "/icons/wifi.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

export const dockApps: readonly DockApp[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];
