export interface RenderTextProps {
  text: string;
  className?: string;
  baseWeight?: number;
}

export interface WeightLimits {
  min: number;
  max: number;
  default: number;
}

export interface FontWeights {
  title: WeightLimits;
  subtitle: WeightLimits;
}

export type AllowedTypes = keyof FontWeights;
