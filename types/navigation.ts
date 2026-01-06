export interface NavLink {
  id: number;
  name: string;
  type: "finder" | "contact" | "resume";
}

export interface NavIcon {
  id: number;
  img: string;
}
