import { createContext, CSSProperties, memo, useContext, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { cn } from '../lib/utils'

const BREAKPOINTS = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
}
const BREAKPOINT_NUM = Object.keys(BREAKPOINTS).length
const ROW_ARR = Array(BREAKPOINT_NUM).fill('row')

const ContainerContext = createContext<undefined | boolean>(undefined)
const useContainer = () => useContext(ContainerContext)

const alignments = {
  row: {
    align: {
      top: 'flex-start',
      bottom: 'flex-end',
      center: 'center',
      default: 'stretch',
      baseline: 'baseline',
    },
    justify: {
      left: 'flex-start',
      right: 'flex-end',
      center: 'center',
      default: 'flex-start',
    },
  },
  column: {
    align: {
      left: 'flex-start',
      right: 'flex-end',
      center: 'center',
      default: 'stretch',
    },
    justify: {
      top: 'flex-start',
      bottom: 'flex-end',
      center: 'center',
      default: 'flex-start',
    },
  },
}

type Direction = 'column' | 'row'

interface Props {
  flex?: string | number
  row?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  hcenter?: boolean
  vcenter?: boolean
  center?: boolean
  full?: boolean
  noWrap?: boolean
  inline?: boolean
  noWrapper?: boolean
  className?: string
  direction?: Direction[]
  style?: CSSProperties
}

export const Container: React.FC<Props> = memo(
  ({
    children,
    flex = 1,
    row,
    left,
    right,
    top,
    bottom,
    hcenter,
    vcenter,
    center,
    full,
    noWrap,
    noWrapper,
    className,
    style,
    direction,
  }) => {
    let justify, align
    const horizontalValue = left
      ? 'left'
      : right
      ? 'right'
      : hcenter || center
      ? 'center'
      : 'default'
    const verticalValue = top
      ? 'top'
      : bottom
      ? 'bottom'
      : vcenter || center
      ? 'center'
      : 'default'

    if (row) {
      justify = alignments.row.justify[horizontalValue]
      align = alignments.row.align[verticalValue]
    } else {
      justify = alignments.column.justify[verticalValue]
      align = alignments.column.align[horizontalValue]
    }

    const responsive = useMemo(() => {
      if (direction) {
        if (Array.isArray(direction)) {
          if (process.env.VERSION === 'development') {
            // Error check the string values
            direction.forEach(v => {
              if (v !== 'row' && v !== 'column') {
                throw new Error(
                  `Invalid direction value '${v}'. Only 'row' and 'column' are accepted.`
                )
              }
            })
          }

          if (direction.length === BREAKPOINT_NUM) return direction

          return direction.concat(
            Array(BREAKPOINT_NUM - direction.length).fill(
              direction[direction.length - 1]
            )
          )
        } else {
          return ROW_ARR.fill(direction)
        }
      } else if (row) {
        return ROW_ARR
      }
      return []
    }, [Array.isArray(direction) ? direction.join(',') : direction, row])

    const container = (
      <ContainerBox
        flex={flex}
        justify={justify}
        align={align}
        className={cn(className, {
          'sm-row': responsive[0] === 'row',
          'md-row': responsive[1] === 'row',
          'lg-row': responsive[2] === 'row',
        })}
        row={row}
        style={style}
        full={full}
        noWrap={noWrap}
      >
        {children}
      </ContainerBox>
    )

    const shouldHaveWrapper = useContainer()

    if (typeof shouldHaveWrapper === 'undefined' || shouldHaveWrapper) {
      if (noWrapper) {
        return (
          <ContainerContext.Provider value={false}>
            {container}
          </ContainerContext.Provider>
        )
      }

      return (
        <ContainerContext.Provider value={shouldHaveWrapper ? false : !!full}>
          <Wrapper full={full}>{container}</Wrapper>
        </ContainerContext.Provider>
      )
    }

    return container
  }
)

interface ContainerProps {
  flex: number | string
  noWrap?: boolean
  inline?: boolean
  justify: string
  align: string
  row?: boolean
  full?: boolean
}

const ContainerBox = styled.div<ContainerProps>`
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  position: relative;
  min-width: 1px;
  max-width: 100%;

  @media screen and (min-width: 961px) {
  &.lg-row {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &:not(.lg-row) > & {
    margin-top: 0;
  }
  &:not(.lg-row) > & ~ & {
    margin-top: calc(var(--geist-gap) * var(--gap-ratio));
  }
  &.lg-row > & {
    margin-left: 0;
  }
  &.lg-row > & ~ & {
    margin-left: calc(var(--geist-gap) * var(--gap-ratio));
  }
}

@media screen and (min-width: 601px) and (max-width: 960px) {
  &.md-row {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &:not(.md-row) > & {
    margin-top: 0;
  }
  &:not(.md-row) > & ~ & {
    margin-top: calc(var(--geist-gap) * var(--gap-ratio));
  }
  &.md-row > & {
    margin-left: 0;
  }
  &.md-row > & ~ & {
    margin-left: calc(var(--geist-gap) * var(--gap-ratio));
  }
}

@media screen and (max-width: 600px) {
  &.sm-row {
    flex-direction: row;
    flex-wrap: wrap;
  }
  &:not(.sm-row) > & {
    margin-top: 0;
  }
  &:not(.sm-row) > & ~ & {
    margin-top: calc(var(--geist-gap) * var(--gap-ratio));
  }
  &.sm-row > & {
    margin-left: 0;
  }
  &.sm-row > & ~ & {
    margin-left: calc(var(--geist-gap) * var(--gap-ratio));
  }
}

  ${({ inline }) => inline && `display: inline-flex;`}
  ${({ noWrap }) => noWrap && `flex-wrap: nowrap !important;`}
  ${({ full }) =>
    full &&
    css`
      width: calc(100vw - (100vw - 100%));
      padding-left: 0;
      padding-right: 0;
    `}
`

interface WrapperProps {
  full?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: ${({ theme }) => theme.sizes.pageWidthWithMaring};
  padding-left: ${({ theme }) => theme.sizes.pageMaring};
  padding-right: ${({ theme }) => theme.sizes.pageMaring};

  ${({ full }) =>
    full &&
    css`
      width: calc(100vw - (100vw - 100%));
      padding-left: 0;
      padding-right: 0;
    `}
`
