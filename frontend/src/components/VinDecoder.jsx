import React from 'react'
import { Button } from 'react-bootstrap'

const VinDecoder = () => {
  return (
    <div className='my-5'>
      <h2 className='text-light text-center'>Vin Decoder</h2>
      <form className='vin-decoder-form'>
          <label htmlFor="vin" className='text-light mx-2'>VIN</label>
          <input type="text" name="vin" id="vin" />
        <Button>Search</Button>
      </form>
    </div>
  )
}

export default VinDecoder
