import styled from 'styled-components'
import copy from 'copy-to-clipboard'
import { CopyButtton } from './CopyButton'

interface Props {
  url: string
}

export const CopyBlock = ({ url }: Props) => {
  return (
    <Block>
      {url} <CopyButtton onClick={() => copy(url)} />
    </Block>
  )
}

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 18px;
  border: 1px dashed ${({ theme }) => theme.colors.darkGrey};
`
