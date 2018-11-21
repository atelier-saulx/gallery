import React from 'react'
import { connect } from 'hub'

const Title = connect(
  ({ hub, data }) => {
    return (
      <div
        style={{
          height: '30px',
          marginTop: 15,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-end'
        }}
      >
        <div
          style={{
            fontSize: 14,
            paddingRight: 10,
            borderRight: '1px solid black'
          }}
        >
          {data[1].title}
        </div>
        <div
          style={{
            fontSize: 14,
            paddingLeft: 10,
            fontStyle: 'italic'
          }}
        >
          {data[0].title}
        </div>
      </div>
    )
  },
  ['device.currentItem', 'device.currentCategory']
)

export default Title
