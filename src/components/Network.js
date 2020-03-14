import React from 'react'
import { Edge, Network, Node } from 'react-vis-network'

const nodeStyle = {
  shape: 'box'
}

const StarTree = ({ data }) => (
  <Network>
    {
      data.allUser.edges.map((user) => (
        <Node
          key={user.node.id}
          id={user.node.id}
          label={user.node.nickname + (user.node.hearth ? ' ♥' : '') + (user.node.cross ? ' †' : '')}
          color={user.node.color}
          {...nodeStyle}
        />
      ))
    }
    {
      data.allRelation.edges.map((relation) => (
        <Edge
          key={relation.node.id}
          id={relation.node.id}
          from={relation.node.from}
          to={relation.node.to}
          arrows={relation.node.arrows}
          color={relation.node.color ? { color: relation.node.color } : null}
        />
      ))
    }
  </Network>
)

export default StarTree
