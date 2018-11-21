import React from 'react'
import { connect } from 'hub'
import Slider from './Slider'
import Counter from './Counter'

const Container = connect(
  ({ hub, data }) => {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          marginLeft: '85',
          padding: '50 0 35 0',
          fontSize: 20,
          alignItems: 'center'
        }}
      >
        <Slider />
        {data[1].items.length > 1 ? <Counter /> : null}
      </div>
    )
  },
  ['device.currentItem', 'device.currentCategory']
)

export default Container

// ${data[1].itmes.findIndex(field => field === data[0])}
