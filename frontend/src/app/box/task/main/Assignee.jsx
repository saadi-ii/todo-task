"use client"
import {useState} from 'react'
import {
  FiUser
} from "react-icons/fi";

const Assignee = () => {
  const [Visibility, setVisibility] = useState("hidden")
  return (
    <div className='border rounded-lg p-0.5 border-gray-400 relative'>
      <FiUser className='text-gray-600' onClick={()=>{
          if (Visibility==="hidden") {
            setVisibility("visible")
          } else {
            setVisibility("hidden")
          }
      }}/>
      <div className={`${Visibility} absolute left-0 top-12 bg-gray-500 text-white w-fit rounded-xl p-2`}>Saad</div>
    </div>
  )
}

export default Assignee
