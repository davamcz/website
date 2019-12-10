import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  sizes: {
    pageWidth: '750px',
    pageMaring: '16px',
    pageWidthWithMaring: '1142px',
    gap: 16,
    lineHeight: 24,
  },
  colors: {
    black: '#000000',
    lightBlack: '#141414',
    darkGrey: '#2f2f2f',
    grey: '#6d6d6d',
    salmon: '#ff9168',
    darkSalmon: '#dd7657',
    orange: '#dbac35',
    peach: '#ffeab6',
    white: '#ffffff',
    lightWhite: '#fbfbfb',
    darkWhite: '#whiteDark',
    ice: '#e4f1fd',
    blue: '#3fa2f7',
    darkBlue: '#297fca',
    red: '#ff6868',
  },
  shadow: {
    button: '0 10px 40px 0 rgba(255,145,104,0.3)',
    box: '0 20px 60px 0 rgba(0,0,0,0.1)',
  },
  font: {
    body: `'Open Sans', sans-serif`,
  },
}
