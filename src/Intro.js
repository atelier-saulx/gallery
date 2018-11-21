import React from 'react'
import { connect } from 'hub'

const Intro = connect(
  ({ hub, data }) => {
    return (
      <div
        id="Intro"
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black',
          display: 'flex',
          color: 'white',
          fontSize: 30,
          position: 'absolute',
          animation: 'fadeOut 4s',
          '@keyframes': {
            fadeOut: {
              from: { opacity: 1 },
              '50%': { opacity: 1 },
              to: { opacity: 0 }
            }
          },
          zIndex: 2
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundImage: 'url("./public/bg.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'fadeOut 4s',
            animationIterationCount: 1,
            '@keyframes': {
              fadeOut: {
                from: { opacity: 0.4 },
                to: { opacity: 0 }
              }
            }
          }}
        />

        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundImage: 'url("./public/bg2.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'fadeOut 4s',
            animationIterationCount: 1,
            '@keyframes': {
              fadeOut: {
                from: { opacity: 0 },
                '25%': { opacity: 0.5 },
                '50%': { opacity: 0 },
                '100%': { opacity: 0 }
              }
            }
          }}
        />

        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundImage: 'url("./public/bg3.png")',
            transform: 'rotate(180deg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'fadeOut 4s',
            '@keyframes': {
              fadeOut: {
                from: { opacity: 0 },
                '40%': { opacity: 0.3 },
                '60%': { opacity: 0.2 },
                '100%': { opacity: 0 }
              }
            }
          }}
        />

        <div
          style={{
            minWidth: '85px',
            minHeight: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute'
          }}
        >
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundImage: 'url("./public/menuWhite.svg")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeOut 4s',
            '@keyframes': {
              fadeOut: {
                from: { opacity: 0 },
                '70%': { opacity: 1 },
                '100%': { opacity: 1 }
              }
            }
          }}
        >
          {data.title}
        </div>
      </div>
    )
  },
  'device.content'
)

export default Intro

// <div
//   style={{
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundImage: 'url("./public/bg.png"), url("./public/bg2.png")',
//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     animation: 'fadeOut 3s',
//     '@keyframes': {
//       fadeOut: {
//         from: { opacity: 0.5 },
//         to: { opacity: 0 }
//       }
//     }
//   }}
// >
