import { createBreakpoints } from '@chakra-ui/theme-tools';
import { useBreakpointValue } from '@chakra-ui/react';

/**
 * Breakpoints for responsive design
 */

export const rawBreakpoints = {
  base: '0em',
  '3xs': '375px',
  '2xs': '440px',
  xs: '620px',
  sm: '740px',
  md: '880px',
  lg: '1040px',
  xl: '1240px',
  '2xl': '1440px',
  '3xl': '96rem',
};

const breakpoints = {
  ...rawBreakpoints,
};

export default breakpoints;
