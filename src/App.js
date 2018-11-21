import React from 'react'
import { Provider, connect } from 'hub'
import hub from './hub'
import Menu from './Menu'
import Container from './Container'
import ContainerMobile from './ContainerMobile'
import Intro from './Intro'
import IntroMobile from './IntroMobile'

const App = connect(
  ({ hub, data }) => {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          fontFamily: 'ModernaR',
          letterSpacing: '1px',
          fontSize: '16px',
          '@font-face': [
            {
              fontFamily: 'ModernaB',
              fontStyle: 'normal',
              fontWeight: 'normal',
              src:
                "url(./public/moderna/mgopen_moderna_bold-webfont.woff) format('woff')"
            },
            {
              fontFamily: 'ModernaR',
              fontStyle: 'normal',
              fontWeight: 'normal',
              src:
                "url(./public/ModernaRegular/mgopen_moderna_regular-webfont.woff) format('woff')"
            }
          ]
        }}
      >
        {!data[0] & data[1] ? <Intro /> : null}
        {data[0] & data[1] ? <IntroMobile /> : null}
        {data[0] ? null : <Menu />}
        {data[0] ? <ContainerMobile /> : <Container />}
      </div>
    )
  },
  ['device.mobile', 'device.cover']
)

export default () => {
  return (
    <Provider hub={hub}>
      <App />
    </Provider>
  )
}
