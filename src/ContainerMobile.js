import React from 'react'
import { connect } from 'hub'
import SliderMobile from './SliderMobile'
import CounterHorizontal from './CounterHorizontal'
import MenuHorizontal from './MenuHorizontal'

const ContainerMobile = connect(
  ({ hub, data }) => {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '0px 15px',
          fontSize: 20,
          alignItems: 'center'
        }}
      >
        <MenuHorizontal />
        <SliderMobile />
        <CounterHorizontal />
      </div>
    )
  },
  ['device.currentItem', 'device.currentCategory']
)

export default ContainerMobile
