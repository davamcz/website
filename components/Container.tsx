import { memo, createContext, useContext, CSSProperties } from 'react'
import styled, { css } from 'styled-components'

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
  responsive?: Direction[]
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
    noWrapper,
    className,
    style,
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

    const container = (
      <ContainerBox
        flex={flex}
        justify={justify}
        align={align}
        className={className}
        row={row}
        style={style}
        full={full}
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

  ${({ inline }) => inline && `display: inline-flex;`}
  ${({ noWrap }) => noWrap && `flex-wrap: nowrap;`}
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
