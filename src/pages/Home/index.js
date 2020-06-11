import React from 'react'

import { Wrapper } from './styles'
import logo from '../../images/logo.svg'

export default function Home() {
  return (
    <Wrapper>
      <img src={logo} alt="FunnyMemes" />
    </Wrapper>
  )
}