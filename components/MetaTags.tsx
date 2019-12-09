import Head from 'next/head'

interface Props {
  title: string
  description: string
  image?: string
}

export const MetaTags = ({ title, description, image }: Props) => (
  <Head>
    <title key="title">{title}</title>
    <meta key="description" name="description" content={description} />
    <meta key="og:title" property="og:title" content={title} />
    <meta
      key="og:description"
      property="og:description"
      content={description}
    />
    {image && <meta key="og:image" property="og:image" content={image} />}
  </Head>
)
