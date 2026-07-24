"use client"
import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

const Box = (props) => {
  const navigateToAbout = useRouter()
  const [task, setTask] = useState([]);
  const [Visibility, setVisibility] = useState("hidden")
  useEffect(() => {
    axios.get("http://localhost:7000/task/tasks").then((res) => {
      setTask(res.data.records)
    })
  }, [])

  function clickTrigger() {
    let data = [];
    for (const element of task) {
      if (element.boxname === props.boxname) {
        data.push(<div key={element._id} className='flex justify-center items-center text-xl bg-white mx-5 rounded-2xl p-2 '>
          {element.taskname}
        </div>)
      }
    }
    return data
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-200 bg-gray-100 rounded-2xl p-5' onClick={()=>{
        navigateToAbout.push("./board")
      }}>
      <div className='h-15 flex justify-between items-center' >
        <div className='text-2xl'>
          {props.boxname}
        </div>
        <div onClick={(e) => {
          setVisibility(Visibility==="hidden"?"visible":"hidden")
          e.stopPropagation()
        }}>
          {Visibility==="hidden"?<IoIosArrowDropdownCircle className='size-10' />:<IoIosArrowDropupCircle className='size-10' />}
          
        </div>
      </div>
      <div className={`${Visibility} flex flex-col gap-2 `}>
        {clickTrigger()}
      </div>
    </div>
    </div>
  )
}

export default Box
