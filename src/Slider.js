import React from 'react'
import { connect } from 'hub'
import Title from './Title'

const Slider = connect(
  ({ hub, data }) => {
    if (data[0].type === 'image') {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}
          >
            <img
              style={{
                maxWidth: `${
                  data[1] ? 'calc(100vw - 30px)' : 'calc(100vw - 170px)'
                }`,
                maxHeight: `${
                  data[1] ? 'calc(100vh - 120px)' : 'calc(100vh - 135px)'
                }`
              }}
              src={data[0].url}
            />
            <Title />
          </div>
        </div>
      )
    } else {
      return (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'ModernaR',
            fontSize: '20px'
          }}
        >
          <div
            style={{
              maxWidth: '40%',
              minWidth: '200px'
            }}
          >
            <div
              style={{
                fontFamily: 'ModernaR',
                fontSize: '20px',
                paddingBottom: '20px'
              }}
            >
              {data[0].title}
            </div>
            <div
              style={{
                fontFamily: 'ModernaR',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
              dangerouslySetInnerHTML={{ __html: data[0].text }}
            />
          </div>
        </div>
      )
    }
  },
  ['device.currentItem', 'device.mobile']
)

export default Slider
