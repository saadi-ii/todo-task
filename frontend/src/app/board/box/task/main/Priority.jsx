"use client"
import { useState,useEffect,useRef } from 'react'
import React from 'react'
import {FiFlag} from "react-icons/fi";
import axios from 'axios';

const Assignee = ({ taskname,boxname, subtaskname }) => {
  const [Visibility, setVisibility] = useState("hidden")
  const [GetPriority, setGetPriority] = useState("")

    const formref = useRef(null)


    const fetchPrority  =() => {
      if (boxname==="") {
        axios.get("http://localhost:7000/subtask/getpriority-subtask",{
        params:{
          taskname:taskname,
          subtaskname:subtaskname
        }
      }).then((e)=>{
        setGetPriority(e.data)
      })
      }
      else{
        axios.get("http://localhost:7000/task/getpriority-task",{
        params:{
          taskname:taskname,
          boxname:boxname
        }
      }).then((e)=>{
        setGetPriority(e.data)
      })
      }
    }
    useEffect(() => { 
      fetchPrority()
    }, [taskname])
  
    
  
    
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (
          formref.current &&
          !formref.current.contains(e.target)
        ) {
          setVisibility("hidden");
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () =>
        document.removeEventListener(
          "mousedown",
          handleClickOutside
        );
    }, []);
  
  const HandleSubmit =  (e) => {
    e.preventDefault();
    let priority = e.target.option.value
    
    
    
    if (subtaskname === "") {
      axios.patch("http://localhost:7000/task/priority-task", {
        taskname: taskname,
        boxname: boxname,
        priority: priority
      })
        .then(() => {
          setVisibility("hidden")
          fetchPrority()
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      axios.patch("http://localhost:7000/subtask/priority-subtask", { 
        subtaskname:subtaskname,
        taskname: taskname,
        priority: priority
       })
      .then(() => {
        setVisibility("hidden")
        fetchPrority()
      })
      .catch((err) => {
        setVisibility("hidden")

      });
    }

  };

  return (
    <div className='border rounded-lg p-0.5 border-gray-400 relative' >
      <FiFlag className='text-gray-600' onClick={() => {
        if (Visibility === "hidden") {
          setVisibility("visible")
        } else {
          setVisibility("hidden")
        }
      }} />
      <div className='rounded-xl bg-gray-600 w-fit px-2 left-6 bottom-0 text-white mt-1 absolute'>{GetPriority}</div>
      <form onSubmit={HandleSubmit} ref={formref}
        className={`${Visibility} absolute left-5 top-2 bg-gray-500 text-white  w-30 flex flex-col rounded-xl p-2 z-10`}>
        <div><input type="radio" name="option" id="urgent" value="urgent" /> <label htmlFor="urgent">urgent</label></div>
        <div><input type="radio" name="option" id="high" value="high" /> <label htmlFor="high">high</label></div>
        <div><input type="radio" name="option" id="normal" value="normal" /> <label htmlFor="normal">normal</label></div>
        <div><input type="radio" name="option" id="low" value="low" /> <label htmlFor="low">low</label></div>
        <input type="submit" value="Submit" className='rounded-xl bg-gray-600 w-fit px-2 text-white mt-1' />
      </form>
    </div>
  )
}

export default Assignee
