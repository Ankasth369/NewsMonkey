import React from 'react'
import spinner from "./spinner.gif"

const Spinner = () => {
  return (
    <div className='text-center my-3'>
      <img src={spinner} style={{ height: "100px" }} alt='' />
    </div>
  )

}

export default Spinner