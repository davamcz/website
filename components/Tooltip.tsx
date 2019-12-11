import throttle from 'lodash.throttle'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Portal from './Portal'

interface Props {
  message: string
  delayTime?: number
}

export const Tooltip = memo<Props>(({ message, delayTime }) => {
  const [visible, setVisible] = useState(0)
  const [coordinates, setCoordinates] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  const tooltipRef: React.Ref<HTMLSpanElement> = useRef(null)
  const delayRef: React.MutableRefObject<number | null> = useRef(null)

  const calculateSize = useCallback(() => {
    if (tooltipRef && tooltipRef.current) {
      const c = tooltipRef.current.getBoundingClientRect()
      const { height, width } = c
      let { top, left } = c

      top += window.scrollY
      left += window.scrollX

      setCoordinates({ top, left, height, width })
    }
  }, [setCoordinates])

  const show = useCallback(() => {
    calculateSize()
    setVisible(visible + 1)
  }, [calculateSize, visible])

  const hide = useCallback(() => {
    if (visible > 0) {
      setVisible(visible - 1)
    }
  }, [visible])

  const onResize = useCallback(throttle(calculateSize, 150), [calculateSize])

  useEffect(() => {
    const cleanup = () => {
      window.removeEventListener('resize', onResize)
      if (delayRef.current) {
        clearTimeout(delayRef.current)
      }
    }

    if (visible > 0) {
      window.addEventListener('resize', onResize)
    } else {
      cleanup()
    }

    return cleanup
  }, [onResize, visible])

  const onMouseEnter = useCallback(() => {
    if (delayTime === 0) {
      return show()
    }

    delayRef.current = setTimeout(() => {
      // Check if we're still hovering after the delay
      if (
        tooltipRef.current &&
        tooltipRef.current.parentElement &&
        tooltipRef.current.parentElement.querySelector(':hover') ===
          tooltipRef.current
      ) {
        show()
      }
    }, delayTime)
  }, [delayTime, show])

  return (
    <Icon
      tabIndex={0}
      onMouseEnter={onMouseEnter}
      onFocus={show}
      onMouseLeave={hide}
      ref={tooltipRef}
    >
      ?
      {Boolean(visible) && (
        <Portal>
          <Absolute
            style={{
              top: coordinates.top,
              left: coordinates.left,
              height: coordinates.height,
              width: coordinates.width,
            }}
          >
            <Relative>
              <Content>
                <Triangle />
                {message}
              </Content>
            </Relative>
          </Absolute>
        </Portal>
      )}
    </Icon>
  )
})

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkGrey};
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`

const Absolute = styled.div`
  position: absolute;
  pointer-events: none;
`

const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: max-content;
  max-width: 220px;
  word-wrap: break-word;
  white-space: pre-line;
  border-collapse: separate;
  background: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0.9;
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
  text-align: center;
  padding: 16px;
  border-radius: 8px;

  bottom: 100%;
  left: 50%;
  margin-bottom: 10px;
  transform: translate(-46%, -110%);

  &::after {
    z-index: -1;
    content: '';
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  &::after {
    top: 10px;
  }
`

const Triangle = styled.i`
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;

  border: 5px solid transparent;

  pointer-events: none;

  border: 7px solid transparent;
  z-index: 100000;

  top: 100%;
  left: 50%;
  margin-bottom: 10px;
  transform: translateX(-50%);
  border-top-color: ${({ theme }) => theme.colors.darkGrey};
`
