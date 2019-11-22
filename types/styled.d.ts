import 'styled-components'

export type Colors =
  | 'black'
  | 'lightBlack'
  | 'darkGrey'
  | 'grey'
  | 'salmon'
  | 'orange'
  | 'peach'
  | 'white'
  | 'lightWhite'
  | 'darkWhite'
  | 'ice'
  | 'blue'
  | 'darkBlue'
  | 'red'

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      pageWidth: string
      pageMaring: string
      pageWidthWithMaring: string
      gap: number
      lineHeight: number
    }
    colors: {
      black: string
      lightBlack: string
      darkGrey: string
      grey: string
      salmon: string
      orange: string
      peach: string
      white: string
      lightWhite: string
      darkWhite: string
      ice: string
      blue: string
      darkBlue: string
      red: string
    }
    shadow: {
      button: string
      box: string
    }
    font: {
      body: string
    }
  }
}
