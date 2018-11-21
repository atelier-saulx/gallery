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
          width: '100%',
          backgroundColor: 'black',
          display: 'flex',
          position: 'absolute',
          flexDirection: 'column',
          transform: `translate(${
            data[0] ? ' 0, 0' : '0, calc(-100% + 60px)'
          })`,
          transition: 'transform 0.3s'
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            backgroundColor: 'black',
            padding: '30px 60px'
          }}
        >
          {data[1].categories.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  width: 'auto',
                  padding: '15px 0px',
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
            minWidth: '100%',
            height: '60px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            color: 'black',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '25px',
              height: '25px',
              marginLeft: 'calc(50% - 12px)',
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
          <div
            style={{
              fontFamily: 'ModernaR',
              fontSize: 14,
              // textDecoration: 'line-through',
              marginRight: '15px'
            }}
          >
            {data[1].title}
          </div>
        </div>
      </div>
    )
  },
  ['device.menuState', 'device.content']
)

export default Menu
