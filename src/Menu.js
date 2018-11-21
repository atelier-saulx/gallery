import React from 'react'
import { connect } from 'hub'

const Menu = connect(
  ({ hub, data }) => {
    return (
      <div
        onClick={() => {
          hub.switchMenuState()
        }}
        style={{
          height: '100%',
          display: 'flex',
          position: 'absolute',
          transform: `translate3d(${
            data[0] ? '0%' : 'calc(-100% + 85px)'
          }, 0px, 0px)`,
          transition: 'transform 0.3s'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'calc(100% - 85px)',
            height: '100%',
            paddingTop: '25%',
            paddingLeft: '40px',
            paddingRight: '60px',
            flexDirection: 'column',
            backgroundColor: 'black'
          }}
        >
          {data[1].categories.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  width: 'auto',
                  padding: i === 2 ? '40px 6px 12px 6px' : '12px 6px',
                  margin: '5px',
                  color: 'white',
                  borderBottom: '1px solid rgba(0,0,0,0)',
                  fontSize: 20,
                  ':hover': {
                    borderBottom: '1px solid white'
                  }
                }}
                onClick={() => {
                  hub.switchCategory(data[1].categories[i])
                }}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div
          style={{
            width: '85px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'white',
            color: 'black',
            alignItems: 'center',
            padding: '30px 0'
          }}
        >
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundImage: `${
                data[0]
                  ? 'url("./public/cross.svg")'
                  : 'url("./public/menu.svg")'
              }`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>
    )
  },
  ['device.menuState', 'device.content']
)

export default Menu
