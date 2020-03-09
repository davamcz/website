import gql from 'graphql-tag'
import styled from 'styled-components'
import { Container } from './Container'
import Spacer from './Spacer'
import { Rectangle } from './Step'
import Text from './Text'
import { Title } from './Title'
import { Loading } from './Loading'
import { useGetTransactionsStatisticsQuery } from '../generated/graphql'

export const transactionsStatistics = gql`
  query getTransactionsStatistics {
    getTransactionsStatistics {
      donatedAmount
      donationsCount
      numberOfOrganizations
    }
  }
`

export default () => {
  const { loading, data } = useGetTransactionsStatisticsQuery()
  const donated = 23091 + (data?.getTransactionsStatistics?.donatedAmount || 0)
  const transactions =
    85 + (data?.getTransactionsStatistics?.donationsCount || 0)
  const numberOfOrganizations =
    data?.getTransactionsStatistics?.numberOfOrganizations || 9

  return (
    <Container>
      <Title description="Velká radost" center>
        Kolik se vás už podílelo
      </Title>
      <Spacer y={2} />
      <Container
        center
        direction={['column', 'column', 'row']}
        style={{ justifyContent: 'space-between' }}
      >
        <Stat
          title="Zapojených organizací"
          value={numberOfOrganizations}
          loading={loading}
        />
        <Spacer y={2} />
        <Stat
          title="Proběhlých darů"
          value={`${transactions}`}
          loading={loading}
        />
        <Spacer y={2} />
        <Stat
          title="Získáno na dobročinnost"
          value={`${donated} Kč`}
          loading={loading}
        />
      </Container>
      <Spacer y={4} />
    </Container>
  )
}

const Stat = ({
  value,
  title,
  loading = false,
}: {
  value: string | number
  title: string
  loading: boolean
}) => (
  <Block>
    <Spacer />
    {loading && <Loading height={48} />}
    {!loading && (
      <Text h1 as="span">
        {value}
      </Text>
    )}
    <Text color="salmon" span>
      {title}
    </Text>
    <Spacer />
    <Rectangle />
  </Block>
)

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 255px;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`
