const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

interface Media {
  custom: (maxNumber: number) => string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const media: Media = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1200),
};

const colors = {
  primary: "#4CE2B2",
  secondary: "#FFEC3A",

  lightPrimary: "#abffe4",
  lightSecondary: "#FFF6A3",
  lightText: "rgba(0, 0, 0, 0.7)",
};

const fontSizes = {
  s: "12px",
  m: "14px",
  h: "25px",
};

const fontFamilies = {
  normal: "NeueHaasGroteskDisplayPro, sans-serif",
  alt: "SFProText, sans-serif",
  heading: "CircularStd, sans-serif",
};

export const defaultTheme = {
  colors,
  fontSizes,
  fontFamilies,
  media,
};

type iTheme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends iTheme {}
}
