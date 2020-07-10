import { theme } from '@chakra-ui/core'

export const customTheme = {
  ...theme,
  fonts: {
    heading: "'Spartan', sans-serif",
    body: "'Spartan', sans-serif",
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '15px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  colors: {
    ...theme.colors,
    primary: 'hsl(180, 29%, 50%)',
    neutral: {
      100: 'hsl(180, 52%, 96%)',
      200: 'hsl(180, 31%, 95%)',
      300: 'hsl(180, 8%, 52%)',
      400: 'hsl(180, 14%, 20%)',
    },
  },
}
