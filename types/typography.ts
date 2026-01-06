export interface RenderTextProps {
  text: string;
  className?: string;
  baseWeight?: number;
}

export type WeightLimits = {
  min: number;
  max: number;
  default: number;
};

export type FontWeights = {
  title: WeightLimits;
  subtitle: WeightLimits;
};

export type AllowedTypes = keyof FontWeights;
