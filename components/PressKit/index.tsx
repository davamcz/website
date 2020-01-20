import Spacer from '../Spacer'
import { Card } from '../Card'
import { Container } from '../Container'
import { Link } from '../Link'
import { RoundedArrow } from '../Icons/RoundedArrow'

export const PressKit = () => {
  return (
    <Container direction={['column', 'column', 'row']}>
      <PressItem
        text="Stáhněte si kompletní balíček pro média, který obsahuje loga, článek o nás a fotografie"
        url="https://drive.google.com/drive/folders/18ycdsaM0rFL1noI4kRdLd-UXMp_bEVA1"
      />
      <Spacer />
      <PressItem
        text="Stáhnout pouze loga ve formátech AI, PDF? PNG a JPG"
        url="https://drive.google.com/drive/folders/1EUYEtojj7nfSSw6WmdMW628vUgNeCLx6"
      />
    </Container>
  )
}

const PressItem = ({ url, text }: { url: string; text: string }) => (
  <Card style={{ display: 'flex' }}>
    <Link external href={url}>
      <Container center row noWrap style={{ padding: '20px' }}>
        <RoundedArrow style={{ flex: '0 0 auto' }} />
        <Spacer />
        {text}
      </Container>
    </Link>
  </Card>
)
