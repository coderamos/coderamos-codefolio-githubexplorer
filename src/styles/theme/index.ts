import { shade } from 'polished';
export const colors = {
  background10: '#F0F0F5',

  black10: '#000',
  black20: '#3A3A3A',
  white10: '#FFF',
  green10: '#04D361',

  green20: shade(0.2, '#04D361'),
};

const defaultFontStyle = {
  fontWeight: 300,
};

export const fontStyles = {
  default: {
    ...defaultFontStyle,
  },
  title: {
    ...defaultFontStyle,
    fontSize: 48,
  },
};

export const grid = {
  breakpoints: {
    xs: 500,
    sm: 736,
    md: 980,
    lg: 1200,
  },
  row: {
    padding: 5,
  },
  col: {
    padding: 5,
  },
  container: {
    padding: 5,
    maxWidth: {
      xs: 500,
      sm: 736,
      md: 980,
      lg: 1200,
    },
  },
};

export const mediaQueries = {
  xs: `(max-width: ${grid.breakpoints.xs}px)`,
  sm: `(max-width: ${grid.breakpoints.sm}px)`,
  md: `(max-width: ${grid.breakpoints.md}px)`,
  lg: `(max-width: ${grid.breakpoints.lg}px)`,
};

export default { colors, grid, mediaQueries, fontStyles };
