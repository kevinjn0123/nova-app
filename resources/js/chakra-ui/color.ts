/**
 * @deprecated
 * You can derive the Colors type from the DefaultChakraTheme:
 *
 * type Colors = DefaultChakraTheme["colors"]
 */
export type Colors = typeof colors;

export const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#FFFFFF',

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)',
  },

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)',
  },

  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },

  red: {
    50: '#FFF5F5',
    100: '#FED7D7',
    200: '#FEB2B2',
    300: '#FC8181',
    400: '#F56565',
    500: '#E53E3E',
    600: '#C53030',
    700: '#9B2C2C',
    800: '#822727',
    900: '#63171B',
  },

  orange: {
    50: '#FFFAF0',
    100: '#FEEBC8',
    200: '#FBD38D',
    300: '#F6AD55',
    400: '#ED8936',
    500: '#DD6B20',
    600: '#C05621',
    700: '#9C4221',
    800: '#7B341E',
    900: '#652B19',
  },

  yellow: {
    50: '#FFFFF0',
    100: '#FEFCBF',
    200: '#FAF089',
    300: '#F6E05E',
    400: '#ECC94B',
    500: '#D69E2E',
    600: '#B7791F',
    700: '#975A16',
    800: '#744210',
    900: '#5F370E',
  },

  green: {
    50: '#F0FFF4',
    100: '#C6F6D5',
    200: '#9AE6B4',
    300: '#68D391',
    400: '#48BB78',
    500: '#38A169',
    600: '#2F855A',
    700: '#276749',
    800: '#22543D',
    900: '#1C4532',
  },

  teal: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044',
  },

  blue: {
    50: '#ebf8ff',
    100: '#bee3f8',
    200: '#90cdf4',
    300: '#63b3ed',
    400: '#4299e1',
    500: '#3182ce',
    600: '#2b6cb0',
    700: '#2c5282',
    800: '#2a4365',
    900: '#1A365D',
  },

  cyan: {
    50: '#EDFDFD',
    100: '#C4F1F9',
    200: '#9DECF9',
    300: '#76E4F7',
    400: '#0BC5EA',
    500: '#00B5D8',
    600: '#00A3C4',
    700: '#0987A0',
    800: '#086F83',
    900: '#065666',
  },

  purple: {
    50: '#FAF5FF',
    100: '#E9D8FD',
    200: '#D6BCFA',
    300: '#B794F4',
    400: '#9F7AEA',
    500: '#805AD5',
    600: '#6B46C1',
    700: '#553C9A',
    800: '#44337A',
    900: '#322659',
  },

  pink: {
    50: '#FFF5F7',
    100: '#FED7E2',
    200: '#FBB6CE',
    300: '#F687B3',
    400: '#ED64A6',
    500: '#D53F8C',
    600: '#B83280',
    700: '#97266D',
    800: '#702459',
    900: '#521B41',
  },

  linkedin: {
    50: '#E8F4F9',
    100: '#CFEDFB',
    200: '#9BDAF3',
    300: '#68C7EC',
    400: '#34B3E4',
    500: '#00A0DC',
    600: '#008CC9',
    700: '#0077B5',
    800: '#005E93',
    900: '#004471',
  },

  facebook: {
    50: '#E8F4F9',
    100: '#D9DEE9',
    200: '#B7C2DA',
    300: '#6482C0',
    400: '#4267B2',
    500: '#385898',
    600: '#314E89',
    700: '#29487D',
    800: '#223B67',
    900: '#1E355B',
  },

  messenger: {
    50: '#D0E6FF',
    100: '#B9DAFF',
    200: '#A2CDFF',
    300: '#7AB8FF',
    400: '#2E90FF',
    500: '#0078FF',
    600: '#0063D1',
    700: '#0052AC',
    800: '#003C7E',
    900: '#002C5C',
  },

  whatsapp: {
    50: '#dffeec',
    100: '#b9f5d0',
    200: '#90edb3',
    300: '#65e495',
    400: '#3cdd78',
    500: '#22c35e',
    600: '#179848',
    700: '#0c6c33',
    800: '#01421c',
    900: '#001803',
  },

  twitter: {
    50: '#E5F4FD',
    100: '#C8E9FB',
    200: '#A8DCFA',
    300: '#83CDF7',
    400: '#57BBF5',
    500: '#1DA1F2',
    600: '#1A94DA',
    700: '#1681BF',
    800: '#136B9E',
    900: '#0D4D71',
  },

  telegram: {
    50: '#E3F2F9',
    100: '#C5E4F3',
    200: '#A2D4EC',
    300: '#7AC1E4',
    400: '#47A9DA',
    500: '#0088CC',
    600: '#007AB8',
    700: '#006BA1',
    800: '#005885',
    900: '#003F5E',
  },
  ocean: {
    '50': '#CCE7FF',
    '100': '#2E8FFF',
    '200': '#147AFF',
    '300': '#0066FF',
    '400': '#0058F0',
    '500': '#0049DB',
    '600': '#00185C',
  },
  blueAlt: {
    '50': '#CCF1FF',
    '100': '#2EB9FF',
    '200': '#14A9FF',
    '300': '#0099FF',
    '400': '#0088F0',
    '500': '#0075DB',
    '600': '#003066',
  },
  skyAlt: {
    '50': '#C7F8FF',
    '100': '#2ED5FF',
    '200': '#14C8FF',
    '300': '#00BBFF',
    '400': '#00A8F0',
    '500': '#0092DB',
    '600': '#003D66',
  },
  tealAlt: {
    '50': '#CAF7F1',
    '100': '#52F4E9',
    '200': '#35E9E3',
    '300': '#22DDDD',
    '400': '#20CACF',
    '500': '#1EB3BE',
    '600': '#0C464F',
  },
  greenAlt: {
    '50': '#C8F9ED',
    '100': '#43E5B4',
    '200': '#09DC99',
    '300': '#00CC88',
    '400': '#00BD7B',
    '500': '#00A86B',
    '600': '#004726',
  },
  yellowAlt: {
    '50': '#FFF7C2',
    '100': '#FFD738',
    '200': '#FFCB1F',
    '300': '#FFBB00',
    '400': '#EBA400',
    '500': '#D68F00',
    '600': '#663D00',
  },
  orangeAlt: {
    '50': '#FFEFCC',
    '100': '#FFB338',
    '200': '#FFA21F',
    '300': '#FF8C00',
    '400': '#EB7900',
    '500': '#D66B00',
    '600': '#662C00',
  },
  redAlt: {
    '50': '#FFE0EC',
    '100': '#FF6B9A',
    '200': '#FF5283',
    '300': '#FF3366',
    '400': '#EA2A53',
    '500': '#CA2140',
    '600': '#5C000B',
  },
  pinkAlt: {
    '50': '#FFE0F1',
    '100': '#FF80BB',
    '200': '#FF6BAB',
    '300': '#FF579A',
    '400': '#EB4783',
    '500': '#CC386E',
    '600': '#5C0015',
  },
  purpleAlt: {
    '50': '#EDE0FF',
    '100': '#A77AFF',
    '200': '#9A6BFF',
    '300': '#8957FF',
    '400': '#7647EB',
    '500': '#6139D0',
    '600': '#56104D',
  },
  whiteAlphaAlt: {
    100: 'rgba(255, 255, 255, 1)',
    95: 'rgba(255, 255, 255, 0.95)',
    90: 'rgba(255, 255, 255, 0.90)',
    80: 'rgba(255, 255, 255, 0.80)',
    70: 'rgba(255, 255, 255, 0.70)',
    60: 'rgba(255, 255, 255, 0.60)',
    50: 'rgba(255, 255, 255, 0.5)',
    40: 'rgba(255, 255, 255, 0.40)',
    30: 'rgba(255, 255, 255, 0.30)',
    20: 'rgba(255, 255, 255, 0.20)',
    15: 'rgba(255, 255, 255, 0.15)',
    12: 'rgba(255, 255, 255, 0.12)',
    10: 'rgba(255, 255, 255, 0.10)',
    7: 'rgba(255, 255, 255, 0.07)',
    5: 'rgba(255, 255, 255, 0.05)',
    2: 'rgba(255, 255, 255, 0.02)',
  },
  blackAlphaAlt: {
    100: 'rgba(0, 0, 0, 1)',
    95: 'rgba(0, 0, 0, 0.95)',
    90: 'rgba(0, 0, 0, 0.90)',
    80: 'rgba(0, 0, 0, 0.80)',
    70: 'rgba(0, 0, 0, 0.70)',
    60: 'rgba(0, 0, 0, 0.60)',
    50: 'rgba(0, 0, 0, 0.5)',
    40: 'rgba(0, 0, 0, 0.40)',
    30: 'rgba(0, 0, 0, 0.30)',
    20: 'rgba(0, 0, 0, 0.20)',
    15: 'rgba(0, 0, 0, 0.15)',
    12: 'rgba(0, 0, 0, 0.12)',
    10: 'rgba(0, 0, 0, 0.10)',
    7: 'rgba(0, 0, 0, 0.07)',
    5: 'rgba(0, 0, 0, 0.05)',
    2: 'rgba(0, 0, 0, 0.02)',
  },
  grayAlt: {
    2: '#050505',
    4: '#0a0a0a',
    6: '#0f0f0f',
    8: '#141414',
    10: '#1a1a1a',
    14: '#242424',
    19: '#303030',
    24: '#3d3d3d',
    37: '#5e5e5e',
    54: '#8a8a8a',
    70: '#b3b3b3',
    83: '#d4d4d4',
    92: '#ebebeb',
    95: '#f2f2f2',
    97: '#f7f7f7',
    98: '#fafafa',
    99: '#fcfcfc',
  },
};

export default colors;
