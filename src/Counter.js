import React from 'react'
import { connect } from 'hub'

const Counter = connect(
  ({ hub, data }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '85px',
          minWidth: '85px',
          height: '100%'
        }}
      >
        <div
          style={{
            width: '0px',
            height: '80px',
            borderRight: '1px solid #C8C8C8'
          }}
        />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundImage: `url('./public/arrow.svg')`,
            transform: 'rotate(90deg)',
            margin: '25 0 10 0',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          onClick={hub.next}
        />
        <div
          style={{
            width: '35px',
            height: '35px',
            backgroundImage: `url('./public/slash.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: 'black',
              paddingLeft: '2px'
            }}
          >
            {data[1].items.findIndex(field => field === data[0]) + 1}
          </div>
          <div
            style={{
              fontSize: '14px',
              color: 'black',
              paddingRight: '2px',
              display: 'flex',
              alignItems: 'flex-end'
            }}
          >
            {data[1].items.length}
          </div>
        </div>
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundImage: `url('./public/arrow.svg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transform: 'rotate(270deg)',
            margin: '10 0 25 0'
          }}
          onClick={hub.previous}
        />
        <div
          style={{
            width: '0px',
            height: '80px',
            borderRight: '1px solid #C8C8C8'
          }}
        />
      </div>
    )
  },
  ['device.currentItem', 'device.currentCategory']
)

export default Counter

// ${data[1].itmes.findIndex(field => field === data[0])}
