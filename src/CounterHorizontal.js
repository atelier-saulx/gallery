import React from 'react'
import { connect } from 'hub'

const Counter = connect(
  ({ hub, data }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '60px'
        }}
      >
        <div
          style={{
            width: '60px',
            height: '0px',
            borderBottom: '1px solid #C8C8C8'
          }}
        />
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundImage: `url('./public/arrow.svg')`,
            margin: '0 10 0 20',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          onClick={hub.previous}
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
            transform: 'rotate(180deg)',
            margin: '0 20 0 10'
          }}
          onClick={hub.next}
        />
        <div
          style={{
            width: '60px',
            height: '0px',
            borderBottom: '1px solid #C8C8C8'
          }}
        />
      </div>
    )
  },
  ['device.currentItem', 'device.currentCategory']
)

export default Counter
