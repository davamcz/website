import { useState, useCallback } from 'react'
import { Container } from '../Container'
import Spacer from '../Spacer'
import { Plus } from '../Icons/Plus'
import Text from '../Text'
import { Minus } from '../Icons/Minus'
import styled from 'styled-components'

interface Props {
  question: string
  answer: string
}
export const Faq = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [open])

  return (
    <Block onClick={toggle}>
      <Container style={{ padding: '24px' }} vcenter row>
        {open ? <Minus /> : <Plus />}
        <Spacer />
        <Text>{question}</Text>
      </Container>
      {open && (
        <Container style={{ paddingLeft: '24px' }}>
          <Text bold>{answer}</Text>
        </Container>
      )}
      <Spacer />
    </Block>
  )
}

const Block = styled.div`
  flex: 50%;
  cursor: pointer;
`
