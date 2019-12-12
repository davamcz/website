import { memo } from 'react'
import { Container } from './Container'
import { Image } from './Image'
import { Placeholder } from './Placeholder'
import Spacer from './Spacer'

interface Props {
  loading?: boolean
  images: Array<any>
}

export const Gallery = memo<Props>(({ loading, images }) => {
  return (
    <Container style={{ width: '100%', maxWidth: '505px', maxHeight: '505px' }}>
      {loading ? (
        <Placeholder keepAspectRatio width={505} height={505} />
      ) : (
        <Image
          src={`https://davamcz.imgix.net/${images[0].key}?w=505&h=505&fit=fillmax&fill=solid&fill-color=fff`}
        />
      )}
      <Spacer />
    </Container>
  )
})
