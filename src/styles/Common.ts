import { theme } from "./Theme";

type FrontPropsType = {
  family?: string;
  color?: string;
  weight?: number;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
};
export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmax,
  Fmin,
}: FrontPropsType) => `
font-family: ${family || "Poppins"};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.font};
  line-height: ${lineHeight || 1.2};
font-size: clamp(${Fmin}px, calc((100vw - 360px) / (1360 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`;
