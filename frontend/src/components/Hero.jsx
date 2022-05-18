import React from 'react'
import { Container } from 'react-bootstrap'
import Tabs from './Tabs'
import VinDecoder from './VinDecoder'

const Hero = () => {
  return (
    <div className='my-5 py-5 hero bg-primary rounded'>
      <Container>
      <Tabs/>
      <VinDecoder />
      </Container>
    </div>
  )
}

export default Hero
