import { graphql } from 'gatsby'
import React from 'react'
import StarTree from '../components/StarTree'
import NetworkContainer from '../components/blocks/NetworkContainer'
import Layout from '../components/layouts/layout'

const Home = ({ data }) => (
  <Layout>
    <NetworkContainer>
      <StarTree data={data} />
    </NetworkContainer>
  </Layout>
)

export const query = graphql`query HomeQuery {
    allUser {
        edges {
            node {
                id
                nickname
                color
                hearth
                cross
                relations
            }
        }
    }
}
`

export default Home
