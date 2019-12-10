import React, { FunctionComponent, memo } from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import { Colors } from '../types/styled'

type TextComponents = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type WrapComponents = 'mark' | 'u' | 's' | 'b' | 'i'

type Components = keyof Pick<JSX.IntrinsicElements, TextComponents>
type WrapTags = keyof Pick<JSX.IntrinsicElements, WrapComponents>

type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

// Conditionally wrap a React element with another
const wrap = (needed = false, children: React.ReactNode, tag: WrapTags) => {
  if (!needed) return children

  return React.createElement(tag, {}, children)
}

interface Modifiers {
  mark?: boolean
  underline?: boolean
  strike?: boolean
  bold?: boolean
  italic?: boolean
}

// Wrap the text in modifier elements like bold and italics
const wrapModifiers = (
  component: React.ReactNode,
  { mark, underline, strike, bold, italic }: Modifiers
) => {
  let result = component

  result = wrap(mark, result, 'mark')
  result = wrap(underline, result, 'u')
  result = wrap(strike, result, 's')
  result = wrap(bold, result, 'b')
  result = wrap(italic, result, 'i')

  return result
}

interface Props {
  children: React.ReactNode
  as?: Components
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  p?: boolean
  span?: boolean
  noMargin?: boolean
  center?: boolean
  mark?: boolean
  underline?: boolean
  strike?: boolean
  bold?: boolean
  italic?: boolean
  uppercase?: boolean
  capitalize?: boolean
  weight?: Weight
  color?: Colors
  style?: CSSProperties
}

const components: TextComponents[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
]

const Text: FunctionComponent<Props> = ({
  // HTML element
  as,
  // styling
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  // wrapper
  mark,
  underline,
  strike,
  bold,
  italic,
  style,
  // react
  children,
  ...props
}) => {
  const preset =
    components[[h1, h2, h3, h4, h5, h6, p, span].indexOf(true)] || 'p'

  return (
    <StyledText as={as || preset} {...props} preset={preset} style={style}>
      {wrapModifiers(children, { mark, underline, strike, bold, italic })}
    </StyledText>
  )
}

export default memo<Props>(Text)

const presets = {
  h1: `
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 700;
  `,
  h2: `
    font-size: 2.25rem;
    font-weight: 600;
  `,
  h3: `
    font-size: 1.5rem;
    font-weight: 600;
  `,
  h4: `
    font-size: 1.25rem;
    font-weight: 600;
  `,
  h5: `
    font-size: 1rem;
    font-weight: 600;
  `,
  h6: `
    font-size: .875rem;
    font-weight: 600;
  `,
  p: `
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  `,
  span: `
    font-size: 12px;
    font-weight: 700;
  `,
}

type NestedProps = Omit<
  Props,
  'mark' | 'underline' | 'strike' | 'bold' | 'italic'
> & { preset: TextComponents }

const StyledText = styled.p<NestedProps>`
  line-height: 1.5;
  color: ${({ theme, color }) => (color ? theme.colors[color] : 'inherit')};

  ${({ center }) => (center ? 'text-align: center;' : '')};
  ${({ capitalize }) => (capitalize ? 'text-transform: capitalize;' : '')};
  ${({ noMargin }) => (noMargin ? 'margin: 0;' : '')};
  ${({ weight }) => (weight ? `font-weight: ${weight};` : '')};
  ${({ uppercase }) => (uppercase ? 'text-transform: uppercase;' : '')};
  ${({ capitalize }) => (capitalize ? 'text-transform: capitalize;' : '')};
  ${({ preset }) =>
    css`
      ${presets[preset]}
    `};
`
