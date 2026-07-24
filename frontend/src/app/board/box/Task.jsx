"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import TaskName from "./task/header/TaskName";
import MarkComplete from "./task/header/MarkComplete";
import AddSubtask from "./task/header/AddSubtask";
import Rename from "./task/header/Rename";
import Delete from "./task/header/Delete";

import Assignee from "./task/main/Assignee";
import DueDate from "./task/main/DueDate";
import Priority from "./task/main/Priority";

import Subtask from "./task/footer/Subtask";
import SubTask from "./SubTask";

const Task = (props) => {
  const [task, setTask] = useState([]);
  const [Visibility, setVisibility] = useState("hidden");
  const [Visibility2, setVisibility2] = useState("hidden");
  const [Fetch, setFetch] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value
    console.log(comment);

    axios.patch("http://localhost:7000/task/comment-task", {
      comment: comment,
      taskname: props.taskname
    })
      .then(() => {
        setVisibility2("hidden")
        setFetch(true)
      })
      .catch((err) => {
        console.log(err);
      });
  }


useEffect(() => {
  axios
    .get("http://localhost:7000/subtask/subtasks")
    .then((res) => {
      setTask(res.data.records);
    })
    .catch((err) => {
      console.log(err);
    });
}, [Fetch]);

const handleBoxClick = () => {
  setVisibility2("visible");
};

return (
  <div
    className="bg-white h-fit p-2 rounded-2xl flex flex-col gap-2"
    onClick={handleBoxClick}
  >
    <header className="flex justify-between items-center">
      <TaskName taskname={props.taskname} />
      <div className="flex gap-0.5 border rounded-lg p-1 border-gray-300" onClick={(e) => e.stopPropagation()}>
        <MarkComplete taskname={props.taskname} subtaskname=""/>
        <AddSubtask taskname={props.taskname} />
        <Rename  taskname={props.taskname} subtaskname=""/>
        <Delete  taskname={props.taskname} subtaskname="" boxname={props.boxname} />
      </div>
    </header>

    <main className="flex gap-0.5" onClick={(e) => e.stopPropagation()}>
      <Assignee />
      <DueDate  taskname={props.taskname}  boxname={props.boxname} subtaskname=""/>
      <Priority taskname={props.taskname}  boxname={props.boxname} subtaskname=""/>
    </main>
    <footer className="flex items-center gap-2">
      <Subtask />
      <div className="text-gray-600 cursor-pointer" onClick={(e) => {
          e.stopPropagation();
          setVisibility(
            Visibility === "hidden"
              ? "visible"
              : "hidden"
          );
        }}>
        subtask
      </div>
    </footer>


    <div className={`${Visibility} flex flex-col gap-2`}>
      {task.map((newTask) => {
        if (newTask.taskname === props.taskname) {
          return (
            <SubTask key={newTask._id} taskname={newTask.taskname} subtaskname={newTask.subtaskname}/>
          );
        }
        return null;
      })}
    </div>

    {/* {Visibility2 === "visible" && (
      <div className="absolute flex justify-center items-center w-300 h-100" onClick={() => setVisibility2("hidden")} >
        <div onClick={(e) => e.stopPropagation()}>
          <form className={`${Visibility2} flex flex-col justify-center items-center`} onSubmit={handleSubmit}>
            <textarea name="comment" id='comment' placeholder='Comments' className='text-xl border px-2 rounded-xl border-gray-600 w-80 h-40 flex justify-center items-center'></textarea>
            <input type="submit" value="Submit" className='rounded-xl bg-gray-600 w-fit px-2 text-white mt-1 text-2xl' />
          </form>
        </div>
      </div>
    )} */}
  </div>
);

};

export default Task;