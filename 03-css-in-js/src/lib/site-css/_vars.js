/**
 * Ghetto theming... these would go into a theme typically
 */

const baseUnit = 8;
const baseSpacing = baseUnit * 2;
const headerHeight = 7 * baseUnit;

const theme = {
  primary: '#caccf0',
  secondary: '#928c39',
  background: '#ffffff',
  'base-unit': `${baseUnit}px`,
  'base-spacing': `${baseSpacing}px`,
  'header-height': `${headerHeight}px`
};

export { theme };
