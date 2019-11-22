import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 16px
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  img,
  embed,
  iframe,
  object,
  video {
    height: auto;
    max-width: 100%;
  }

  audio {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.font.body};
    color: ${({ theme }) => theme.colors.darkGrey};
    line-height: 1.5;
    word-break: break-word;
    font-kerning: auto;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    hyphens: auto;
  }

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
`