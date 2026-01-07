export type DockAppId =
  | "finder"
  | "safari"
  | "photos"
  | "contact"
  | "terminal"
  | "trash";

export interface DockApp {
  id: DockAppId;
  name: string;
  icon: string;
  canOpen: boolean;
}

export interface DockAppToggle {
  id: DockAppId;
  canOpen: boolean;
}
