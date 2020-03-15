import React from 'react'
import { Edge, Network, Node } from 'react-vis-network'

const nodeStyle = {
  shape: 'box',
  font: {
    multi: 'html',
    size: 20
  }
}

const StarTree = ({ data }) => (
  <Network>
    {
      data.allUser.edges.map((user) => (
        <Node
          key={user.node.id}
          id={user.node.id}
          label={user.node.nickname.concat(user.node.hearth ? ' ♥' : '').concat(user.node.cross ? ' †' : '')}
          color={user.node.color}
          {...nodeStyle}
        />
      ))
    }
    {
      data.allUser.edges.map((user) => {
        if (user.node.relations !== null) {
          return (user.node.relations.map((element) => {
            return (
              <Edge
                key={user.node.id + element}
                id={user.node.id + element}
                from={user.node.id}
                to={data.allUser.edges.find(item => item.node.nickname === element).node.id}
                arrows='to'
              />
            )
          })
          )
        } else { return <div key={user.node.id + 'empty'} /> }
      })
    }
  </Network>
)

export default StarTree
