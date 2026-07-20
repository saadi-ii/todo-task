"use client"

import React from 'react'
import TaskName from './task/header/TaskName'
import MarkComplete from './task/header/MarkComplete'
import AddSubtask from './task/header/AddSubtask'
import Rename from './task/header/Rename'
import Assignee from './task/main/Assignee'
import DueDate from './task/main/DueDate'
import Priority from './task/main/Priority'
import Subtask from './task/footer/Subtask'

const Task = (props) => {
  return (
    <div className='bg-gray-50 h-fit p-2 rounded-2xl flex flex-col gap-2 m-2' >
      <header className='flex justify-between items-center'>
        <TaskName taskname={props.subtaskname} />
        <div className='flex gap-0.5 border rounded-lg p-1 border-gray-300'>
          <MarkComplete taskname={props.taskname} subtaskname={props.subtaskname}/>
          <Rename taskname={props.taskname} subtaskname={props.subtaskname}/>
        </div>
      </header>
      <main className='flex gap-0.5'>
        <Assignee />
        <DueDate />
        <Priority taskname={props.taskname} subtaskname={props.subtaskname}/>
      </main>
      <footer className='flex items-center gap-2'>
        <Subtask />

        <div className='text-gray-600'>subtask</div>
      </footer>

    </div>
  )
}

export default Task
