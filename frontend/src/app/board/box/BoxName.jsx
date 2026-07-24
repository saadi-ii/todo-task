import React from 'react'

const BoxName = (props) => {
  return (
    <div className='bg-gray-300 w-fit px-2 py-1 rounded-lg text-sm flex items-center justify-center'>
      <div className=''>{props.name}</div>
    </div>
  )
}

export default BoxName
