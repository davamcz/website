import Head from 'next/head'

interface Props {
  title: string
  description: string
}

export const MetaTags = ({ title, description }: Props) => (
  <Head>
    <title key="title">{title}</title>
    <meta key="description" name="description" content={description} />
  </Head>
)
