"use client"
import React from 'react'
import BoxName from "./box/BoxName"
import AddTask from "./box/AddTask"
import Task from "./box/Task"
import { useState, useEffect } from "react";
import axios from "axios";

const Box = (props) => {
  const [task, setTask] = useState([]);
      useEffect(() => {
          axios.get("http://localhost:7000/task/tasks").then((res) => {
              setTask(res.data.records)
          })
      }, [])
      

  return (
    <div className='w-70 bg-gray-100 h-fit p-2 rounded-2xl flex flex-col gap-2' >
      <header className='flex justify-between items-center'>
        <BoxName name={props.boxname}/>
        <AddTask boxname={props.boxname}/>
      </header>
      <main className='flex flex-col gap-2 scroll-auto'>
        {
          task.map((newTask)=>{
            if (newTask.boxname === props.boxname) {
              return <Task key={newTask._id} taskname={newTask.taskname} boxname={newTask.boxname}/>
            }
            else{
              return
            }
          })
        }
      </main>
      <footer>
        <AddTask detail="Add Task" boxname={props.boxname}/>
      </footer>
    </div>
  )
}

export default Box
