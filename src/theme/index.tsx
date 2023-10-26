/* eslint-disable */

import { StyleFunctionProps, extendTheme } from '@chakra-ui/react';
import { Button } from '~/theme/components/button';
import { inputTheme } from './inputTheme';
import { Button } from './components/button';

const theme = extendTheme({
  breakpoints: {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
  },
  styles: {
    // @ts-ignore
    global: (props: StyleFunctionProps) => ({
      body: {
        color: 'default',
        bg: 'bg',
      },
    }),
  },
  colors: {
    bg: '#F7F8FA',
    gray: {
      100: '#FFFFFF',
      200: '#F7F8FA',
      300: '#E5E8EB',
      400: '#ADB5BD',
      500: '#8B95A1',
      600: '#6B7684',
      700: '#4E5968',
      800: '#333D4B',
      900: '#191F28',
    },
    primary: {
      100: '#DDEBE5',
      200: '#C5E1D3',
      300: '#B4DECA',
      400: '#95CDB2',
      500: '#7DC3A1',
      600: '#65B890',
      700: '#4DAF80',
      800: '#35A46F',
      900: '#05904D', // 기본 prime 색상
    },
    highlight: {
      900: '#FA3D3D',
      500: '#F89999',
    },
  },
  fonts: {
    heading: 'Pretendard Variable',
    body: 'Pretendard Variable',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSizes: {
    xs: '0.8rem', // 12px
    sm: '0.9rem', // 14px
    md: '1rem', // 16px
    lg: '1.1rem', // 18px
    xl: '1.3rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.8rem', // 28px
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  components: { Input: inputTheme, Button },
});

export default theme;
