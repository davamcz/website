import styled from 'styled-components'
import { Copy } from './Icons/Copy'
import copy from 'copy-to-clipboard'

interface Props {
  url: string
}

export const CopyBlock = ({ url }: Props) => {
  return (
    <Block>
      {url} <Copy onClick={() => copy(url)} />
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 18px;
  border: 1px dashed ${({ theme }) => theme.colors.darkGrey};
`
