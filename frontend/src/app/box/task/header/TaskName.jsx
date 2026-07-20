import React from 'react'

const BoxName = (props) => {
  return (
    <div className='min-h-[24px] flex items-center'>
      <div className='font-semibold'>{props.taskname}</div>
    </div>
  )
}

export default BoxName
