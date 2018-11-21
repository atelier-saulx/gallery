import React from 'react'
import { connect } from 'hub'

const Slider = connect(
  ({ hub, data }) => {
    if (data.type === 'image') {
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
          <img
            style={{
              maxWidth: 'calc(100vw - 30px)',
              maxHeight: '80vh'
            }}
            src={data.url}
          />
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
              {data.title}
            </div>
            <div
              style={{
                fontFamily: 'ModernaR',
                fontSize: '14px',
                lineHeight: '1.6'
              }}
              dangerouslySetInnerHTML={{ __html: data.text }}
            />
          </div>
        </div>
      )
    }
  },
  'device.currentItem'
)

export default Slider
