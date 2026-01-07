export interface WindowData<T = unknown> {
  isOpen: boolean;
  zIndex: number;
  data: T;
}

export interface WindowStoreState {
  windows: Record<string, WindowData>;
  nextZIndex: number;

  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}
